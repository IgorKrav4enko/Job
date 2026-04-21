const SOURCES = {
  google: {
    key: "google",
    label: "Google Careers",
    runsUrl: "./data/google-careers-runs.json",
    detailsUrl: "./data/google-careers-run-details.json",
    jobsUrl: "./data/google-careers-jobs.json"
  },
  meta: {
    key: "meta",
    label: "Meta Careers",
    runsUrl: "./data/meta-careers-runs.json",
    detailsUrl: "./data/meta-careers-run-details.json",
    jobsUrl: "./data/meta-careers-jobs.json"
  },
  apple: {
    key: "apple",
    label: "Apple Jobs",
    runsUrl: "./data/apple-careers-runs.json",
    detailsUrl: "./data/apple-careers-run-details.json",
    jobsUrl: "./data/apple-careers-jobs.json"
  },
  microsoft: {
    key: "microsoft",
    label: "Microsoft Careers",
    runsUrl: "./data/microsoft-careers-runs.json",
    detailsUrl: "./data/microsoft-careers-run-details.json",
    jobsUrl: "./data/microsoft-careers-jobs.json",
    allowMissingHistory: true
  },
  nvidia: {
    key: "nvidia",
    label: "NVIDIA Careers",
    runsUrl: "./data/nvidia-careers-runs.json",
    detailsUrl: "./data/nvidia-careers-run-details.json",
    jobsUrl: "./data/nvidia-careers-jobs.json",
    allowMissingHistory: true
  },
  amazon: {
    key: "amazon",
    label: "Amazon Jobs",
    runsUrl: "./data/amazon-jobs-runs.json",
    detailsUrl: "./data/amazon-jobs-run-details.json",
    jobsUrl: "./data/amazon-jobs-jobs.json",
    allowMissingHistory: true
  }
};

const SOURCE_STORAGE_KEY = "careers-dashboard-source";

const state = {
  activeSource: getInitialSourceKey(),
  activeTab: "history",
  activeLocation: "all",
  activeRunId: null,
  runs: [],
  runDetailsById: new Map(),
  jobs: [],
  activeCountry: "all",
  activeCity: "all",
  removedCountry: "all",
  removedCity: "all"
};

const refs = {
  sourceRoot: document.getElementById("source-switcher"),
  activeSourceLabel: document.getElementById("active-source-label"),
  tabsRoot: document.getElementById("dashboard-tabs"),
  historyPanel: document.getElementById("history-panel"),
  livePanel: document.getElementById("live-panel"),
  removedPanel: document.getElementById("removed-panel"),
  filterRoot: document.getElementById("location-filter"),
  chart: document.getElementById("runs-chart"),
  chartCaption: document.getElementById("chart-caption"),
  chartRange: document.getElementById("chart-range"),
  metricTotal: document.getElementById("metric-total"),
  metricActiveNow: document.getElementById("metric-active-now"),
  metricAdded: document.getElementById("metric-added"),
  metricRemoved: document.getElementById("metric-removed"),
  metricChanged: document.getElementById("metric-changed"),
  metricAddedLine: document.getElementById("metric-added-line"),
  metricAddedHint: document.getElementById("metric-added-hint"),
  metricRemovedLine: document.getElementById("metric-removed-line"),
  metricRemovedHint: document.getElementById("metric-removed-hint"),
  metricChangedLine: document.getElementById("metric-changed-line"),
  metricChangedHint: document.getElementById("metric-changed-hint"),
  jobsCaption: document.getElementById("jobs-caption"),
  jobsActiveCount: document.getElementById("jobs-active-count"),
  jobsList: document.getElementById("jobs-list"),
  removedJobsCaption: document.getElementById("removed-jobs-caption"),
  removedJobsCount: document.getElementById("removed-jobs-count"),
  removedJobsList: document.getElementById("removed-jobs-list"),
  removedCountryFilterChips: document.getElementById("removed-country-filter-chips"),
  removedCityFilterSection: document.getElementById("removed-city-filter-section"),
  removedCityFilterChips: document.getElementById("removed-city-filter-chips"),
  countryFilterChips: document.getElementById("country-filter-chips"),
  cityFilterSection: document.getElementById("city-filter-section"),
  cityFilterChips: document.getElementById("city-filter-chips"),
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
  bindSourceSwitcher();
  bindTabs();
  await loadSourceData(state.activeSource);
}

