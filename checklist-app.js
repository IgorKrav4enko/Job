(function () {
  const data = window.StructyChecklistData || { topics: [], taskDetails: {} };
  const topics = data.topics;
  const taskDetails = data.taskDetails;

  const storageKey = "structy-topic-checklist-state";
  const topicsRoot = document.getElementById("topics-root");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const topicCount = document.getElementById("topic-count");
  const taskCount = document.getElementById("task-count");
  const visibleCount = document.getElementById("visible-count");
  const emptyState = document.getElementById("empty-state");
  const searchInput = document.getElementById("topic-search");
  const expandAllButton = document.getElementById("expand-all");
  const collapseAllButton = document.getElementById("collapse-all");
  const resetButton = document.getElementById("reset-progress");

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

  const getCheckboxes = () => Array.from(document.querySelectorAll("[data-task-id]"));

  const updateProgress = () => {
    const checkboxes = getCheckboxes();
    const completed = checkboxes.filter((checkbox) => checkbox.checked).length;
    const total = checkboxes.length;
    const percent = total === 0 ? 0 : (completed / total) * 100;

    progressBar.style.width = percent + "%";
    progressText.textContent = completed + " / " + total;
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

    visibleCount.textContent = visible + " тем видно";
    emptyState.classList.toggle("hidden", visible !== 0);
  };

  const renderTaskBody = (detail) => {
    const body = document.createElement("div");
    body.className = "border-t border-line bg-white px-4 py-4";

    if (!detail) {
      const fallback = document.createElement("div");
      fallback.className = "rounded-2xl border border-dashed border-line bg-mist px-4 py-4 text-sm text-ink/65";
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
    statement.className = "rounded-2xl bg-mist px-4 py-4";
    statement.innerHTML = "<h4 class=\"font-heading text-lg font-bold\">Умова</h4>";

    const statementText = document.createElement("p");
    statementText.className = "mt-2 text-sm leading-6 text-ink/80";
    statementText.textContent = detail.statement;
    statement.append(statementText);

    mainColumn.append(statement);

    const hintSection = document.createElement("section");
    hintSection.className = "mt-4";
    const hintTitle = document.createElement("h4");
    hintTitle.className = "font-heading text-lg font-bold";
    hintTitle.textContent = "Hints";
    hintSection.append(hintTitle);

    const hintButtons = document.createElement("div");
    hintButtons.className = "mt-3 flex flex-wrap gap-2";
    const hintPanels = document.createElement("div");
    hintPanels.className = "mt-3 space-y-2";

    detail.hints.forEach((hint, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "rounded-full border border-line px-3 py-2 text-sm font-semibold transition-colors hover:border-coral hover:text-coral";
      button.textContent = "Hint " + (index + 1);

      const panel = document.createElement("div");
      panel.className = "hidden rounded-2xl bg-mist px-4 py-3 text-sm text-ink/80";
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
    pseudoSection.className = "mt-4";
    const pseudoTitle = document.createElement("h4");
    pseudoTitle.className = "font-heading text-lg font-bold";
    pseudoTitle.textContent = "Pseudocode";

    const pseudoToggle = document.createElement("button");
    pseudoToggle.type = "button";
    pseudoToggle.className = "mt-3 rounded-full border border-line px-3 py-2 text-sm font-semibold transition-colors hover:border-coral hover:text-coral";
    pseudoToggle.textContent = "Show pseudocode";

    const pseudoBox = document.createElement("pre");
    pseudoBox.className = "mt-3 hidden overflow-x-auto rounded-2xl bg-ink p-4 text-sm text-white";
    pseudoBox.textContent = detail.pseudocode.join("\n");

    pseudoToggle.addEventListener("click", () => {
      const isHidden = pseudoBox.classList.contains("hidden");
      pseudoBox.classList.toggle("hidden");
      pseudoToggle.textContent = isHidden ? "Hide pseudocode" : "Show pseudocode";
    });

    pseudoSection.append(pseudoTitle, pseudoToggle, pseudoBox);
    mainColumn.append(pseudoSection);

    const solutionsSection = document.createElement("section");
    solutionsSection.className = "mt-4";
    solutionsSection.innerHTML = "<h4 class=\"font-heading text-lg font-bold\">Solutions</h4>";

    detail.solutions.forEach((solution) => {
      const solutionCard = document.createElement("details");
      solutionCard.className = "mt-3 rounded-2xl border border-line bg-mist";

      const solutionSummary = document.createElement("summary");
      solutionSummary.className = "cursor-pointer list-none px-4 py-3 font-semibold";
      solutionSummary.textContent = solution.title;

      const solutionBody = document.createElement("div");
      solutionBody.className = "border-t border-line bg-white px-4 py-4";

      const code = document.createElement("pre");
      code.className = "overflow-x-auto rounded-2xl bg-ink p-4 text-sm text-white";
      code.textContent = solution.code;

      const complexity = document.createElement("p");
      complexity.className = "mt-3 text-sm text-ink/70";
      complexity.textContent = solution.complexity;

      solutionBody.append(code, complexity);
      solutionCard.append(solutionSummary, solutionBody);
      solutionsSection.append(solutionCard);
    });

    mainColumn.append(solutionsSection);

    if (detail.testCases && detail.testCases.length) {
      const testsCard = document.createElement("details");
      testsCard.className = "rounded-2xl border border-line bg-mist";

      const testsSummary = document.createElement("summary");
      testsSummary.className = "cursor-pointer list-none px-4 py-3";

      const summaryRow = document.createElement("div");
      summaryRow.className = "flex items-center justify-between gap-3";

      const summaryTitle = document.createElement("div");
      summaryTitle.innerHTML = "<div class=\"font-heading text-lg font-bold\">Test Cases</div><div class=\"mt-1 text-sm text-ink/60\">Допоміжний блок для швидкого копіювання</div>";

      const copyButton = document.createElement("button");
      copyButton.type = "button";
      copyButton.className = "rounded-full border border-line px-3 py-2 text-xs font-semibold transition-colors hover:border-coral hover:text-coral";
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
      testsBody.className = "border-t border-line bg-white px-4 py-4";

      const testsCode = document.createElement("pre");
      testsCode.className = "overflow-x-auto rounded-2xl bg-ink p-4 text-sm text-white";
      testsCode.textContent = detail.testCases.join("\n");

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
      topicEl.className = "topic-card group rounded-3xl border border-line bg-white open:shadow-soft";
      topicEl.dataset.search = (topic.title + " " + topic.tasks.join(" ")).toLowerCase();
      topicEl.open = topic.tasks.length > 0 && topic.title.startsWith("0.");

      const summary = document.createElement("summary");
      summary.className = "flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5";

      const summaryText = document.createElement("div");
      const topicLabel = document.createElement("p");
      topicLabel.className = "text-xs uppercase tracking-[0.25em] text-coral";
      topicLabel.textContent = "Theme";

      const title = document.createElement("h3");
      title.className = "mt-2 font-heading text-2xl font-extrabold";
      title.textContent = topic.title;

      const meta = document.createElement("p");
      meta.className = "mt-2 text-sm text-ink/60";
      meta.textContent = topic.tasks.length === 0 ? "Поки без задач у цьому конспекті" : topic.tasks.length + " задач";

      summaryText.append(topicLabel, title, meta);

      const arrow = document.createElement("span");
      arrow.className = "text-2xl text-ink/45 transition-transform group-open:rotate-180";
      arrow.textContent = "⌄";

      summary.append(summaryText, arrow);
      topicEl.append(summary);

      const content = document.createElement("div");
      content.className = "border-t border-line px-6 py-5";

      if (topic.tasks.length === 0) {
        const placeholder = document.createElement("p");
        placeholder.className = "rounded-2xl bg-mist px-4 py-4 text-sm text-ink/65";
        placeholder.textContent = "Для цієї теми в поточному списку ще немає окремих задач.";
        content.append(placeholder);
      } else {
        const list = document.createElement("div");
        list.className = "grid gap-3";

        topic.tasks.forEach((taskName) => {
          const id = taskId(topic.slug, taskName);
          const detail = taskDetails[id];

          const taskCard = document.createElement("details");
          taskCard.className = "rounded-2xl border border-line bg-mist";

          const taskSummary = document.createElement("summary");
          taskSummary.className = "flex cursor-pointer list-none items-start gap-4 px-4 py-4";

          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.className = "mt-1 h-5 w-5 rounded border-line text-coral focus:ring-coral";
          checkbox.dataset.taskId = id;
          checkbox.checked = Boolean(state[id]);
          checkbox.addEventListener("click", (event) => event.stopPropagation());
          checkbox.addEventListener("change", () => {
            state[id] = checkbox.checked;
            writeState(state);
            updateProgress();
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
          taskMeta.textContent = detail ? "Деталі доступні" : "Поки є лише назва задачі";

          titleWrap.append(taskTitle, taskMeta);

          const taskArrow = document.createElement("span");
          taskArrow.className = "text-xl text-ink/45";
          taskArrow.textContent = "⌄";

          titleRow.append(titleWrap, taskArrow);
          textWrap.append(titleRow);
          taskSummary.append(checkbox, textWrap);
          taskCard.append(taskSummary, renderTaskBody(detail));
          list.append(taskCard);
        });

        content.append(list);
      }

      topicEl.append(content);
      topicsRoot.append(topicEl);
    });
  };

  renderTopics();
  updateProgress();
  filterTopics();

  searchInput.addEventListener("input", filterTopics);

  expandAllButton.addEventListener("click", () => {
    document.querySelectorAll(".topic-card").forEach((card) => {
      if (!card.classList.contains("hidden")) {
        card.open = true;
      }
    });
  });

  collapseAllButton.addEventListener("click", () => {
    document.querySelectorAll(".topic-card").forEach((card) => {
      card.open = false;
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
  });
})();
