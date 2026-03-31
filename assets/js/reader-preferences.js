const initReaderPreferences = () => {
  const settingsRoot = document.querySelector("[data-reader-settings]");
  const form = document.querySelector("[data-reader-form]");
  const readerContent = document.querySelector("[data-reader-content]");
  const toggleButton = document.querySelector("[data-reader-settings-toggle]");

  if (!settingsRoot || !form || !readerContent) {
    return;
  }

  const storageKey = "between-bonfires-reader-settings";
  const defaults = {
    fontSize: 18,
    lineHeight: 1.7,
    wordSpacing: 0,
    wordsPerLine: 11,
    columns: 1,
  };
  const bounds = {
    fontSize: { min: 16, max: 24 },
    lineHeight: { min: 1.5, max: 2.2 },
    wordSpacing: { min: 0, max: 0.24 },
    wordsPerLine: { min: 8, max: 14 },
    columns: { min: 1, max: 2 },
  };
  const measureMultiplier = 8;
  const summary = settingsRoot.querySelector("[data-reader-summary]");
  const outputs = {
    fontSize: settingsRoot.querySelector("[data-reader-output='fontSize']"),
    lineHeight: settingsRoot.querySelector("[data-reader-output='lineHeight']"),
    wordSpacing: settingsRoot.querySelector("[data-reader-output='wordSpacing']"),
    wordsPerLine: settingsRoot.querySelector("[data-reader-output='wordsPerLine']"),
  };
  const rangeInputs = Array.from(form.querySelectorAll(".reader-setting-range"));
  const firstInput = rangeInputs[0];

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const setPanelOpen = (open, { focusPanel = false } = {}) => {
    settingsRoot.hidden = !open;

    if (toggleButton) {
      toggleButton.setAttribute("aria-expanded", open ? "true" : "false");
      toggleButton.classList.toggle("is-active", open);
    }

    if (open && focusPanel && firstInput) {
      window.requestAnimationFrame(() => {
        firstInput.focus();
      });
    }
  };
  const updateRangeProgress = () => {
    rangeInputs.forEach((input) => {
      const min = Number.parseFloat(input.min);
      const max = Number.parseFloat(input.max);
      const value = Number.parseFloat(input.value);
      const progress = max === min ? 0 : ((value - min) / (max - min)) * 100;

      input.style.setProperty("--reader-range-progress", `${progress}%`);
    });
  };

  const normalizeState = (state) => {
    const fontSize = clamp(Number.parseInt(state.fontSize, 10) || defaults.fontSize, bounds.fontSize.min, bounds.fontSize.max);
    const lineHeight = clamp(Number.parseFloat(state.lineHeight) || defaults.lineHeight, bounds.lineHeight.min, bounds.lineHeight.max);
    const wordSpacing = clamp(Number.parseFloat(state.wordSpacing) || defaults.wordSpacing, bounds.wordSpacing.min, bounds.wordSpacing.max);
    const wordsPerLine = clamp(
      Number.parseInt(state.wordsPerLine, 10) || defaults.wordsPerLine,
      bounds.wordsPerLine.min,
      bounds.wordsPerLine.max,
    );
    const columns = clamp(Number.parseInt(state.columns, 10) || defaults.columns, bounds.columns.min, bounds.columns.max);

    return { fontSize, lineHeight, wordSpacing, wordsPerLine, columns };
  };

  const getStoredState = () => {
    try {
      const raw = window.localStorage.getItem(storageKey);

      if (!raw) {
        return defaults;
      }

      return normalizeState(JSON.parse(raw));
    } catch (_error) {
      return defaults;
    }
  };

  const getFormState = () => {
    const formData = new FormData(form);

    return normalizeState({
      fontSize: formData.get("fontSize"),
      lineHeight: formData.get("lineHeight"),
      wordSpacing: formData.get("wordSpacing"),
      wordsPerLine: formData.get("wordsPerLine"),
      columns: formData.get("columns"),
    });
  };

  const syncForm = (state) => {
    const nextState = normalizeState(state);

    form.elements.fontSize.value = nextState.fontSize.toString();
    form.elements.lineHeight.value = nextState.lineHeight.toString();
    form.elements.wordSpacing.value = nextState.wordSpacing.toString();
    form.elements.wordsPerLine.value = nextState.wordsPerLine.toString();

    const checkedColumn = form.querySelector(`[name='columns'][value='${nextState.columns}']`);

    if (checkedColumn) {
      checkedColumn.checked = true;
    }
  };

  const updateOutputs = (state) => {
    if (outputs.fontSize) {
      outputs.fontSize.textContent = `${state.fontSize}px`;
    }

    if (outputs.lineHeight) {
      outputs.lineHeight.textContent = `${state.lineHeight.toFixed(2).replace(/0$/, "")}x`;
    }

    if (outputs.wordSpacing) {
      outputs.wordSpacing.textContent =
        state.wordSpacing === 0 ? "normal" : `${state.wordSpacing.toFixed(2).replace(/0$/, "")}em`;
    }

    if (outputs.wordsPerLine) {
      outputs.wordsPerLine.textContent = `~${state.wordsPerLine}`;
    }

    if (summary) {
      summary.textContent = `${state.fontSize}px / ${state.columns} column${state.columns === 1 ? "" : "s"}`;
    }
  };

  const applyState = (state) => {
    const nextState = normalizeState(state);
    const measureCh = nextState.wordsPerLine * measureMultiplier;

    readerContent.style.setProperty("--reader-font-size", `${nextState.fontSize}px`);
    readerContent.style.setProperty("--reader-line-height", nextState.lineHeight.toString());
    readerContent.style.setProperty("--reader-word-spacing", `${nextState.wordSpacing}em`);
    readerContent.style.setProperty("--reader-columns", nextState.columns.toString());
    readerContent.style.setProperty("--reader-content-width", `${measureCh}ch`);

    updateRangeProgress();
    updateOutputs(nextState);

    try {
      window.localStorage.setItem(storageKey, JSON.stringify(nextState));
    } catch (_error) {
      return;
    }
  };

  settingsRoot.classList.add("is-ready");
  setPanelOpen(false);

  const initialState = getStoredState();
  syncForm(initialState);
  applyState(initialState);

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const isOpen = toggleButton.getAttribute("aria-expanded") === "true";
      setPanelOpen(!isOpen, { focusPanel: !isOpen });
    });
  } else {
    setPanelOpen(true);
  }

  form.addEventListener("input", () => {
    applyState(getFormState());
  });

  form.addEventListener("change", () => {
    applyState(getFormState());
  });

  form.addEventListener("reset", () => {
    window.requestAnimationFrame(() => {
      applyState(defaults);
    });
  });

  settingsRoot.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !settingsRoot.hidden) {
      setPanelOpen(false);

      if (toggleButton) {
        toggleButton.focus();
      }
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initReaderPreferences);
} else {
  initReaderPreferences();
}
