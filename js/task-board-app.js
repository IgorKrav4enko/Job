(function () {
  const STORAGE_KEY = "job-project-board-v1";

  const STATUS_META = {
    backlog: { label: "Backlog", accent: "border-white/10", badge: "bg-white/10 text-text" },
    "in-progress": { label: "In Progress", accent: "border-sky/35", badge: "bg-sky/15 text-sky" },
    review: { label: "Review", accent: "border-gold/35", badge: "bg-gold/15 text-gold" },
    done: { label: "Done", accent: "border-mint/35", badge: "bg-mint/15 text-mint" }
  };

  const PRIORITY_META = {
    critical: { label: "Critical", badge: "bg-coral/15 text-coral" },
    high: { label: "High", badge: "bg-[#ffb26b]/15 text-[#ffb26b]" },
    medium: { label: "Medium", badge: "bg-sky/15 text-sky" },
    low: { label: "Low", badge: "bg-white/10 text-smoke" }
  };

  const DEFAULT_TASKS = [
    {
      id: "JOB-101",
      title: "Stabilize Google Careers board UX",
      summary: "Finish the analytics board polish so point selection, chart labels, and mobile layout feel production-ready.",
      status: "in-progress",
      priority: "high",
      assignee: "Igor",
      tags: ["ui", "chart", "dashboard"],
      description:
        "Finalize the Google Careers dashboard experience. The chart now works, but we still need to polish the selected-point state, compress noisy labels, and make the details panel feel easier to scan on smaller screens.",
      acceptanceCriteria: [
        "Clicking a point never shifts the point off its true coordinates.",
        "The selected run remains visually obvious after filtering by location.",
        "The dashboard remains readable on laptop and mobile widths."
      ],
      testCases: [
        "Open dashboard -> click latest point -> the point stays centered and detail panel updates.",
        "Switch from All Locations to Zurich -> latest Zurich run becomes selected automatically.",
        "Resize viewport to narrow width -> metrics wrap cleanly and chart stays scrollable."
      ],
      implementationNotes: [
        "Avoid scaling the whole SVG group. Prefer styling the circles directly.",
        "If the detail panel grows too tall, collapse unchanged information first."
      ]
    },
    {
      id: "JOB-102",
      title: "Extract richer job details into raw snapshots",
      summary: "Improve parsing of About the job, qualifications, responsibilities, and experience level fields.",
      status: "backlog",
      priority: "critical",
      assignee: "Igor",
      tags: ["parser", "raw-data", "google-careers"],
      description:
        "The raw run archive already stores useful fields, but some jobs still miss `aboutTheJobRaw`, qualification blocks, or experience-level hints. Tighten the payload parsing so raw snapshots are consistently rich enough for later reprocessing.",
      acceptanceCriteria: [
        "Raw runs preserve `aboutTheJobRaw`, `minimumQualificationsRaw`, `preferredQualificationsRaw`, and `responsibilitiesRaw` whenever present in the payload.",
        "The parser keeps these fields optional instead of failing the whole run.",
        "At least a small sample of Warsaw and Zurich jobs shows these fields populated after a fresh run."
      ],
      testCases: [
        "Run parser on Warsaw + Zurich -> inspect latest raw run -> verify description fields exist for multiple jobs.",
        "Pick a job with missing optional fields -> parser still completes and writes the run.",
        "Compare old and new raw runs -> newly parsed fields appear without corrupting existing schema."
      ],
      implementationNotes: [
        "Prefer targeted extraction from the payload fragment rather than full HTML storage.",
        "Keep schema backward-compatible so historical raw files remain usable."
      ]
    },
    {
      id: "JOB-103",
      title: "Add changed-field drilldown to tracker details",
      summary: "Show exactly which normalized fields changed for a job between runs.",
      status: "review",
      priority: "medium",
      assignee: "Igor",
      tags: ["analytics", "diff", "ux"],
      description:
        "Changed jobs already store `changedFields`, previous hash, and current hash. The UI should surface these clearly and help distinguish harmless metadata changes from meaningful job updates.",
      acceptanceCriteria: [
        "Changed rows show the list of changed fields without forcing the user to inspect JSON.",
        "The list stays compact even when multiple jobs changed in the same run.",
        "Location filtering keeps the changed details scoped correctly."
      ],
      testCases: [
        "Open a run with changed jobs -> see field names rendered in the changed section.",
        "Apply Warsaw filter -> only Warsaw-changed jobs remain visible.",
        "Runs with zero changed jobs show an empty-state message instead of a blank box."
      ],
      implementationNotes: [
        "Good candidates for emphasis: `title`, `locations`, `postedAtCandidate`, `updatedAtCandidate`.",
        "If needed, add a human-readable label map for raw field names."
      ]
    },
    {
      id: "JOB-104",
      title: "Prepare Git hygiene for parser artifacts",
      summary: "Stop generated `bin/` and `obj/` files from polluting commits.",
      status: "done",
      priority: "low",
      assignee: "Igor",
      tags: ["repo", "dotnet", "cleanup"],
      description:
        "The project currently produces generated .NET build artifacts locally. We should keep the working tree clean so data and source changes are easier to review.",
      acceptanceCriteria: [
        "Generated .NET artifacts are excluded from future commits.",
        "The change does not hide any hand-written source files.",
        "A fresh local build still works normally after the ignore rules are added."
      ],
      testCases: [
        "Run dotnet build -> `git status` does not show tracked `bin/` or `obj/` noise.",
        "Inspect `.gitignore` -> only generated artifact directories are ignored."
      ],
      implementationNotes: [
        "This is a maintenance task, but it lowers friction for every later commit."
      ]
    }
  ];

  const state = {
    tasks: [],
    selectedTaskId: null,
    filters: {
      search: "",
      priority: "all",
      assignee: "all"
    }
  };

  const refs = {
    boardRows: document.getElementById("board-rows"),
    boardSummary: document.getElementById("board-summary"),
    detailTitle: document.getElementById("detail-title"),
    detailSubtitle: document.getElementById("detail-subtitle"),
    detailMeta: document.getElementById("detail-meta"),
    detailDescription: document.getElementById("detail-description"),
    detailCriteria: document.getElementById("detail-criteria"),
    detailTests: document.getElementById("detail-tests"),
    detailNotes: document.getElementById("detail-notes"),
    taskSearch: document.getElementById("task-search"),
    priorityFilter: document.getElementById("priority-filter"),
    assigneeFilter: document.getElementById("assignee-filter"),
    taskForm: document.getElementById("task-form"),
    taskIdInput: document.getElementById("task-id"),
    taskTitleInput: document.getElementById("task-title-input"),
    taskStatusInput: document.getElementById("task-status-input"),
    taskPriorityInput: document.getElementById("task-priority-input"),
    taskAssigneeInput: document.getElementById("task-assignee-input"),
    taskSummaryInput: document.getElementById("task-summary-input"),
    taskTagsInput: document.getElementById("task-tags-input"),
    taskDescriptionInput: document.getElementById("task-description-input"),
    taskCriteriaInput: document.getElementById("task-criteria-input"),
    taskTestsInput: document.getElementById("task-tests-input"),
    taskNotesInput: document.getElementById("task-notes-input"),
    composerTitle: document.getElementById("composer-title"),
    composerHint: document.getElementById("composer-hint"),
    saveTaskButton: document.getElementById("save-task-button"),
    clearFormButton: document.getElementById("clear-form-button"),
    newTaskButton: document.getElementById("new-task-button"),
    editSelectedButton: document.getElementById("edit-selected-button"),
    deleteTaskButton: document.getElementById("delete-task-button"),
    resetBoardButton: document.getElementById("reset-board-button")
  };

  window.addEventListener("DOMContentLoaded", initialize);

  function initialize() {
    state.tasks = loadTasks();
    state.selectedTaskId = state.tasks[0]?.id ?? null;

    refs.taskSearch.addEventListener("input", (event) => {
      state.filters.search = event.target.value.trim().toLowerCase();
      render();
    });

    refs.priorityFilter.addEventListener("change", (event) => {
      state.filters.priority = event.target.value;
      render();
    });

    refs.assigneeFilter.addEventListener("change", (event) => {
      state.filters.assignee = event.target.value;
      render();
    });

    refs.taskForm.addEventListener("submit", onTaskSubmit);
    refs.clearFormButton.addEventListener("click", clearComposer);
    refs.newTaskButton.addEventListener("click", () => clearComposer(true));
    refs.editSelectedButton.addEventListener("click", openSelectedTaskInComposer);
    refs.deleteTaskButton.addEventListener("click", deleteCurrentTask);
    refs.resetBoardButton.addEventListener("click", resetBoard);

    render();
  }

  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return DEFAULT_TASKS.slice();
      }

      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) && parsed.length ? parsed : DEFAULT_TASKS.slice();
    } catch (error) {
      return DEFAULT_TASKS.slice();
    }
  }

  function persistTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
  }

  function render() {
    syncAssigneeFilter();
    ensureSelectionVisible();
    renderSummary();
    renderBoard();
    renderDetail();
  }

  function syncAssigneeFilter() {
    const assignees = Array.from(new Set(state.tasks.map((task) => task.assignee).filter(Boolean))).sort((a, b) =>
      a.localeCompare(b)
    );
    const current = state.filters.assignee;
    refs.assigneeFilter.replaceChildren(
      createOption("all", "Усі власники"),
      ...assignees.map((name) => createOption(name, name))
    );
    refs.assigneeFilter.value = assignees.includes(current) || current === "all" ? current : "all";
    state.filters.assignee = refs.assigneeFilter.value;
  }

  function createOption(value, label) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    return option;
  }

  function ensureSelectionVisible() {
    const filtered = getFilteredTasks();
    if (!filtered.length) {
      state.selectedTaskId = null;
      return;
    }

    const stillVisible = filtered.some((task) => task.id === state.selectedTaskId);
    if (!stillVisible) {
      state.selectedTaskId = filtered[0].id;
    }
  }

  function getFilteredTasks() {
    return state.tasks.filter((task) => {
      const haystack = [task.id, task.title, task.summary, task.assignee, ...(task.tags || [])].join(" ").toLowerCase();
      const matchesSearch = state.filters.search === "" || haystack.includes(state.filters.search);
      const matchesPriority = state.filters.priority === "all" || task.priority === state.filters.priority;
      const matchesAssignee = state.filters.assignee === "all" || task.assignee === state.filters.assignee;
      return matchesSearch && matchesPriority && matchesAssignee;
    });
  }

  function renderSummary() {
    const filtered = getFilteredTasks();
    const columns = ["backlog", "in-progress", "review", "done"];
    refs.boardSummary.replaceChildren(
      ...columns.map((status) => {
        const count = filtered.filter((task) => task.status === status).length;
        const card = document.createElement("article");
        card.className = "rounded-[22px] border border-white/8 bg-panelSoft/85 p-4";

        const meta = STATUS_META[status];
        const label = document.createElement("p");
        label.className = "text-xs uppercase tracking-[0.25em] text-smoke";
        label.textContent = meta.label;

        const value = document.createElement("p");
        value.className = "mt-3 font-heading text-3xl font-bold";
        value.textContent = String(count);

        card.append(label, value);
        return card;
      })
    );
  }

  function renderBoard() {
    const filtered = getFilteredTasks();
    if (!filtered.length) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 8;
      cell.className = "px-4 py-8 text-sm text-smoke";
      cell.textContent = "Немає задач під поточні фільтри.";
      row.appendChild(cell);
      refs.boardRows.replaceChildren(row);
      return;
    }

    refs.boardRows.replaceChildren(...filtered.map((task) => renderTaskRow(task)));
  }

  function renderTaskRow(task) {
    const row = document.createElement("tr");
    row.className = `cursor-pointer align-top transition-colors ${task.id === state.selectedTaskId ? "is-selected" : ""}`;
    row.addEventListener("click", () => {
      state.selectedTaskId = task.id;
      render();
    });

    row.appendChild(createCell(task.id, "px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-sky"));

    const titleCell = document.createElement("td");
    titleCell.className = "px-4 py-3";
    const title = document.createElement("div");
    title.className = "font-heading text-sm font-bold leading-5";
    title.textContent = task.title;
    const summary = document.createElement("div");
    summary.className = "mt-1 max-w-[360px] text-xs leading-5 text-smoke";
    summary.textContent = task.summary || "Без короткого опису.";
    titleCell.append(title, summary);
    row.appendChild(titleCell);

    row.appendChild(createBadgeCell(STATUS_META[task.status].label, STATUS_META[task.status].badge));
    row.appendChild(createBadgeCell(PRIORITY_META[task.priority].label, PRIORITY_META[task.priority].badge));
    row.appendChild(createCell(task.assignee || "Unassigned", "px-4 py-3 text-sm"));
    row.appendChild(createCell((task.tags || []).join(", ") || "—", "px-4 py-3 text-xs leading-5 text-smoke"));
    row.appendChild(createCountCell(task.acceptanceCriteria?.length || 0, "criteria"));
    row.appendChild(createCountCell(task.testCases?.length || 0, "tests"));
    return row;
  }

  function createCell(value, className) {
    const cell = document.createElement("td");
    cell.className = className;
    cell.textContent = value;
    return cell;
  }

  function createBadgeCell(label, badgeClass) {
    const cell = document.createElement("td");
    cell.className = "px-4 py-3";
    const badge = document.createElement("span");
    badge.className = `inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${badgeClass}`;
    badge.textContent = label;
    cell.appendChild(badge);
    return cell;
  }

  function createCountCell(count, noun) {
    const cell = document.createElement("td");
    cell.className = "px-4 py-3 text-sm text-smoke";
    cell.textContent = `${count} ${noun}`;
    return cell;
  }

  function renderDetail() {
    const task = state.tasks.find((item) => item.id === state.selectedTaskId);
    if (!task) {
      refs.detailTitle.textContent = "Оберіть задачу";
      refs.detailSubtitle.textContent = "Зліва виберіть карточку або створіть нову задачу.";
      refs.detailMeta.replaceChildren();
      refs.detailDescription.textContent = "";
      renderListBlock(refs.detailCriteria, [], "Acceptance criteria ще не додані.");
      renderListBlock(refs.detailTests, [], "Тест-кейси ще не додані.");
      renderListBlock(refs.detailNotes, [], "Implementation notes ще не додані.");
      refs.deleteTaskButton.classList.add("hidden");
      return;
    }

    refs.detailTitle.textContent = task.title;
    refs.detailSubtitle.textContent = task.summary || "Без короткого summary.";
    refs.detailMeta.replaceChildren(
      renderMetaCard("ID", task.id),
      renderMetaCard("Status", STATUS_META[task.status].label),
      renderMetaCard("Priority", PRIORITY_META[task.priority].label),
      renderMetaCard("Owner", task.assignee || "Unassigned")
    );
    refs.detailDescription.textContent = task.description || "Опис відсутній.";
    renderListBlock(refs.detailCriteria, task.acceptanceCriteria || [], "Acceptance criteria ще не додані.");
    renderListBlock(refs.detailTests, task.testCases || [], "Тест-кейси ще не додані.");
    renderListBlock(refs.detailNotes, task.implementationNotes || [], "Implementation notes ще не додані.");
    refs.deleteTaskButton.classList.remove("hidden");
  }

  function renderMetaCard(label, value) {
    const card = document.createElement("article");
    card.className = "rounded-[20px] border border-white/8 bg-panelSoft/75 p-4";

    const title = document.createElement("p");
    title.className = "text-xs uppercase tracking-[0.22em] text-smoke";
    title.textContent = label;

    const content = document.createElement("p");
    content.className = "mt-3 text-base font-semibold";
    content.textContent = value;

    card.append(title, content);
    return card;
  }

  function renderListBlock(root, items, emptyText) {
    root.replaceChildren();
    if (!items.length) {
      const empty = document.createElement("p");
      empty.className = "rounded-2xl border border-dashed border-white/10 px-4 py-4 text-sm text-smoke";
      empty.textContent = emptyText;
      root.appendChild(empty);
      return;
    }

    root.replaceChildren(
      ...items.map((item) => {
        const row = document.createElement("div");
        row.className = "rounded-[18px] border border-white/8 bg-[#0c1523] px-4 py-3 text-sm leading-6 text-smoke";
        row.textContent = item;
        return row;
      })
    );
  }

  function onTaskSubmit(event) {
    event.preventDefault();

    const id = refs.taskIdInput.value.trim() || createTaskId();
    const task = {
      id,
      title: refs.taskTitleInput.value.trim(),
      status: refs.taskStatusInput.value,
      priority: refs.taskPriorityInput.value,
      assignee: refs.taskAssigneeInput.value.trim(),
      summary: refs.taskSummaryInput.value.trim(),
      tags: splitLinesOrCsv(refs.taskTagsInput.value, ","),
      description: refs.taskDescriptionInput.value.trim(),
      acceptanceCriteria: splitMultiline(refs.taskCriteriaInput.value),
      testCases: splitMultiline(refs.taskTestsInput.value),
      implementationNotes: splitMultiline(refs.taskNotesInput.value)
    };

    const existingIndex = state.tasks.findIndex((item) => item.id === id);
    if (existingIndex >= 0) {
      state.tasks.splice(existingIndex, 1, task);
    } else {
      state.tasks.unshift(task);
    }

    state.selectedTaskId = task.id;
    persistTasks();
    render();
    populateComposer(task);
  }

  function clearComposer(focusTitle) {
    refs.taskForm.reset();
    refs.taskIdInput.value = "";
    refs.composerTitle.textContent = "Нова задача";
    refs.composerHint.textContent = "Заповнюйте поля нижче. Acceptance criteria і test cases вводяться по одному пункту на рядок.";
    refs.saveTaskButton.textContent = "Зберегти задачу";
    refs.deleteTaskButton.classList.add("hidden");
    if (focusTitle) {
      refs.taskTitleInput.focus();
    }
  }

  function populateComposer(task) {
    refs.taskIdInput.value = task.id;
    refs.taskTitleInput.value = task.title || "";
    refs.taskStatusInput.value = task.status || "backlog";
    refs.taskPriorityInput.value = task.priority || "medium";
    refs.taskAssigneeInput.value = task.assignee || "";
    refs.taskSummaryInput.value = task.summary || "";
    refs.taskTagsInput.value = (task.tags || []).join(", ");
    refs.taskDescriptionInput.value = task.description || "";
    refs.taskCriteriaInput.value = (task.acceptanceCriteria || []).join("\n");
    refs.taskTestsInput.value = (task.testCases || []).join("\n");
    refs.taskNotesInput.value = (task.implementationNotes || []).join("\n");
    refs.composerTitle.textContent = `Редагування ${task.id}`;
    refs.composerHint.textContent = "Ви редагуєте існуючу задачу. Збереження оновить картку й детальну панель.";
    refs.saveTaskButton.textContent = "Оновити задачу";
    refs.deleteTaskButton.classList.remove("hidden");
  }

  function openSelectedTaskInComposer() {
    const task = state.tasks.find((item) => item.id === state.selectedTaskId);
    if (!task) {
      clearComposer(true);
      return;
    }

    populateComposer(task);
    refs.taskTitleInput.scrollIntoView({ behavior: "smooth", block: "center" });
    refs.taskTitleInput.focus();
  }

  function deleteCurrentTask() {
    const taskId = refs.taskIdInput.value.trim() || state.selectedTaskId;
    if (!taskId) {
      return;
    }

    state.tasks = state.tasks.filter((task) => task.id !== taskId);
    state.selectedTaskId = state.tasks[0]?.id ?? null;
    persistTasks();
    clearComposer(false);
    render();
  }

  function resetBoard() {
    localStorage.removeItem(STORAGE_KEY);
    state.tasks = DEFAULT_TASKS.slice();
    state.selectedTaskId = state.tasks[0]?.id ?? null;
    state.filters.search = "";
    state.filters.priority = "all";
    state.filters.assignee = "all";
    refs.taskSearch.value = "";
    refs.priorityFilter.value = "all";
    clearComposer(false);
    render();
  }

  function splitMultiline(value) {
    return value
      .split("\n")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function splitLinesOrCsv(value, separator) {
    return value
      .split(separator)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  function createTaskId() {
    const max = state.tasks
      .map((task) => Number(task.id.replace("JOB-", "")))
      .filter((value) => Number.isFinite(value))
      .reduce((current, value) => Math.max(current, value), 100);
    return `JOB-${max + 1}`;
  }
})();