async function loadSourceData(sourceKey) {
  const source = SOURCES[sourceKey] || SOURCES.google;
  try {
    const [runsPayload, detailsPayload, jobsPayload] = await Promise.all([
      source.allowMissingHistory ? fetchJsonOrDefault(source.runsUrl, { runs: [] }) : fetchJson(source.runsUrl),
      source.allowMissingHistory ? fetchJsonOrDefault(source.detailsUrl, { runs: [] }) : fetchJson(source.detailsUrl),
      fetchJson(source.jobsUrl)
    ]);

    state.activeSource = source.key;
    state.runs = Array.isArray(runsPayload.runs) ? runsPayload.runs : [];
    state.runDetailsById = new Map(
      (Array.isArray(detailsPayload.runs) ? detailsPayload.runs : []).map((item) => [item.runId, item])
    );
    state.jobs = Array.isArray(jobsPayload.jobs) ? jobsPayload.jobs : [];
    resetSelectionState();
    if (state.runs.length > 0) {
      state.activeRunId = state.runs[state.runs.length - 1].runId;
    }

    localStorage.setItem(SOURCE_STORAGE_KEY, state.activeSource);
    render();
  } catch (error) {
    state.activeSource = source.key;
    state.runs = [];
    state.runDetailsById = new Map();
    state.jobs = [];
    resetSelectionState();
    render();
    refs.chartCaption.textContent = `Не вдалося завантажити дані для ${source.label}.`;
    refs.detailSubtitle.textContent = String(error);
  }
}

function getInitialSourceKey() {
  const stored = localStorage.getItem(SOURCE_STORAGE_KEY);
  return stored && SOURCES[stored] ? stored : "google";
}

function resetSelectionState() {
  state.activeLocation = "all";
  state.activeRunId = null;
  state.activeCountry = "all";
  state.activeCity = "all";
  state.removedCountry = "all";
  state.removedCity = "all";
}

