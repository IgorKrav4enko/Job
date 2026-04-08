(function () {
  const data = window.StructyChecklistData || { topics: [], taskDetails: {} };
  const topics = data.topics;
  const taskDetails = data.taskDetails;

  const storageKey = "structy-topic-checklist-state";
  const sidebarStorageKey = "structy-topic-sidebar-collapsed";
  const sidebarShell = document.getElementById("sidebar-shell");
  const sidebarPanel = document.getElementById("sidebar-panel");
  const sidebarToggle = document.getElementById("sidebar-toggle");
  const sidebarTopicsRoot = document.getElementById("sidebar-topics-root");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const progressPercent = document.getElementById("progress-percent");
  const emptyState = document.getElementById("empty-state");
  const selectedTaskRoot = document.getElementById("selected-task-root");
  const expandAllButton = document.getElementById("expand-all");
  const collapseAllButton = document.getElementById("collapse-all");
  const resetButton = document.getElementById("reset-progress");
  const topicAccents = {
    introduction: { badge: "text-coral", wash: "bg-coral/10", dot: "bg-coral" },
    "big-o-notation": { badge: "text-sky", wash: "bg-sky/15", dot: "bg-sky" },
    hashing: { badge: "text-gold", wash: "bg-gold/15", dot: "bg-gold" },
    "beginner-recursion": { badge: "text-plum", wash: "bg-plum/12", dot: "bg-plum" },
    "linked-list-i": { badge: "text-sea", wash: "bg-sea/15", dot: "bg-sea" },
    "binary-tree-i": { badge: "text-pine", wash: "bg-pine/15", dot: "bg-pine" },
    "graph-i": { badge: "text-coral", wash: "bg-coral/10", dot: "bg-coral" },
    "sliding-window": { badge: "text-sky", wash: "bg-sky/15", dot: "bg-sky" },
    "two-pointer": { badge: "text-sea", wash: "bg-sea/15", dot: "bg-sea" },
    "dynamic-programming": { badge: "text-plum", wash: "bg-plum/12", dot: "bg-plum" },
    stack: { badge: "text-gold", wash: "bg-gold/15", dot: "bg-gold" },
    "array-and-string": { badge: "text-coral", wash: "bg-coral/10", dot: "bg-coral" },
    "linked-list-ii": { badge: "text-sea", wash: "bg-sea/15", dot: "bg-sea" },
    "binary-tree-ii": { badge: "text-pine", wash: "bg-pine/15", dot: "bg-pine" },
    heap: { badge: "text-sky", wash: "bg-sky/15", dot: "bg-sky" },
    "exhaustive-recursion": { badge: "text-plum", wash: "bg-plum/12", dot: "bg-plum" },
    "graph-ii": { badge: "text-coral", wash: "bg-coral/10", dot: "bg-coral" },
    "mixed-recall": { badge: "text-ink", wash: "bg-ink/5", dot: "bg-ink" }
  };
  const topicIcons = {
    introduction: "◎",
    "big-o-notation": "∿",
    hashing: "#",
    "beginner-recursion": "↺",
    "linked-list-i": "⛓",
    "binary-tree-i": "🌳",
    "graph-i": "◈",
    "sliding-window": "▭",
    "two-pointer": "⇄",
    "dynamic-programming": "⌘",
    stack: "▤",
    "array-and-string": "Aa",
    "linked-list-ii": "⛓",
    "binary-tree-ii": "🌲",
    heap: "△",
    "exhaustive-recursion": "⟲",
    "graph-ii": "⬡",
    "mixed-recall": "✦"
  };

  const readState = () => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || "{}");
    } catch {
      return {};
    }
  };

  const writeState = (state) => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  };

  const readSidebarCollapsed = () => {
    try {
      return localStorage.getItem(sidebarStorageKey) === "true";
    } catch {
      return false;
    }
  };

  const writeSidebarCollapsed = (collapsed) => {
    localStorage.setItem(sidebarStorageKey, String(collapsed));
  };

  const taskId = (topicSlug, taskName) => topicSlug + "::" + taskName.toLowerCase().replaceAll(" ", "-");
  const state = readState();
  let sidebarCollapsed = readSidebarCollapsed();
  let selectedTask = null;
  const enhanceCodeBlock = (preElement, codeText, language = "java") => {
    const code = document.createElement("code");
    code.className = "language-" + language;
    code.textContent = codeText;
    preElement.replaceChildren(code);

    if (window.hljs) {
      window.hljs.highlightElement(code);
    }
  };

  const getShortIdea = (detail) => {
    if (!detail) {
      return null;
    }

    if (detail.shortIdea) {
      return detail.shortIdea;
    }

    const verbose = detail.meta && detail.meta.verbose ? detail.meta.verbose.trim() : "";
    const firstHint = detail.hints && detail.hints.length ? detail.hints[0].trim() : "";

    if (verbose && firstHint) {
      return verbose + " " + firstHint;
    }

    return verbose || firstHint || null;
  };

  const getTotalTaskCount = () => topics.reduce((sum, topic) => sum + topic.tasks.length, 0);
  const getCompletedTaskCount = () =>
    topics.reduce(
      (sum, topic) => sum + topic.tasks.filter((taskName) => Boolean(state[taskId(topic.slug, taskName)])).length,
      0
    );

  const getTopicStats = (topic) => {
    const total = topic.tasks.length;
    const completed = topic.tasks.filter((taskName) => Boolean(state[taskId(topic.slug, taskName)])).length;
    return { total, completed };
  };

  const openTaskFromSidebar = (topicSlug, taskName) => {
    selectedTask = { topicSlug, taskName };
    renderSidebar();
    renderSelectedTask();
    if (!sidebarCollapsed) {
      sidebarCollapsed = true;
      writeSidebarCollapsed(sidebarCollapsed);
      applySidebarState();
    }
  };

  const getFirstVisibleTask = () => {
    const visibleTopics = Array.from(document.querySelectorAll("[data-sidebar-topic]")).filter(
      (section) => !section.classList.contains("hidden")
    );

    for (const section of visibleTopics) {
      const topic = topics.find((item) => item.slug === section.dataset.sidebarTopic);
      if (topic && topic.tasks.length) {
        return { topicSlug: topic.slug, taskName: topic.tasks[0] };
      }
    }

    return null;
  };

  const ensureSelectedTaskVisible = () => {
    if (!selectedTask) {
      selectedTask = getFirstVisibleTask();
      return;
    }

    const topicSection = document.querySelector('[data-sidebar-topic="' + selectedTask.topicSlug + '"]');
    if (!topicSection || topicSection.classList.contains("hidden")) {
      selectedTask = getFirstVisibleTask();
    }
  };

  const updateProgress = () => {
    const completed = getCompletedTaskCount();
    const total = getTotalTaskCount();
    const percent = total === 0 ? 0 : (completed / total) * 100;

    progressBar.style.width = percent + "%";
    progressText.textContent = completed + " / " + total;
    progressPercent.textContent = Math.round(percent) + "% complete";
  };

  const applySidebarState = () => {
    sidebarShell.classList.toggle("w-[388px]", !sidebarCollapsed);
    sidebarShell.classList.toggle("w-6", sidebarCollapsed);
    sidebarPanel.classList.toggle("w-[360px]", !sidebarCollapsed);
    sidebarPanel.classList.toggle("w-0", sidebarCollapsed);
    sidebarPanel.classList.toggle("opacity-100", !sidebarCollapsed);
    sidebarPanel.classList.toggle("opacity-0", sidebarCollapsed);
    sidebarPanel.classList.toggle("border-transparent", sidebarCollapsed);
    sidebarPanel.classList.toggle("shadow-none", sidebarCollapsed);
    sidebarPanel.classList.toggle("pointer-events-none", sidebarCollapsed);
    sidebarToggle.textContent = sidebarCollapsed ? "→" : "←";
    sidebarToggle.setAttribute("aria-expanded", String(!sidebarCollapsed));
    sidebarToggle.setAttribute("aria-label", sidebarCollapsed ? "Розгорнути ліву панель" : "Згорнути ліву панель");
    updateSidebarTogglePosition();
  };

  const updateSidebarTogglePosition = () => {
    if (window.innerWidth < 1280) {
      sidebarToggle.style.top = "";
      return;
    }

    const shellRect = sidebarShell.getBoundingClientRect();
    const toggleHalf = 20;
    const desiredViewportCenter = window.innerHeight / 2;
    const minTop = toggleHalf;
    const maxTop = Math.max(toggleHalf, shellRect.height - toggleHalf);
    const relativeTop = Math.min(maxTop, Math.max(minTop, desiredViewportCenter - shellRect.top));
    sidebarToggle.style.top = relativeTop + "px";
  };

  const filterTopics = () => {
    let visible = 0;

    topics.forEach((topic) => {
      const sidebarTopic = document.querySelector('[data-sidebar-topic="' + topic.slug + '"]');
      if (sidebarTopic) {
        sidebarTopic.classList.toggle("hidden", false);
      }
      visible += 1;
    });

    emptyState.classList.toggle("hidden", visible !== 0);
    selectedTaskRoot.classList.toggle("hidden", visible === 0);
    ensureSelectedTaskVisible();
    renderSelectedTask();
  };

  const renderSidebar = () => {
    const openTopics = new Set(
      Array.from(document.querySelectorAll("[data-sidebar-topic]"))
        .filter((section) => section.open)
        .map((section) => section.dataset.sidebarTopic)
    );

    sidebarTopicsRoot.innerHTML = "";

    topics.forEach((topic) => {
      const stats = getTopicStats(topic);
      const topicSection = document.createElement("details");
      topicSection.className = "group overflow-hidden rounded-[24px] border border-line/80 bg-[#fbf8f1]";
      topicSection.dataset.sidebarTopic = topic.slug;
      topicSection.open = openTopics.size ? openTopics.has(topic.slug) : true;

      const summary = document.createElement("summary");
      summary.className = "flex cursor-pointer list-none items-center justify-between gap-3 bg-[#f2ece1] px-2.5 py-3";

      const leftWrap = document.createElement("div");
      leftWrap.className = "min-w-0 flex flex-1 items-center gap-2.5";

      const icon = document.createElement("span");
      icon.className = "inline-flex h-10 w-10 flex-none items-center justify-center text-[1.75rem] font-extrabold leading-none text-blue-700";
      icon.textContent = topicIcons[topic.slug] || "•";

      const textColumn = document.createElement("div");
      textColumn.className = "min-w-0";

      const title = document.createElement("div");
      title.className = "flex min-h-10 items-center text-[15px] font-semibold text-ink";
      title.textContent = topic.title;

      const meta = document.createElement("div");
      meta.className = "mt-1 text-xs text-ink/55";
      meta.textContent = "";

      textColumn.append(title);
      leftWrap.append(icon, textColumn);

      const rightWrap = document.createElement("div");
      rightWrap.className = "flex items-center gap-3 text-sm text-ink/55";

      const count = document.createElement("span");
      count.className = "font-semibold";
      count.textContent = stats.completed + "/" + stats.total;

      const arrow = document.createElement("span");
      arrow.className = "text-lg transition-transform duration-200 group-open:rotate-180";
      arrow.textContent = "⌄";

      rightWrap.append(count, arrow);
      summary.append(leftWrap, rightWrap);

      const list = document.createElement("div");
      list.className = "space-y-0.5 px-2 py-1";

      topic.tasks.forEach((taskName, index) => {
        const id = taskId(topic.slug, taskName);
        const taskButton = document.createElement("button");
        taskButton.type = "button";
        taskButton.className = "flex w-full items-start gap-2.5 rounded-2xl px-1 py-2 text-left transition-colors hover:bg-white";
        taskButton.dataset.sidebarTask = id;

        const done = Boolean(state[id]);
        const prevDone = index > 0 && Boolean(state[taskId(topic.slug, topic.tasks[index - 1])]);
        const nextDone = index < topic.tasks.length - 1 && Boolean(state[taskId(topic.slug, topic.tasks[index + 1])]);

        const markerWrap = document.createElement("span");
        markerWrap.className = "relative mt-1 flex h-6 w-6 flex-none items-center justify-center";

        if (done && prevDone) {
          const lineTop = document.createElement("span");
          lineTop.className = "absolute left-1/2 top-[-10px] h-[10px] w-0.5 -translate-x-1/2 bg-[#12b89d]";
          markerWrap.append(lineTop);
        }

        if (done && nextDone) {
          const lineBottom = document.createElement("span");
          lineBottom.className = "absolute left-1/2 bottom-[-10px] h-[10px] w-0.5 -translate-x-1/2 bg-[#12b89d]";
          markerWrap.append(lineBottom);
        }

        const marker = document.createElement("span");
        marker.className = "inline-flex h-5 w-5 items-center justify-center rounded-full border text-[11px] font-bold";
        if (done) {
          marker.className += " border-[#12b89d] bg-[#12b89d] text-white";
          marker.textContent = "✓";
        } else {
          marker.className += " border-line bg-white text-ink/35";
          marker.textContent = "○";
        }
        markerWrap.append(marker);

        const textWrap = document.createElement("div");
        textWrap.className = "min-w-0";

        const name = document.createElement("div");
        name.className = "text-base font-semibold leading-6 text-ink/88";
        name.textContent = taskName;

        textWrap.append(name);
        if (selectedTask && selectedTask.topicSlug === topic.slug && selectedTask.taskName === taskName) {
          taskButton.className += " bg-white shadow-[0_6px_18px_rgba(31,29,26,0.08)]";
        }
        taskButton.append(markerWrap, textWrap);
        taskButton.addEventListener("click", () => openTaskFromSidebar(topic.slug, taskName));
        list.append(taskButton);
      });

      topicSection.append(summary, list);
      sidebarTopicsRoot.append(topicSection);
    });
  };

  const renderSelectedTask = () => {
    if (!selectedTask) {
      selectedTaskRoot.innerHTML = "";
      return;
    }

    const topic = topics.find((item) => item.slug === selectedTask.topicSlug);
    if (!topic) {
      selectedTaskRoot.innerHTML = "";
      return;
    }

    const detailKey = taskId(selectedTask.topicSlug, selectedTask.taskName);
    const detail = taskDetails[detailKey];

    const header = document.createElement("div");
    header.className = "mb-6 flex flex-wrap items-start justify-between gap-4 border-b border-line/70 pb-5";

    const intro = document.createElement("div");
    intro.className = "min-w-0";

    const titleRow = document.createElement("div");
    titleRow.className = "flex items-center gap-3";

    const titleCheckbox = document.createElement("input");
    titleCheckbox.type = "checkbox";
    titleCheckbox.className = "h-6 w-6 rounded-full border-line/70 text-coral focus:ring-coral";
    titleCheckbox.checked = Boolean(state[detailKey]);
    titleCheckbox.addEventListener("change", () => {
      state[detailKey] = titleCheckbox.checked;
      checkbox.checked = titleCheckbox.checked;
      writeState(state);
      updateProgress();
      renderSidebar();
    });

    const title = document.createElement("h3");
    title.className = "font-heading text-3xl font-extrabold";
    title.textContent = selectedTask.taskName;

    titleRow.append(titleCheckbox, title);

    const topicText = document.createElement("p");
    topicText.className = "mt-2 text-sm text-ink/60";
    topicText.textContent = topic.title;

    intro.append(titleRow, topicText);

    header.append(intro);

    selectedTaskRoot.innerHTML = "";
    selectedTaskRoot.append(header, renderTaskBody(detail, detailKey));
  };

  const renderTaskBody = (detail, detailKey) => {
    const body = document.createElement("div");
    body.className = "border-t border-line/70 bg-white/90 px-4 py-4";

    if (!detail) {
      const fallback = document.createElement("div");
      fallback.className = "rounded-2xl border border-dashed border-line/70 bg-mist px-4 py-4 text-sm leading-6 text-ink/65";
      fallback.textContent = "Для цієї задачі детальні умова, хінти та рішення ще не внесені в інтерфейс. Можу додати їх наступним проходом.";
      body.append(fallback);
      return body;
    }

    const layout = document.createElement("div");
    layout.className = "grid gap-4";

    const mainColumn = document.createElement("div");
    mainColumn.className = "min-w-0 rounded-[24px] border-2 border-blue-400 p-4";

    const sideColumn = document.createElement("aside");
    sideColumn.className = "space-y-4 rounded-[24px] border-2 border-yellow-400 p-4";

    const tabsBar = document.createElement("div");
    tabsBar.className = "mb-5 flex flex-wrap overflow-hidden rounded-[18px] border border-line/70 bg-[#f2ece1]";

    const problemPanel = document.createElement("div");
    const approachPanel = document.createElement("div");
    const walkthroughPanel = document.createElement("div");
    const solutionPanel = document.createElement("div");
    const submissionsPanel = document.createElement("div");

    const tabPanels = {
      problem: problemPanel,
      approach: approachPanel,
      walkthrough: walkthroughPanel,
      solution: solutionPanel,
      submissions: submissionsPanel
    };

    const tabButtons = {};
    const setActiveTab = (tabId) => {
      Object.entries(tabPanels).forEach(([key, panel]) => {
        panel.classList.toggle("hidden", key !== tabId);
      });

      Object.entries(tabButtons).forEach(([key, button]) => {
        button.className = key === tabId
          ? "border-b-2 border-[#17c4a7] bg-white px-4 py-3 text-sm font-semibold text-ink"
          : "border-b-2 border-transparent px-4 py-3 text-sm font-medium text-ink/55 transition-colors hover:bg-white/60 hover:text-ink";
      });
    };

    [["problem", "problem"], ["approach", "approach"], ["walkthrough", "walkthrough"], ["solution", "solution"], ["submissions", "submissions"]].forEach(([key, label]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = label;
      button.addEventListener("click", () => setActiveTab(key));
      tabButtons[key] = button;
      tabsBar.append(button);
    });

    mainColumn.append(tabsBar, problemPanel, approachPanel, walkthroughPanel, solutionPanel, submissionsPanel);

    const statement = document.createElement("section");
    statement.className = "rounded-[22px] border border-line/60 bg-gradient-to-br from-mist to-white px-5 py-5";
    statement.innerHTML = "<h4 class=\"font-heading text-lg font-bold\">Умова</h4>";

    const statementText = document.createElement("p");
    statementText.className = "mt-3 text-sm leading-7 text-ink/80";
    statementText.textContent = detail.statement;
    statement.append(statementText);

    problemPanel.append(statement);

    const shortIdea = getShortIdea(detail);
    if (shortIdea) {
      const shortIdeaSection = document.createElement("section");
      shortIdeaSection.className = "mt-5 rounded-[22px] border border-line/60 bg-gradient-to-br from-white to-mist px-5 py-5";
      shortIdeaSection.innerHTML = "<h4 class=\"font-heading text-lg font-bold\">Коротка ідея</h4>";

      const shortIdeaText = document.createElement("p");
      shortIdeaText.className = "mt-3 text-sm leading-7 text-ink/80";
      shortIdeaText.textContent = shortIdea;

      shortIdeaSection.append(shortIdeaText);
      approachPanel.append(shortIdeaSection);
    }

    const visualizationSection = document.createElement("section");
    visualizationSection.className = "mt-5 rounded-[22px] border border-line/60 bg-white px-5 py-5";
    const visualizationTitle = document.createElement("h4");
    visualizationTitle.className = "font-heading text-lg font-bold";
    visualizationTitle.textContent = "Visualization";

    const visualizationToggle = document.createElement("button");
    visualizationToggle.type = "button";
    visualizationToggle.className = "mt-4 rounded-full border border-line/70 bg-mist px-3 py-2 text-sm font-semibold transition-colors hover:border-coral hover:text-coral";
    visualizationToggle.textContent = "Hide visualization";

    const visualizationBox = document.createElement("pre");
    visualizationBox.className = "mt-4 overflow-x-auto rounded-2xl bg-ink p-4 text-sm leading-7 text-white";

    const visualizationLines = window.StructyVisualizations
      ? window.StructyVisualizations.getTextVisualization(detailKey)
      : null;

    if (visualizationLines) {
      visualizationBox.textContent = visualizationLines.join("\n");
    } else {
      visualizationBox.textContent = "Visualization placeholder\n\nA step-by-step visual walkthrough for this task can be added here.";
    }

    visualizationToggle.addEventListener("click", () => {
      const isHidden = visualizationBox.classList.contains("hidden");
      visualizationBox.classList.toggle("hidden");
      visualizationToggle.textContent = isHidden ? "Hide visualization" : "Show visualization";
    });

    visualizationSection.append(visualizationTitle, visualizationToggle, visualizationBox);
    walkthroughPanel.append(visualizationSection);

    const canvasSection = document.createElement("section");
    canvasSection.className = "mt-5 rounded-[22px] border border-line/60 bg-white px-5 py-5";
    const canvasTitle = document.createElement("h4");
    canvasTitle.className = "font-heading text-lg font-bold";
    canvasTitle.textContent = "Canvas Visualization";

    const canvasToggle = document.createElement("button");
    canvasToggle.type = "button";
    canvasToggle.className = "mt-4 rounded-full border border-line/70 bg-mist px-3 py-2 text-sm font-semibold transition-colors hover:border-coral hover:text-coral";
    canvasToggle.textContent = "Hide canvas";

    const canvasWrap = document.createElement("div");
    canvasWrap.className = "mt-4";

    const canvasVariants = window.StructyVisualizations
      ? window.StructyVisualizations.getCanvasVisualizations(detailKey)
      : [];
    if (canvasVariants.length > 0) {
      const buildCanvasCard = (variant) => {
        const card = document.createElement("section");
        card.className = "rounded-[22px] border border-line/60 bg-gradient-to-br from-mist to-white px-4 py-4";

        const title = document.createElement("h5");
        title.className = "font-heading text-base font-bold";
        title.textContent = variant.title;

        const helper = document.createElement("p");
        helper.className = "mt-2 text-sm leading-6 text-ink/65";
        helper.textContent = variant.description;

        const controls = document.createElement("div");
        controls.className = "mt-3 mb-3 flex flex-wrap gap-2";

        const makeControl = (label) => {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "rounded-full border border-line/70 bg-white px-3 py-2 text-xs font-semibold transition-colors hover:border-coral hover:text-coral";
          button.textContent = label;
          return button;
        };

        const prevButton = makeControl("Prev");
        const nextButton = makeControl("Next");
        const resetCanvasButton = makeControl("Reset");
        controls.append(prevButton, nextButton, resetCanvasButton);

        const canvas = document.createElement("canvas");
        canvas.className = "block w-full rounded-2xl border border-line/60 bg-mist";
        canvas.width = 760;
        canvas.height = 360;
        canvas.style.height = "360px";

        card.append(title, helper, controls, canvas);
        return { card, canvas, prevButton, nextButton, resetCanvasButton };
      };

      const canvasControllers = [];
      canvasVariants.forEach((variant) => {
        const ui = buildCanvasCard(variant);
        canvasWrap.append(ui.card);

        const controller = window.StructyVisualizations.createCanvasController(ui.canvas, variant.type);
        if (controller) {
          ui.prevButton.addEventListener("click", () => controller.prev());
          ui.nextButton.addEventListener("click", () => controller.next());
          ui.resetCanvasButton.addEventListener("click", () => controller.reset());
          canvasControllers.push(controller);
        } else {
          ui.prevButton.disabled = true;
          ui.nextButton.disabled = true;
          ui.resetCanvasButton.disabled = true;
        }
      });

      canvasToggle.addEventListener("click", () => {
        const isHidden = canvasWrap.classList.contains("hidden");
        canvasWrap.classList.toggle("hidden");
        canvasToggle.textContent = isHidden ? "Hide canvas" : "Show canvas";
        if (isHidden) {
          requestAnimationFrame(() => {
            canvasControllers.forEach((controller) => controller.showStep(0));
          });
        }
      });

      requestAnimationFrame(() => {
        canvasControllers.forEach((controller) => controller.showStep(0));
      });
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "rounded-2xl border border-dashed border-line/60 bg-mist px-4 py-4 text-sm leading-6 text-ink/65";
      placeholder.textContent = "Canvas-візуалізацію для цієї задачі можна додати пізніше.";
      canvasWrap.append(placeholder);

      canvasToggle.addEventListener("click", () => {
        const isHidden = canvasWrap.classList.contains("hidden");
        canvasWrap.classList.toggle("hidden");
        canvasToggle.textContent = isHidden ? "Hide canvas" : "Show canvas";
      });
    }

    canvasSection.append(canvasTitle, canvasToggle, canvasWrap);
    walkthroughPanel.append(canvasSection);

    const hintSection = document.createElement("section");
    hintSection.className = "mt-5 rounded-[22px] border border-line/60 bg-white px-5 py-5";
    const hintTitle = document.createElement("h4");
    hintTitle.className = "font-heading text-lg font-bold";
    hintTitle.textContent = "Hints";
    hintSection.append(hintTitle);

    const hintButtons = document.createElement("div");
    hintButtons.className = "mt-4 flex flex-wrap gap-2";
    const hintPanels = document.createElement("div");
    hintPanels.className = "mt-3 space-y-2";

    detail.hints.forEach((hint, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "rounded-full border border-line/70 bg-mist px-3 py-2 text-sm font-semibold transition-colors hover:border-coral hover:text-coral";
      button.textContent = "Hint " + (index + 1);

      const panel = document.createElement("div");
      panel.className = "hidden rounded-2xl border border-line/60 bg-mist px-4 py-3 text-sm leading-6 text-ink/80";
      panel.textContent = hint;

      button.addEventListener("click", () => {
        panel.classList.toggle("hidden");
      });

      hintButtons.append(button);
      hintPanels.append(panel);
    });

    hintSection.append(hintButtons, hintPanels);
    approachPanel.append(hintSection);

    const pseudoSection = document.createElement("section");
    pseudoSection.className = "mt-5 rounded-[22px] border border-line/60 bg-white px-5 py-5";
    const pseudoTitle = document.createElement("h4");
    pseudoTitle.className = "font-heading text-lg font-bold";
    pseudoTitle.textContent = "Pseudocode";

    const pseudoToggle = document.createElement("button");
    pseudoToggle.type = "button";
    pseudoToggle.className = "mt-4 rounded-full border border-line/70 bg-mist px-3 py-2 text-sm font-semibold transition-colors hover:border-coral hover:text-coral";
    pseudoToggle.textContent = "Show pseudocode";

    const pseudoBox = document.createElement("pre");
    pseudoBox.className = "mt-4 hidden overflow-x-auto rounded-2xl bg-ink p-4 text-sm text-white";
    enhanceCodeBlock(pseudoBox, detail.pseudocode.join("\n"), "plaintext");

    pseudoToggle.addEventListener("click", () => {
      const isHidden = pseudoBox.classList.contains("hidden");
      pseudoBox.classList.toggle("hidden");
      pseudoToggle.textContent = isHidden ? "Hide pseudocode" : "Show pseudocode";
    });

    pseudoSection.append(pseudoTitle, pseudoToggle, pseudoBox);
    approachPanel.append(pseudoSection);

    const solutionsSection = document.createElement("section");
    solutionsSection.className = "mt-5 rounded-[22px] border border-line/60 bg-white px-5 py-5";
    solutionsSection.innerHTML = "<h4 class=\"font-heading text-lg font-bold\">Solutions</h4>";

    detail.solutions.forEach((solution) => {
      const solutionCard = document.createElement("details");
      solutionCard.className = "mt-3 rounded-2xl border border-line/70 bg-mist";

      const solutionSummary = document.createElement("summary");
      solutionSummary.className = "cursor-pointer list-none px-4 py-3 font-semibold";
      solutionSummary.textContent = solution.title;

      const solutionBody = document.createElement("div");
      solutionBody.className = "border-t border-line/70 bg-white px-4 py-4";

      const code = document.createElement("pre");
      code.className = "overflow-x-auto rounded-2xl bg-ink p-4 text-sm text-white";
      enhanceCodeBlock(code, solution.code, "java");

      const complexity = document.createElement("p");
      complexity.className = "mt-3 text-sm leading-6 text-ink/70";
      complexity.textContent = solution.complexity;

      solutionBody.append(code, complexity);
      solutionCard.append(solutionSummary, solutionBody);
      solutionsSection.append(solutionCard);
    });

    solutionPanel.append(solutionsSection);

    if (detail.testCases && detail.testCases.length) {
      const testsCard = document.createElement("details");
      testsCard.className = "rounded-[22px] border border-line/70 bg-mist";

      const testsSummary = document.createElement("summary");
      testsSummary.className = "cursor-pointer list-none px-4 py-3";

      const summaryRow = document.createElement("div");
      summaryRow.className = "flex items-center justify-between gap-3";

      const summaryTitle = document.createElement("div");
      summaryTitle.innerHTML = "<div class=\"font-heading text-lg font-bold\">Test Cases</div><div class=\"mt-1 text-sm text-ink/60\">Допоміжний блок для швидкого копіювання</div>";

      const copyButton = document.createElement("button");
      copyButton.type = "button";
      copyButton.className = "rounded-full border border-line/70 bg-white px-3 py-2 text-xs font-semibold transition-colors hover:border-coral hover:text-coral";
      copyButton.textContent = "Copy all";
      copyButton.addEventListener("click", async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const text = detail.testCases.join("\n");
        try {
          await navigator.clipboard.writeText(text);
          copyButton.textContent = "Copied";
          setTimeout(() => {
            copyButton.textContent = "Copy all";
          }, 1200);
        } catch {
          copyButton.textContent = "Copy failed";
          setTimeout(() => {
            copyButton.textContent = "Copy all";
          }, 1200);
        }
      });

      summaryRow.append(summaryTitle, copyButton);
      testsSummary.append(summaryRow);

      const testsBody = document.createElement("div");
      testsBody.className = "border-t border-line/70 bg-white px-4 py-4";

      const testsCode = document.createElement("pre");
      testsCode.className = "overflow-x-auto rounded-2xl bg-ink p-4 text-sm text-white";
      enhanceCodeBlock(testsCode, detail.testCases.join("\n"), "plaintext");

      testsBody.append(testsCode);
      testsCard.append(testsSummary, testsBody);
      submissionsPanel.append(testsCard);
    }

    if (submissionsPanel.childElementCount === 0) {
      const placeholder = document.createElement("div");
      placeholder.className = "rounded-[22px] border border-dashed border-line/60 bg-mist px-5 py-5 text-sm leading-6 text-ink/65";
      placeholder.textContent = "Submissions block can be expanded later with attempts, notes, or saved runs.";
      submissionsPanel.append(placeholder);
    }

    setActiveTab("problem");

    if (sideColumn.childElementCount > 0) {
      while (sideColumn.firstChild) {
        mainColumn.append(sideColumn.firstChild);
      }
    }

    layout.append(mainColumn);

    body.append(layout);
    return body;
  };

  selectedTask = getFirstVisibleTask() || {
    topicSlug: topics[0] ? topics[0].slug : "",
    taskName: topics[0] && topics[0].tasks[0] ? topics[0].tasks[0] : ""
  };
  renderSidebar();
  updateProgress();
  filterTopics();
  renderSelectedTask();
  applySidebarState();
  updateSidebarTogglePosition();

  sidebarToggle.addEventListener("click", () => {
    sidebarCollapsed = !sidebarCollapsed;
    writeSidebarCollapsed(sidebarCollapsed);
    applySidebarState();
  });
  window.addEventListener("resize", updateSidebarTogglePosition);
  window.addEventListener("scroll", updateSidebarTogglePosition, { passive: true });

  if (expandAllButton) {
    expandAllButton.addEventListener("click", () => {
      document.querySelectorAll("[data-sidebar-topic]").forEach((section) => {
        if (!section.classList.contains("hidden")) {
          section.open = true;
        }
      });
    });
  }

  if (collapseAllButton) {
    collapseAllButton.addEventListener("click", () => {
      document.querySelectorAll("[data-sidebar-topic]").forEach((section) => {
        section.open = false;
      });
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      Object.keys(state).forEach((key) => {
        delete state[key];
      });

      localStorage.removeItem(storageKey);
      updateProgress();
      renderSidebar();
      renderSelectedTask();
    });
  }
})();
