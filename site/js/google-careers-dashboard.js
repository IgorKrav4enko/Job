const RUNS_URL = "./data/google-careers-runs.json";
const DETAILS_URL = "./data/google-careers-run-details.json";

const state = {
  activeLocation: "all",
  activeRunId: null,
  runs: [],
  runDetailsById: new Map()
};

const refs = {
  filterRoot: document.getElementById("location-filter"),
  chart: document.getElementById("runs-chart"),
  chartCaption: document.getElementById("chart-caption"),
  chartRange: document.getElementById("chart-range"),
  metricTotal: document.getElementById("metric-total"),
  metricAdded: document.getElementById("metric-added"),
  metricRemoved: document.getElementById("metric-removed"),
  metricChanged: document.getElementById("metric-changed"),
  detailTitle: document.getElementById("detail-title"),
  detailSubtitle: document.getElementById("detail-subtitle"),
  detailAddedCount: document.getElementById("detail-added-count"),
  detailRemovedCount: document.getElementById("detail-removed-count"),
  detailChangedCount: document.getElementById("detail-changed-count"),
  addedList: document.getElementById("added-list"),
  removedList: document.getElementById("removed-list"),
  changedList: document.getElementById("changed-list"),
  addedBadge: document.getElementById("added-badge"),
  removedBadge: document.getElementById("removed-badge"),
  changedBadge: document.getElementById("changed-badge")
};

window.addEventListener("DOMContentLoaded", () => {
  void initializeDashboard();
});