function bindSourceSwitcher() {
  for (const button of refs.sourceRoot.querySelectorAll("[data-source]")) {
    button.addEventListener("click", () => {
      const sourceKey = button.dataset.source || "google";
      if (sourceKey === state.activeSource) {
        return;
      }

      void loadSourceData(sourceKey);
    });
  }
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load ${url}: ${response.status}`);
  }

  return response.json();
}

async function fetchJsonOrDefault(url, fallback) {
  const response = await fetch(url);
  if (!response.ok) {
    return fallback;
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

  const allButtonRow = document.createElement("div");
  allButtonRow.className = "flex flex-wrap gap-2";
  allButtonRow.appendChild(createLocationButton("all"));

  const countrySection = document.createElement("div");
  countrySection.className = "rounded-[20px] border border-white/10 bg-panelSoft/60 p-3";

  const sectionLabel = document.createElement("p");
  sectionLabel.className = "mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted";
  sectionLabel.textContent = "Countries";

  const countryButtons = document.createElement("div");
  countryButtons.className = "flex flex-wrap gap-2";
  Array.from(locationNames)
    .filter((location) => location !== "all")
    .sort((left, right) => left.localeCompare(right, "uk"))
    .forEach((location) => {
      const cities = getRelevantCitiesForCountry(location);
      const cityCaption = cities.length === 1 ? cities[0] : null;
      countryButtons.appendChild(createLocationButton(location, cityCaption));
    });

  const sections = [allButtonRow];
  countrySection.append(sectionLabel, countryButtons);
  sections.push(countrySection);

  if (state.activeLocation !== "all") {
    const cities = getRelevantCitiesForCountry(state.activeLocation);
    if (cities.length > 1) {
      const citySection = document.createElement("div");
      citySection.className = "rounded-[20px] border border-white/10 bg-panelSoft/60 p-3";

      const cityLabel = document.createElement("p");
      cityLabel.className = "mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted";
      cityLabel.textContent = "Cities";

      const cityButtons = document.createElement("div");
      cityButtons.className = "flex flex-wrap gap-2";
      cities.forEach((city) => {
        const button = createFilterChip(city, state.activeCity === city, () => {
          state.activeCity = city;
          const filteredRuns = getFilteredRuns();
          state.activeRunId = filteredRuns.at(-1)?.runId ?? null;
          render();
        });
        cityButtons.appendChild(button);
      });

      citySection.append(cityLabel, cityButtons);
      sections.push(citySection);
    }
  }

  refs.filterRoot.replaceChildren(...sections);
}

function createLocationButton(location, subLabel = null) {
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.location = location;
  const isActive = state.activeLocation === location;
  button.className =
    "rounded-full border px-4 py-2 text-sm font-semibold leading-tight transition-colors " +
    (isActive
      ? "border-accent bg-accent text-base"
      : "border-white/10 bg-panelSoft text-text hover:border-sky hover:text-sky");
  setChipContent(button, location === "all" ? "All Locations" : getCountryLabel(location), subLabel);
  button.addEventListener("click", () => {
    state.activeLocation = location;
    state.activeCountry = location === "all" ? "all" : location;
    state.activeCity = "all";
    const filteredRuns = getFilteredRuns();
    state.activeRunId = filteredRuns.at(-1)?.runId ?? null;
    render();
  });
  return button;
}

function getCountryLabel(location) {
  const parts = location.split(",").map((item) => item.trim()).filter(Boolean);
  return parts.at(-1) || location;
}

function bindTabs() {
  for (const button of refs.tabsRoot.querySelectorAll("[data-tab]")) {
    button.addEventListener("click", () => {
      state.activeTab = button.dataset.tab || "history";
      render();
    });
  }
}

function selectCountry(value) {
  state.activeCountry = value;
  state.activeCity = "all";
  render();
}

function selectCity(value) {
  state.activeCity = value;
  render();
}

function render() {
  renderSourceSwitcher();
  renderTabs();
  buildLocationFilters();
  const filteredRuns = getFilteredRuns();
  renderMetrics(filteredRuns);
  renderChart(filteredRuns);
  renderRunDetails();
  renderLiveFilterChips();
  renderJobs();
  renderRemovedJobs();
}

function renderSourceSwitcher() {
  const source = SOURCES[state.activeSource] || SOURCES.google;
  refs.activeSourceLabel.textContent = source.label;

  for (const button of refs.sourceRoot.querySelectorAll("[data-source]")) {
    const isActive = button.dataset.source === state.activeSource;
    button.className =
      "rounded-full border px-4 py-2 text-sm font-semibold transition-colors " +
      (isActive
        ? "border-sky bg-sky text-base"
        : "border-white/10 bg-panelSoft text-text hover:border-sky hover:text-sky");
  }
}

function renderTabs() {
  for (const button of refs.tabsRoot.querySelectorAll("[data-tab]")) {
    const isActive = button.dataset.tab === state.activeTab;
    button.className =
      "rounded-full border px-5 py-3 text-sm font-semibold transition-colors " +
      (isActive
        ? "border-accent bg-accent text-base"
        : "border-white/10 bg-panelSoft text-text hover:border-sky hover:text-sky");
  }

  refs.historyPanel.hidden = state.activeTab !== "history";
  refs.livePanel.hidden = state.activeTab !== "live";
  refs.removedPanel.hidden = state.activeTab !== "removed";
}

function getFilteredRuns() {
  return state.runs
    .map((run) => mapRunForSelection(run, state.activeLocation, state.activeCity))
    .filter(Boolean);
}

function mapRunForSelection(run, location, city) {
  if (location === "all" && city === "all") {
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

  const detail = state.runDetailsById.get(run.runId);
  if (!detail) {
    return null;
  }

  const scoped = getDetailForSelection(detail, location, city);
  return {
    runId: run.runId,
    generatedAt: run.generatedAt,
    totalJobs: scoped.added.length + scoped.changed.length + scoped.unchanged.length,
    addedCount: scoped.added.length,
    removedCount: scoped.removed.length,
    changedCount: scoped.changed.length,
    unchangedCount: scoped.unchanged.length
  };
}

function renderMetrics(filteredRuns) {
  const latest = filteredRuns.at(-1);
  refs.metricActiveNow.textContent = String(getFilteredJobsForHistory().length);
  refs.metricTotal.textContent = latest ? String(latest.totalJobs) : "0";
  refs.metricAdded.textContent = latest ? `+${latest.addedCount}` : "0";
  refs.metricRemoved.textContent = latest ? `-${latest.removedCount}` : "0";
  refs.metricChanged.textContent = latest ? `~${latest.changedCount}` : "0";

  refs.chartCaption.textContent = latest
    ? `Останній запуск: ${formatDate(latest.generatedAt)}${getHistorySelectionSuffix()}`
    : "Немає запусків для вибраної локації.";
  refs.chartRange.textContent = `${filteredRuns.length} run${filteredRuns.length === 1 ? "" : "s"}`;
}

function getJobsForActiveLocation() {
  return state.jobs
    .filter((job) => job.isActive)
    .filter((job) => state.activeLocation === "all" || job.requestedLocation === state.activeLocation);
}

function renderLiveFilterChips() {
  const locationScopedJobs = getJobsForActiveLocation();
  const grouped = groupJobsByCountry(locationScopedJobs);
  const countries = Array.from(grouped.keys()).sort((a, b) => a.localeCompare(b, "uk"));

  if (state.activeCountry !== "all" && !countries.includes(state.activeCountry)) {
    state.activeCountry = "all";
  }

  refs.countryFilterChips.replaceChildren(
    createFilterChip(`Усі країни (${locationScopedJobs.length})`, state.activeCountry === "all", () => selectCountry("all")),
    ...countries.map((country) => {
      const cities = getRelevantCitiesForCountry(country);
      const countryCount = countJobsForCountry(locationScopedJobs, country);
      const cityCaption = cities.length === 1 ? `${cities[0]} (${countJobsForCity(locationScopedJobs, country, cities[0])})` : null;
      return createFilterChip(`${country} (${countryCount})`, state.activeCountry === country, () => selectCountry(country), cityCaption);
    })
  );

  const countryScopedJobs = locationScopedJobs.filter(
    (job) => state.activeCountry === "all" || getRequestedCountry(job) === state.activeCountry
  );
  const cities = Array.from(new Set(countryScopedJobs.map((job) => getPrimaryCityForRequestedCountry(job)).filter(Boolean))).sort((a, b) => a.localeCompare(b, "uk"));

  if (state.activeCity !== "all" && !cities.includes(state.activeCity)) {
    state.activeCity = "all";
  }

  refs.cityFilterSection.hidden = !(state.activeCountry !== "all" && cities.length > 1);
  refs.cityFilterChips.replaceChildren(
    createFilterChip(`Усі міста (${countryScopedJobs.length})`, state.activeCity === "all", () => selectCity("all")),
    ...cities.map((city) =>
      createFilterChip(`${city} (${countJobsForCity(locationScopedJobs, state.activeCountry, city)})`, state.activeCity === city, () => selectCity(city)))
  );
}

function countJobsForCountry(jobs, country) {
  return jobs.filter((job) => getRequestedCountry(job) === country).length;
}

function countJobsForCity(jobs, country, city) {
  return jobs.filter((job) =>
    getRequestedCountry(job) === country &&
    getPrimaryCityForRequestedCountry(job) === city).length;
}

function groupJobsByCountry(jobs) {
  const groups = new Map();
  for (const job of jobs) {
    const country = getRequestedCountry(job);
    const city = getPrimaryCityForRequestedCountry(job);
    if (!country) {
      continue;
    }

    if (!groups.has(country)) {
      groups.set(country, new Set());
    }

    if (city) {
      groups.get(country).add(city);
    }
  }

  return groups;
}

function createFilterChip(label, isActive, onClick, subLabel = null) {
  const button = document.createElement("button");
  button.type = "button";
  button.className =
    "rounded-full border px-4 py-2 text-sm font-semibold leading-tight transition-colors " +
    (isActive
      ? "border-accent bg-accent text-base"
      : "border-white/10 bg-panelSoft text-text hover:border-sky hover:text-sky");
  setChipContent(button, label, subLabel);
  button.addEventListener("click", onClick);
  return button;
}

function setChipContent(button, label, subLabel) {
  const labelSpan = document.createElement("span");
  labelSpan.textContent = label;

  if (!subLabel) {
    button.replaceChildren(labelSpan);
    return;
  }

  const subLabelSpan = document.createElement("span");
  subLabelSpan.className = "block text-[11px] font-medium text-muted";
  subLabelSpan.textContent = subLabel;
  button.replaceChildren(labelSpan, subLabelSpan);
}

function getFilteredJobs() {
  return getJobsForActiveLocation()
    .filter((job) => state.activeCountry === "all" || getRequestedCountry(job) === state.activeCountry)
    .filter((job) => state.activeCity === "all" || getPrimaryCityForRequestedCountry(job) === state.activeCity)
    .sort((left, right) =>
      getDateTime(right.firstSeenAt) - getDateTime(left.firstSeenAt) ||
      left.title.localeCompare(right.title, "uk"));
}

function getDateTime(value) {
  return value ? new Date(value).getTime() || 0 : 0;
}

function getFilteredJobsForHistory() {
  return getJobsForActiveLocation()
    .filter((job) => state.activeCity === "all" || getPrimaryCityForRequestedCountry(job) === state.activeCity);
}

function getRelevantCitiesForCountry(country) {
  return Array.from(
    new Set(
      getJobsForActiveLocation()
        .filter((job) => getRequestedCountry(job) === country)
        .map((job) => getPrimaryCityForRequestedCountry(job))
        .filter(Boolean)
    )
  ).sort((left, right) => left.localeCompare(right, "uk"));
}

function getRequestedCountry(job) {
  const fallback = getCountryFromJob(job);
  return normalizeCountryName(job.requestedLocation || fallback);
}

function normalizeCountryName(value) {
  const normalized = String(value || "").trim();
  const aliases = new Map([
    ["UK", "United Kingdom"],
    ["U.K.", "United Kingdom"],
    ["United Kingdom", "United Kingdom"],
    ["Ireland", "Ireland"],
    ["Poland", "Poland"],
    ["Switzerland", "Switzerland"],
    ["Germany", "Germany"],
    ["USA", "United States"],
    ["US", "United States"],
    ["United States", "United States"],
    ["CH", "Switzerland"],
    ["PL", "Poland"],
    ["DE", "Germany"],
    ["IE", "Ireland"]
  ]);
  return aliases.get(normalized) || normalized;
}

function getCountryFromJob(job) {
  const sources = Array.isArray(job.locations) && job.locations.length ? job.locations : [job.requestedLocation || ""];
  for (const source of sources) {
    const parts = String(source).split(",").map((item) => item.trim()).filter(Boolean);
    if (parts.length >= 2) {
      return normalizeCountryName(parts.at(-1) || "");
    }
  }

  const fallbackParts = String(job.requestedLocation || "").split(",").map((item) => item.trim()).filter(Boolean);
  return normalizeCountryName(fallbackParts.at(-1) || "");
}

function getPrimaryCityForRequestedCountry(job) {
  const requestedCountry = getRequestedCountry(job);
  const sources = Array.isArray(job.locations) && job.locations.length ? job.locations : [job.requestedLocation || ""];
  for (const source of sources) {
    const parts = String(source).split(",").map((item) => item.trim()).filter(Boolean);
    if (parts.length >= 2 && normalizeCountryName(parts.at(-1) || "") === requestedCountry) {
      return parts[0] || "";
    }
  }

  return getCityFromJob(job);
}

function getCityFromJob(job) {
  const sources = Array.isArray(job.locations) && job.locations.length ? job.locations : [job.requestedLocation || ""];
  for (const source of sources) {
    const parts = String(source).split(",").map((item) => item.trim()).filter(Boolean);
    if (parts.length >= 2) {
      return parts[0] || "";
    }
  }

  const fallbackParts = String(job.requestedLocation || "").split(",").map((item) => item.trim()).filter(Boolean);
  return fallbackParts[0] || "";
}

function renderJobs() {
  const filteredJobs = getFilteredJobs();
  refs.jobsActiveCount.textContent = String(filteredJobs.length);
  const captionParts = [];
  if (state.activeLocation === "all") {
    captionParts.push("усіх локацій");
  } else {
    captionParts.push(state.activeLocation);
  }
  if (state.activeCountry !== "all") {
    captionParts.push(state.activeCountry);
  }
  if (state.activeCity !== "all") {
    captionParts.push(state.activeCity);
  }
  refs.jobsCaption.textContent = `Поточний список активних вакансій для ${captionParts.join(" / ")}. Показано ${filteredJobs.length} позицій.`;

  refs.jobsList.replaceChildren();
  if (!filteredJobs.length) {
    const empty = document.createElement("div");
    empty.className = "rounded-[22px] border border-dashed border-white/10 px-4 py-6 text-sm text-muted";
    empty.textContent = "Для цієї локації зараз немає активних вакансій у поточному snapshot.";
    refs.jobsList.appendChild(empty);
    return;
  }

  refs.jobsList.replaceChildren(
    ...filteredJobs.map((job) => {
      const freshness = getFreshnessBadge(job.firstSeenAt);
      const row = document.createElement("article");
      row.className =
        "grid gap-3 rounded-[22px] border border-l-4 bg-panelSoft/72 p-4 md:grid-cols-[minmax(0,1.4fr)_170px_170px_190px] " +
        (freshness?.cardClass || "border-white/10 border-l-white/10");

      const titleWrap = document.createElement("div");
      const title = document.createElement("a");
      title.className = "block font-heading text-base font-bold text-slate-100 transition-colors hover:text-sky";
      title.href = job.url;
      title.target = "_blank";
      title.rel = "noreferrer";
      title.textContent = job.title;

      if (freshness) {
        const badge = document.createElement("span");
        badge.className = `mb-2 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${freshness.badgeClass}`;
        badge.textContent = freshness.label;
        titleWrap.appendChild(badge);
      }

      const company = document.createElement("p");
      company.className = "mt-2 text-sm text-muted";
      company.textContent = job.company || "Unknown brand";
      titleWrap.append(title, company);

      const requestedLocation = document.createElement("div");
      requestedLocation.className = "text-sm leading-6 text-muted";
      requestedLocation.textContent = job.requestedLocation || "n/a";

      const timing = document.createElement("div");
      timing.className = "text-sm leading-6 text-muted";
      timing.innerHTML =
        `<div>First seen: ${job.firstSeenAt ? shortDate(job.firstSeenAt) : "n/a"}</div>` +
        `<div>Verified: ${job.lastSeenAt ? shortDate(job.lastSeenAt) : "n/a"}</div>`;

      const locations = document.createElement("div");
      locations.className = "text-sm leading-6 text-muted";
      locations.textContent = Array.isArray(job.locations) && job.locations.length ? job.locations.join(", ") : "n/a";

      row.append(titleWrap, requestedLocation, timing, locations);
      return row;
    })
  );
}

function getFreshnessBadge(firstSeenAt) {
  const ageInDays = getAgeInDays(firstSeenAt);
  if (ageInDays === null) {
    return null;
  }

  if (ageInDays < 1) {
    return {
      label: "New today",
      cardClass: "border-white/10 border-l-accent shadow-[inset_10px_0_22px_rgba(74,222,128,0.06)]",
      badgeClass: "border-accent/30 bg-accent/10 text-accent"
    };
  }

  if (ageInDays <= 3) {
    return {
      label: "Last 3 days",
      cardClass: "border-white/10 border-l-amber shadow-[inset_10px_0_22px_rgba(245,158,11,0.06)]",
      badgeClass: "border-amber/30 bg-amber/10 text-amber"
    };
  }

  if (ageInDays <= 7) {
    return {
      label: "This week",
      cardClass: "border-white/10 border-l-sky shadow-[inset_10px_0_22px_rgba(56,189,248,0.06)]",
      badgeClass: "border-sky/30 bg-sky/10 text-sky"
    };
  }

  return null;
}

function getAgeInDays(value) {
  const timestamp = getDateTime(value);
  if (!timestamp) {
    return null;
  }

  return (Date.now() - timestamp) / (1000 * 60 * 60 * 24);
}

function renderRemovedJobs() {
  const allRemovedJobs = getRemovedJobsHistory();
  renderRemovedFilterChips(allRemovedJobs);
  const removedJobs = getFilteredRemovedJobs(allRemovedJobs);
  refs.removedJobsCount.textContent = String(removedJobs.length);
  refs.removedJobsCaption.textContent =
    `Вакансії, які зникли з результатів, від найсвіжіше видалених до найстаріших. Показано ${removedJobs.length} позицій.`;

  refs.removedJobsList.replaceChildren();
  if (!removedJobs.length) {
    const empty = document.createElement("div");
    empty.className = "rounded-[22px] border border-dashed border-white/10 px-4 py-6 text-sm text-muted";
    empty.textContent = "Поки що немає видалених вакансій в історії запусків.";
    refs.removedJobsList.appendChild(empty);
    return;
  }

  refs.removedJobsList.replaceChildren(
    ...removedJobs.map((job) => {
      const row = document.createElement("article");
      row.className = "grid gap-3 rounded-[22px] border border-white/10 bg-panelSoft/72 p-4 md:grid-cols-[minmax(0,1.4fr)_170px_170px_190px]";

      const titleWrap = document.createElement("div");
      const title = document.createElement("a");
      title.className = "block font-heading text-base font-bold text-slate-100 transition-colors hover:text-sky";
      title.href = state.activeSource === "google" ? `./job.html?id=${encodeURIComponent(job.id)}` : job.url;
      if (state.activeSource !== "google") {
        title.target = "_blank";
        title.rel = "noreferrer";
      }
      title.textContent = job.title;

      const company = document.createElement("p");
      company.className = "mt-2 text-sm text-muted";
      company.textContent = job.company || "Unknown brand";
      titleWrap.append(title, company);

      const requestedLocation = document.createElement("div");
      requestedLocation.className = "text-sm leading-6 text-muted";
      requestedLocation.textContent = job.requestedLocation || "n/a";

      const timing = document.createElement("div");
      timing.className = "text-sm leading-6 text-muted";
      timing.innerHTML =
        `<div>Removed: ${job.removedAt ? shortDate(job.removedAt) : "n/a"}</div>` +
        `<div>Last seen: ${job.lastSeenAt ? shortDate(job.lastSeenAt) : "n/a"}</div>`;

      const locations = document.createElement("div");
      locations.className = "text-sm leading-6 text-muted";
      locations.textContent = Array.isArray(job.locations) && job.locations.length ? job.locations.join(", ") : "n/a";

      row.append(titleWrap, requestedLocation, timing, locations);
      return row;
    })
  );
}

function renderRemovedFilterChips(removedJobs) {
  const grouped = groupJobsByCountry(removedJobs);
  const countries = Array.from(grouped.keys()).sort((a, b) => a.localeCompare(b, "uk"));

  if (state.removedCountry !== "all" && !countries.includes(state.removedCountry)) {
    state.removedCountry = "all";
    state.removedCity = "all";
  }

  refs.removedCountryFilterChips.replaceChildren(
    createFilterChip("Усі країни", state.removedCountry === "all", () => {
      state.removedCountry = "all";
      state.removedCity = "all";
      render();
    }),
    ...countries.map((country) => {
      const cities = getRelevantCitiesForJobs(removedJobs, country);
      const cityCaption = cities.length === 1 ? cities[0] : null;
      return createFilterChip(country, state.removedCountry === country, () => {
        state.removedCountry = country;
        state.removedCity = "all";
        render();
      }, cityCaption);
    })
  );

  const cities = state.removedCountry === "all"
    ? []
    : getRelevantCitiesForJobs(removedJobs, state.removedCountry);

  if (state.removedCity !== "all" && !cities.includes(state.removedCity)) {
    state.removedCity = "all";
  }

  refs.removedCityFilterSection.hidden = !(state.removedCountry !== "all" && cities.length > 1);
  refs.removedCityFilterChips.replaceChildren(
    createFilterChip("Усі міста", state.removedCity === "all", () => {
      state.removedCity = "all";
      render();
    }),
    ...cities.map((city) => createFilterChip(city, state.removedCity === city, () => {
      state.removedCity = city;
      render();
    }))
  );
}

function getFilteredRemovedJobs(removedJobs) {
  return removedJobs
    .filter((job) => state.removedCountry === "all" || getRequestedCountry(job) === state.removedCountry)
    .filter((job) => state.removedCity === "all" || getPrimaryCityForRequestedCountry(job) === state.removedCity);
}

function getRelevantCitiesForJobs(jobs, country) {
  return Array.from(
    new Set(
      jobs
        .filter((job) => getRequestedCountry(job) === country)
        .map((job) => getPrimaryCityForRequestedCountry(job))
        .filter(Boolean)
    )
  ).sort((left, right) => left.localeCompare(right, "uk"));
}

function getRemovedJobsHistory() {
  const runsById = new Map(state.runs.map((run) => [run.runId, run]));
  const removedEvents = Array.from(state.runDetailsById.values())
    .flatMap((detail) => {
      const run = runsById.get(detail.runId);
      return (detail.removed || []).map((job) => {
        const snapshotJob = state.jobs.find((item) => item.id === job.id);
        return {
          ...job,
          lastSeenAt: snapshotJob?.lastSeenAt || null,
          removedAt: run?.generatedAt || detail.runId,
          removedRunId: detail.runId
        };
      });
    });

  const firstByJobId = new Map();
  for (const job of removedEvents) {
    const existing = firstByJobId.get(job.id);
    if (!existing || new Date(job.removedAt).getTime() < new Date(existing.removedAt).getTime()) {
      firstByJobId.set(job.id, job);
    }
  }

  return Array.from(firstByJobId.values())
    .sort((left, right) =>
      new Date(right.removedAt).getTime() - new Date(left.removedAt).getTime() ||
      left.title.localeCompare(right.title, "uk"));
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
    halo.setAttribute("class", "chart-point-halo");
    halo.setAttribute("cx", String(x));
    halo.setAttribute("cy", String(y));
    halo.setAttribute("r", "10");
    halo.setAttribute("fill", "rgba(56, 189, 248, 0.18)");
    pointGroup.appendChild(halo);

    const point = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    point.setAttribute("class", "chart-point-core");
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
    updateDetailSummaries({ added: [], removed: [], changed: [] });
    return;
  }

  const scopedWithCity = getDetailForSelection(detail, state.activeLocation, state.activeCity);
  refs.detailTitle.textContent = formatDate(run.generatedAt);
  refs.detailSubtitle.textContent =
    state.activeLocation === "all"
      ? "Глобальна дельта по всіх локаціях."
      : state.activeCity === "all"
        ? `Дельта тільки для ${state.activeLocation}.`
        : `Дельта для ${state.activeLocation} / ${state.activeCity}.`;

  updateDetailBadges(scopedWithCity.added.length, scopedWithCity.removed.length, scopedWithCity.changed.length);
  updateDetailSummaries(scopedWithCity);
  renderDetailList(refs.addedList, scopedWithCity.added, "accent");
  renderDetailList(refs.removedList, scopedWithCity.removed, "rose");
  renderChangedList(scopedWithCity.changed);
}

function getDetailForLocation(detail, location) {
  if (location === "all") {
    return {
      added: detail.added || [],
      removed: detail.removed || [],
      changed: detail.changed || [],
      unchanged: detail.unchanged || []
    };
  }

  const local = (detail.perLocation || []).find((item) => item.location === location);
  return {
    added: local?.added || [],
    removed: local?.removed || [],
    changed: local?.changed || [],
    unchanged: local?.unchanged || []
  };
}

function getDetailForSelection(detail, location, city) {
  const scoped = getDetailForLocation(detail, location);
  if (city === "all") {
    return scoped;
  }

  return {
    added: scoped.added.filter((item) => getPrimaryCityForRequestedCountry(item) === city),
    removed: scoped.removed.filter((item) => getPrimaryCityForRequestedCountry(item) === city),
    changed: scoped.changed.filter((item) => getPrimaryCityForRequestedCountry(item) === city),
    unchanged: scoped.unchanged.filter((item) => getPrimaryCityForRequestedCountry(item) === city)
  };
}

function getHistorySelectionSuffix() {
  if (state.activeLocation === "all") {
    return "";
  }

  if (state.activeCity === "all") {
    return ` • ${state.activeLocation}`;
  }

  return ` • ${state.activeLocation} / ${state.activeCity}`;
}

function updateDetailBadges(addedCount, removedCount, changedCount) {
  refs.detailAddedCount.textContent = String(addedCount);
  refs.detailRemovedCount.textContent = String(removedCount);
  refs.detailChangedCount.textContent = String(changedCount);
  refs.addedBadge.textContent = `${addedCount} item${addedCount === 1 ? "" : "s"}`;
  refs.removedBadge.textContent = `${removedCount} item${removedCount === 1 ? "" : "s"}`;
  refs.changedBadge.textContent = `${changedCount} item${changedCount === 1 ? "" : "s"}`;
}

function updateDetailSummaries(detail) {
  refs.metricAddedLine.textContent = summarizeByLocation(detail.added, "No new jobs");
  refs.metricAddedHint.textContent = summarizeFirstJob(detail.added, "Nothing added in this run.");
  refs.metricRemovedLine.textContent = summarizeByLocation(detail.removed, "No removed jobs");
  refs.metricRemovedHint.textContent = summarizeFirstJob(detail.removed, "Nothing removed in this run.");
  refs.metricChangedLine.textContent = summarizeByLocation(detail.changed, "No changed jobs");
  refs.metricChangedHint.textContent = summarizeFirstJob(detail.changed, "Nothing changed in this run.");
}

function summarizeByLocation(items, emptyText) {
  if (!items.length) {
    return emptyText;
  }

  const counts = new Map();
  for (const item of items) {
    const city = getPrimaryCityForRequestedCountry(item);
    const label = [item.requestedLocation, city].filter(Boolean).join(" / ") || "Unknown";
    counts.set(label, (counts.get(label) || 0) + 1);
  }

  return Array.from(counts.entries())
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0], "uk"))
    .slice(0, 2)
    .map(([label, count]) => `${label} ${formatSigned(count)}`)
    .join(" · ");
}

function summarizeChangedFields(items) {
  if (!items.length) {
    return "No changed fields";
  }

  const counts = new Map();
  for (const item of items) {
    for (const field of item.changedFields || []) {
      counts.set(field, (counts.get(field) || 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0], "uk"))
    .map(([field, count]) => `${count} ${formatChangedFieldLabel(field, count)}`)
    .join(" · ");
}

function formatChangedFieldLabel(field, count) {
  const labels = {
    title: ["title changed", "titles changed"],
    company: ["company changed", "companies changed"],
    locations: ["location changed", "locations changed"]
  };
  const [singular, plural] = labels[field] || [`${field} changed`, `${field} changed`];
  return count === 1 ? singular : plural;
}

function summarizeFirstJob(items, emptyText) {
  const first = items[0];
  if (!first) {
    return emptyText;
  }

  return first.title || "Untitled job";
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

      const badges = document.createElement("div");
      badges.className = "mt-3 flex flex-wrap gap-2";
      const changedFields = item.changedFields || [];
      badges.replaceChildren(
        ...(changedFields.length ? changedFields : ["unknown"]).map((field) => {
          const badge = document.createElement("span");
          badge.className = "rounded-full border border-amber/25 bg-amber/10 px-3 py-1 text-xs font-semibold text-amber";
          badge.textContent = field;
          return badge;
        })
      );

      const diffList = document.createElement("div");
      diffList.className = "mt-4 space-y-3";
      diffList.replaceChildren(...(item.fieldChanges || []).map(renderFieldChange));

      article.append(title, meta, badges, diffList);
      return article;
    })
  );
}

function renderFieldChange(change) {
  const wrapper = document.createElement("div");
  wrapper.className = "rounded-2xl border border-white/10 bg-panelSoft/55 p-3";

  const field = document.createElement("p");
  field.className = "text-xs uppercase tracking-[0.22em] text-muted";
  field.textContent = change.field || "field";

  if (change.field === "locations") {
    const added = formatListChange("Added", change.added || [], "text-accent");
    const removed = formatListChange("Removed", change.removed || [], "text-rose");
    wrapper.append(field, added, removed);
    return wrapper;
  }

  const previous = document.createElement("p");
  previous.className = "mt-3 text-sm text-muted";
  previous.textContent = `Before: ${change.previous || "n/a"}`;

  const current = document.createElement("p");
  current.className = "mt-2 text-sm text-text";
  current.textContent = `After: ${change.current || "n/a"}`;

  wrapper.append(field, previous, current);
  return wrapper;
}

function formatListChange(label, values, toneClass) {
  const node = document.createElement("p");
  node.className = `mt-3 text-sm ${values.length ? toneClass : "text-muted"}`;
  node.textContent = `${label}: ${values.length ? values.join(", ") : "none"}`;
  return node;
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
