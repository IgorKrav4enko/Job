(function () {
  const data = window.StructyChecklistData || { topics: [], taskDetails: {} };
  const topics = data.topics;
  const taskDetails = data.taskDetails;

  const storageKey = "structy-topic-checklist-state";
  const topicsRoot = document.getElementById("topics-root");
  const sidebarTopicsRoot = document.getElementById("sidebar-topics-root");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const progressPercent = document.getElementById("progress-percent");
  const topicCount = document.getElementById("topic-count");
  const taskCount = document.getElementById("task-count");
  const visibleCount = document.getElementById("visible-count");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("topic-search");
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

  const taskId = (topicSlug, taskName) => topicSlug + "::" + taskName.toLowerCase().replaceAll(" ", "-");
  const state = readState();
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

  const getCheckboxes = () => Array.from(document.querySelectorAll("[data-task-id]"));
  const getTopicStats = (topic) => {
    const total = topic.tasks.length;
    const completed = topic.tasks.filter((taskName) => Boolean(state[taskId(topic.slug, taskName)])).length;
    return { total, completed };
  };

  const openTaskFromSidebar = (topicSlug, taskName) => {
    const topicCard = document.getElementById("topic-" + topicSlug);
    if (!topicCard) {
      return;
    }

    topicCard.open = true;
    const taskCard = document.getElementById("task-" + taskId(topicSlug, taskName));
    if (taskCard) {
      taskCard.open = true;
      taskCard.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      topicCard.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const updateProgress = () => {
    const checkboxes = getCheckboxes();
    const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
    const total = checkboxes.length;
    const percent = total === 0 ? 0 : (completed / total) * 100;

    progressBar.style.width = percent + "%";
    progressText.textContent = completed + " / " + total;
    progressPercent.textContent = Math.round(percent) + "% complete";
    topicCount.textContent = String(topics.length);
    taskCount.textContent = String(total);
  };

  const filterTopics = () => {
    const query = searchInput.value.trim().toLowerCase();
    const topicCards = Array.from(document.querySelectorAll(".topic-card"));
    let visible = 0;

    topicCards.forEach((card) => {
      const matches = query === "" || card.dataset.search.includes(query);
      card.classList.toggle("hidden", !matches);
      if (matches) {
        visible += 1;
      }
    });

    document.querySelectorAll("[data-sidebar-topic]").forEach((sidebarTopic) => {
      const topicSlug = sidebarTopic.dataset.sidebarTopic;
      const topicCard = document.getElementById("topic-" + topicSlug);
      sidebarTopic.classList.toggle("hidden", !topicCard || topicCard.classList.contains("hidden"));
    });

    visibleCount.textContent = visible + " тем видно";
    emptyState.classList.toggle("hidden", visible !== 0);
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
      topicSection.open = openTopics.size ? openTopics.has(topic.slug) : topic.slug === "introduction";

      const summary = document.createElement("summary");
      summary.className = "flex cursor-pointer list-none items-center justify-between gap-3 bg-[#f2ece1] px-4 py-4";

      const leftWrap = document.createElement("div");
      leftWrap.className = "min-w-0 flex-1";

      const title = document.createElement("div");
      title.className = "text-[15px] font-semibold text-ink";
      title.textContent = topic.title;

      const meta = document.createElement("div");
      meta.className = "mt-1 text-xs text-ink/55";
      meta.textContent = stats.completed + "/" + stats.total + " complete";

      leftWrap.append(title, meta);

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
      list.className = "space-y-1 px-4 py-3";

      topic.tasks.forEach((taskName) => {
        const id = taskId(topic.slug, taskName);
        const taskButton = document.createElement("button");
        taskButton.type = "button";
        taskButton.className = "flex w-full items-start gap-3 rounded-2xl px-2 py-2 text-left transition-colors hover:bg-white";
        taskButton.dataset.sidebarTask = id;

        const marker = document.createElement("span");
        marker.className = "mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border text-[11px] font-bold";

        const done = Boolean(state[id]);
        if (done) {
          marker.className += " border-[#12b89d] bg-[#12b89d] text-white";
          marker.textContent = "✓";
        } else {
          marker.className += " border-line bg-white text-ink/35";
          marker.textContent = "○";
        }

        const textWrap = document.createElement("div");
        textWrap.className = "min-w-0";

        const name = document.createElement("div");
        name.className = "text-sm font-medium leading-5 text-ink/88";
        name.textContent = taskName;

        const hint = document.createElement("div");
        hint.className = "mt-1 text-xs leading-4 text-ink/45";
        hint.textContent = taskDetails[id] ? "Open task details" : "Title only";

        textWrap.append(name, hint);
        taskButton.append(marker, textWrap);
        taskButton.addEventListener("click", () => openTaskFromSidebar(topic.slug, taskName));
        list.append(taskButton);
      });

      topicSection.append(summary, list);
      sidebarTopicsRoot.append(topicSection);
    });
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
    layout.className = "grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]";

    const mainColumn = document.createElement("div");
    mainColumn.className = "min-w-0";

    const sideColumn = document.createElement("aside");
    sideColumn.className = "space-y-4";

    const statement = document.createElement("section");
    statement.className = "rounded-[22px] border border-line/60 bg-gradient-to-br from-mist to-white px-5 py-5";
    statement.innerHTML = "<h4 class=\"font-heading text-lg font-bold\">Умова</h4>";

    const statementText = document.createElement("p");
    statementText.className = "mt-3 text-sm leading-7 text-ink/80";
    statementText.textContent = detail.statement;
    statement.append(statementText);

    mainColumn.append(statement);

    const shortIdea = getShortIdea(detail);
    if (shortIdea) {
      const shortIdeaSection = document.createElement("section");
      shortIdeaSection.className = "mt-5 rounded-[22px] border border-line/60 bg-gradient-to-br from-white to-mist px-5 py-5";
      shortIdeaSection.innerHTML = "<h4 class=\"font-heading text-lg font-bold\">Коротка ідея</h4>";

      const shortIdeaText = document.createElement("p");
      shortIdeaText.className = "mt-3 text-sm leading-7 text-ink/80";
      shortIdeaText.textContent = shortIdea;

      shortIdeaSection.append(shortIdeaText);
      mainColumn.append(shortIdeaSection);
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
    mainColumn.append(visualizationSection);

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
    mainColumn.append(canvasSection);

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
    mainColumn.append(hintSection);

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
    mainColumn.append(pseudoSection);

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

    mainColumn.append(solutionsSection);

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
      sideColumn.append(testsCard);
    }

    layout.append(mainColumn);
    if (sideColumn.childElementCount > 0) {
      layout.append(sideColumn);
    }

    body.append(layout);
    return body;
  };

  const renderTopics = () => {
    topicsRoot.innerHTML = "";

    topics.forEach((topic) => {
      const topicEl = document.createElement("details");
      topicEl.className = "topic-card group overflow-hidden rounded-[28px] border border-line/70 bg-white/88 shadow-[0_8px_24px_rgba(31,29,26,0.05)] transition-all open:shadow-soft";
      topicEl.id = "topic-" + topic.slug;
      topicEl.dataset.search = (topic.title + " " + topic.tasks.join(" ")).toLowerCase();
      topicEl.open = topic.slug === "introduction";
      const accent = topicAccents[topic.slug] || topicAccents["mixed-recall"];

      const summary = document.createElement("summary");
      summary.className = "flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 transition-colors group-hover:bg-white";

      const summaryText = document.createElement("div");
      const topicLabel = document.createElement("p");
      topicLabel.className = "inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] " + accent.badge;
      topicLabel.textContent = "Theme";
      const topicDot = document.createElement("span");
      topicDot.className = "h-2 w-2 rounded-full " + accent.dot;
      topicLabel.prepend(topicDot);

      const title = document.createElement("h3");
      title.className = "mt-2 font-heading text-2xl font-extrabold";
      title.textContent = topic.title;

      const meta = document.createElement("p");
      meta.className = "mt-2 text-sm text-ink/60";
      meta.textContent = topic.tasks.length === 0 ? "Поки без задач у цьому конспекті" : topic.tasks.length + " задач";

      summaryText.append(topicLabel, title, meta);

      const arrow = document.createElement("span");
      arrow.className = "flex h-10 w-10 items-center justify-center rounded-full " + accent.wash + " text-2xl text-ink/50 transition-transform group-open:rotate-180";
      arrow.textContent = "⌄";

      summary.append(summaryText, arrow);
      topicEl.append(summary);

      const content = document.createElement("div");
      content.className = "border-t border-line/70 bg-white/70 px-6 py-5";

      if (topic.tasks.length === 0) {
        const placeholder = document.createElement("p");
        placeholder.className = "rounded-2xl border border-line/60 bg-mist px-4 py-4 text-sm text-ink/65";
        placeholder.textContent = "Для цієї теми в поточному списку ще немає окремих задач.";
        content.append(placeholder);
      } else {
        const list = document.createElement("div");
        list.className = "grid gap-3";

        topic.tasks.forEach((taskName) => {
          const id = taskId(topic.slug, taskName);
          const detail = taskDetails[id];

          const taskCard = document.createElement("details");
          taskCard.className = "rounded-[22px] border border-line/60 bg-gradient-to-br from-mist to-white shadow-[0_4px_16px_rgba(31,29,26,0.03)]";
          taskCard.id = "task-" + id;

          const taskSummary = document.createElement("summary");
          taskSummary.className = "flex cursor-pointer list-none items-start gap-4 px-5 py-4";

          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.className = "mt-1 h-5 w-5 rounded border-line/70 text-coral focus:ring-coral";
          checkbox.dataset.taskId = id;
          checkbox.checked = Boolean(state[id]);
          checkbox.addEventListener("click", (event) => event.stopPropagation());
          checkbox.addEventListener("change", () => {
            state[id] = checkbox.checked;
            writeState(state);
            updateProgress();
            renderSidebar();
            filterTopics();
          });

          const textWrap = document.createElement("div");
          textWrap.className = "min-w-0 flex-1";

          const titleRow = document.createElement("div");
          titleRow.className = "flex items-start justify-between gap-3";

          const titleWrap = document.createElement("div");
          const taskTitle = document.createElement("div");
          taskTitle.className = "font-heading text-lg font-bold";
          taskTitle.textContent = taskName;

          const taskMeta = document.createElement("div");
          taskMeta.className = "mt-1 text-sm text-ink/60";
          taskMeta.textContent = detail ? ((detail.meta && detail.meta.verbose) || "Деталі доступні") : "Поки є лише назва задачі";

          titleWrap.append(taskTitle, taskMeta);

          const taskArrow = document.createElement("span");
          taskArrow.className = "text-xl text-ink/45";
          taskArrow.textContent = "⌄";

          titleRow.append(titleWrap, taskArrow);
          textWrap.append(titleRow);
          taskSummary.append(checkbox, textWrap);
          taskCard.append(taskSummary, renderTaskBody(detail, id));
          list.append(taskCard);
        });

        content.append(list);
      }

      topicEl.append(content);
      topicsRoot.append(topicEl);
    });
  };

  renderTopics();
  renderSidebar();
  updateProgress();
  filterTopics();

  searchInput.addEventListener("input", filterTopics);

  expandAllButton.addEventListener("click", () => {
    document.querySelectorAll(".topic-card").forEach((card) => {
      if (!card.classList.contains("hidden")) {
        card.open = true;
      }
    });
    document.querySelectorAll("[data-sidebar-topic]").forEach((section) => {
      if (!section.classList.contains("hidden")) {
        section.open = true;
      }
    });
  });

  collapseAllButton.addEventListener("click", () => {
    document.querySelectorAll(".topic-card").forEach((card) => {
      card.open = false;
    });
    document.querySelectorAll("[data-sidebar-topic]").forEach((section) => {
      section.open = false;
    });
  });

  resetButton.addEventListener("click", () => {
    getCheckboxes().forEach((checkbox) => {
      checkbox.checked = false;
    });

    Object.keys(state).forEach((key) => {
      delete state[key];
    });

    localStorage.removeItem(storageKey);
    updateProgress();
    renderSidebar();
  });
})();