async function initializeDashboard() {
  try {
    const [runsPayload, detailsPayload] = await Promise.all([
      fetchJson(RUNS_URL),
      fetchJson(DETAILS_URL)
    ]);

    state.runs = Array.isArray(runsPayload.runs) ? runsPayload.runs : [];
    state.runDetailsById = new Map(
      (Array.isArray(detailsPayload.runs) ? detailsPayload.runs : []).map((item) => [item.runId, item])
    );

    buildLocationFilters();
    if (state.runs.length > 0) {
      state.activeRunId = state.runs[state.runs.length - 1].runId;
    }

    render();
  } catch (error) {
    refs.chartCaption.textContent = "Не вдалося завантажити історію запусків.";
    refs.detailSubtitle.textContent = String(error);
  }
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load ${url}: ${response.status}`);
  }

  return response.json();
}

function buildLocationFilters() {
  const locationNames = new Set(["all"]);
  for (const run of state.runs) {
    for (const item of run.perLocation || []) {
      locationNames.add(item.location);
    }
  }

  refs.filterRoot.replaceChildren(
    ...Array.from(locationNames).map((location) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.location = location;
      button.className =
        "rounded-full border px-4 py-2 text-sm font-semibold transition-colors " +
        "border-white/10 bg-panelSoft text-text hover:border-sky hover:text-sky";
      button.textContent = location === "all" ? "All Locations" : location;
      button.addEventListener("click", () => {
        state.activeLocation = location;
        const filteredRuns = getFilteredRuns();
        state.activeRunId = filteredRuns.at(-1)?.runId ?? null;
        render();
      });
      return button;
    })
  );
}

function render() {
  updateFilterStyles();
  const filteredRuns = getFilteredRuns();
  renderMetrics(filteredRuns);
  renderChart(filteredRuns);
  renderRunDetails();
}

function updateFilterStyles() {
  for (const button of refs.filterRoot.querySelectorAll("button")) {
    const isActive = button.dataset.location === state.activeLocation;
    button.className =
      "rounded-full border px-4 py-2 text-sm font-semibold transition-colors " +
      (isActive
        ? "border-accent bg-accent text-base"
        : "border-white/10 bg-panelSoft text-text hover:border-sky hover:text-sky");
  }
}

function getFilteredRuns() {
  return state.runs
    .map((run) => mapRunForLocation(run, state.activeLocation))
    .filter(Boolean);
}

function mapRunForLocation(run, location) {
  if (location === "all") {
    return {
      runId: run.runId,
      generatedAt: run.generatedAt,
      totalJobs: run.totalJobs,
      addedCount: run.addedCount,
      removedCount: run.removedCount,
      changedCount: run.changedCount,
      unchangedCount: run.unchangedCount
    };
  }

  const local = (run.perLocation || []).find((item) => item.location === location);
  if (!local) {
    return null;
  }

  return {
    runId: run.runId,
    generatedAt: run.generatedAt,
    totalJobs: local.totalJobs,
    addedCount: local.addedCount,
    removedCount: local.removedCount,
    changedCount: local.changedCount,
    unchangedCount: local.unchangedCount
  };
}

function renderMetrics(filteredRuns) {
  const latest = filteredRuns.at(-1);
  refs.metricTotal.textContent = latest ? String(latest.totalJobs) : "0";
  refs.metricAdded.textContent = latest ? `+${latest.addedCount}` : "0";
  refs.metricRemoved.textContent = latest ? `-${latest.removedCount}` : "0";
  refs.metricChanged.textContent = latest ? `~${latest.changedCount}` : "0";

  refs.chartCaption.textContent = latest
    ? `Останній запуск: ${formatDate(latest.generatedAt)}`
    : "Немає запусків для вибраної локації.";
  refs.chartRange.textContent = `${filteredRuns.length} run${filteredRuns.length === 1 ? "" : "s"}`;
}

function renderChart(filteredRuns) {
  const svg = refs.chart;
  const width = 920;
  const height = 340;
  const margin = { top: 28, right: 24, bottom: 58, left: 52 };

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.replaceChildren();

  if (filteredRuns.length === 0) {
    svg.appendChild(createSvgText(width / 2, height / 2, "Немає даних для цієї локації.", "middle"));
    return;
  }

  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const totals = filteredRuns.map((run) => run.totalJobs);
  const minValue = Math.min(...totals);
  const maxValue = Math.max(...totals);
  const yMin = Math.max(0, minValue - 2);
  const yMax = Math.max(yMin + 4, maxValue + 2);

  const xForIndex = (index) => margin.left + (filteredRuns.length === 1 ? chartWidth / 2 : (index / (filteredRuns.length - 1)) * chartWidth);
  const yForValue = (value) => margin.top + chartHeight - ((value - yMin) / (yMax - yMin)) * chartHeight;

  const grid = document.createElementNS("http://www.w3.org/2000/svg", "g");
  grid.setAttribute("class", "chart-grid");
  const yTicks = 4;
  for (let tick = 0; tick <= yTicks; tick += 1) {
    const y = margin.top + (tick / yTicks) * chartHeight;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(margin.left));
    line.setAttribute("x2", String(width - margin.right));
    line.setAttribute("y1", String(y));
    line.setAttribute("y2", String(y));
    grid.appendChild(line);

    const value = Math.round(yMax - (tick / yTicks) * (yMax - yMin));
    grid.appendChild(createSvgText(margin.left - 12, y + 4, String(value), "end", "rgba(148,163,184,0.78)"));
  }
  svg.appendChild(grid);

  const path = filteredRuns
    .map((run, index) => `${index === 0 ? "M" : "L"} ${xForIndex(index)} ${yForValue(run.totalJobs)}`)
    .join(" ");
  const linePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  linePath.setAttribute("d", path);
  linePath.setAttribute("fill", "none");
  linePath.setAttribute("stroke", "#38bdf8");
  linePath.setAttribute("stroke-width", "3");
  linePath.setAttribute("stroke-linecap", "round");
  linePath.setAttribute("stroke-linejoin", "round");
  svg.appendChild(linePath);

  filteredRuns.forEach((run, index) => {
    const x = xForIndex(index);
    const y = yForValue(run.totalJobs);
    const pointGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    pointGroup.setAttribute("class", `chart-point${run.runId === state.activeRunId ? " is-active" : ""}`);

    const halo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    halo.setAttribute("cx", String(x));
    halo.setAttribute("cy", String(y));
    halo.setAttribute("r", "10");
    halo.setAttribute("fill", "rgba(56, 189, 248, 0.18)");
    pointGroup.appendChild(halo);

    const point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    point.setAttribute("cx", String(x));
    point.setAttribute("cy", String(y));
    point.setAttribute("r", "5.5");
    point.setAttribute("fill", "#4ade80");
    point.setAttribute("stroke", "#07111f");
    point.setAttribute("stroke-width", "2");
    pointGroup.appendChild(point);

    const deltaText = createSvgText(
      x,
      y - 16,
      `${formatSigned(run.addedCount)} / ${formatRemoved(run.removedCount)}`,
      "middle",
      "rgba(226,232,240,0.92)"
    );
    deltaText.setAttribute("font-size", "11");
    svg.appendChild(deltaText);

    const label = createSvgText(x, height - 20, shortDate(run.generatedAt), "middle", "rgba(148,163,184,0.82)");
    label.setAttribute("font-size", "11");
    svg.appendChild(label);

    const hit = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    hit.setAttribute("class", "chart-hit");
    hit.setAttribute("cx", String(x));
    hit.setAttribute("cy", String(y));
    hit.setAttribute("r", "18");
    hit.addEventListener("click", () => {
      state.activeRunId = run.runId;
      render();
    });

    svg.appendChild(pointGroup);
    svg.appendChild(hit);
  });
}

function renderRunDetails() {
  const detail = state.runDetailsById.get(state.activeRunId);
  const run = state.runs.find((item) => item.runId === state.activeRunId);
  if (!detail || !run) {
    refs.detailTitle.textContent = "Оберіть точку";
    refs.detailSubtitle.textContent = "Клік по точці на графіку покаже дельту для конкретного проходу парсера.";
    renderDetailList(refs.addedList, []);
    renderDetailList(refs.removedList, []);
    renderChangedList([]);
    updateDetailBadges(0, 0, 0);
    return;
  }

  const scoped = getDetailForLocation(detail, state.activeLocation);
  refs.detailTitle.textContent = formatDate(run.generatedAt);
  refs.detailSubtitle.textContent =
    state.activeLocation === "all"
      ? "Глобальна дельта по всіх локаціях."
      : `Дельта тільки для ${state.activeLocation}.`;

  updateDetailBadges(scoped.added.length, scoped.removed.length, scoped.changed.length);
  renderDetailList(refs.addedList, scoped.added, "accent");
  renderDetailList(refs.removedList, scoped.removed, "rose");
  renderChangedList(scoped.changed);
}

function getDetailForLocation(detail, location) {
  if (location === "all") {
    return {
      added: detail.added || [],
      removed: detail.removed || [],
      changed: detail.changed || []
    };
  }

  const local = (detail.perLocation || []).find((item) => item.location === location);
  return {
    added: local?.added || [],
    removed: local?.removed || [],
    changed: local?.changed || []
  };
}

function updateDetailBadges(addedCount, removedCount, changedCount) {
  refs.detailAddedCount.textContent = String(addedCount);
  refs.detailRemovedCount.textContent = String(removedCount);
  refs.detailChangedCount.textContent = String(changedCount);
  refs.addedBadge.textContent = `${addedCount} item${addedCount === 1 ? "" : "s"}`;
  refs.removedBadge.textContent = `${removedCount} item${removedCount === 1 ? "" : "s"}`;
  refs.changedBadge.textContent = `${changedCount} item${changedCount === 1 ? "" : "s"}`;
}

function renderDetailList(root, items, tone = "text") {
  root.replaceChildren();
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "rounded-2xl border border-dashed border-white/10 px-4 py-4 text-sm text-muted";
    empty.textContent = "Немає змін у цій категорії.";
    root.appendChild(empty);
    return;
  }

  root.replaceChildren(
    ...items.map((item) => {
      const article = document.createElement("article");
      article.className = "rounded-[20px] border border-white/5 bg-[#0d1726] p-4";

      const title = document.createElement("a");
      title.className = `block text-sm font-semibold text-${tone === "accent" ? "accent" : tone === "rose" ? "rose" : "text"} hover:text-sky`;
      title.href = item.url;
      title.target = "_blank";
      title.rel = "noreferrer";
      title.textContent = item.title;

      const meta = document.createElement("p");
      meta.className = "mt-2 text-xs uppercase tracking-[0.22em] text-muted";
      meta.textContent = [item.company, item.requestedLocation].filter(Boolean).join(" • ");

      const locationLine = document.createElement("p");
      locationLine.className = "mt-3 text-sm text-muted";
      locationLine.textContent = (item.locations || []).join(", ");

      article.append(title, meta, locationLine);
      return article;
    })
  );
}

function renderChangedList(items) {
  refs.changedList.replaceChildren();
  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "rounded-2xl border border-dashed border-white/10 px-4 py-4 text-sm text-muted";
    empty.textContent = "Змін у ключових полях не виявлено.";
    refs.changedList.appendChild(empty);
    return;
  }

  refs.changedList.replaceChildren(
    ...items.map((item) => {
      const article = document.createElement("article");
      article.className = "rounded-[20px] border border-white/5 bg-[#0d1726] p-4";

      const title = document.createElement("a");
      title.className = "block text-sm font-semibold text-amber hover:text-sky";
      title.href = item.url;
      title.target = "_blank";
      title.rel = "noreferrer";
      title.textContent = item.title;

      const meta = document.createElement("p");
      meta.className = "mt-2 text-xs uppercase tracking-[0.22em] text-muted";
      meta.textContent = [item.company, item.requestedLocation].filter(Boolean).join(" • ");

      const changes = document.createElement("p");
      changes.className = "mt-3 text-sm text-muted";
      changes.textContent = `Changed fields: ${(item.changedFields || []).join(", ") || "n/a"}`;

      const hash = document.createElement("p");
      hash.className = "mt-2 text-xs text-muted";
      hash.textContent = `${item.previousHash.slice(0, 10)} -> ${item.currentHash.slice(0, 10)}`;

      article.append(title, meta, changes, hash);
      return article;
    })
  );
}

function createSvgText(x, y, text, anchor = "start", fill = "rgba(226,232,240,0.9)") {
  const node = document.createElementNS("http://www.w3.org/2000/svg", "text");
  node.setAttribute("x", String(x));
  node.setAttribute("y", String(y));
  node.setAttribute("fill", fill);
  node.setAttribute("font-size", "12");
  node.setAttribute("font-family", "Space Grotesk, sans-serif");
  node.setAttribute("text-anchor", anchor);
  node.textContent = text;
  return node;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("uk-UA", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function shortDate(value) {
  return new Intl.DateTimeFormat("uk-UA", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function formatSigned(value) {
  return `+${value}`;
}

function formatRemoved(value) {
  return `-${value}`;
}
