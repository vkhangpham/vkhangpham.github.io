const initThemeToggle = () => {
  const root = document.documentElement;
  const storageKey = "between-bonfires-theme";
  const buttons = Array.from(document.querySelectorAll("[data-theme-toggle]"));
  const mediaQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  const isTheme = (value) => value === "light" || value === "dark";
  const getStoredTheme = () => {
    try {
      const theme = window.localStorage.getItem(storageKey);

      return isTheme(theme) ? theme : null;
    } catch (_error) {
      return null;
    }
  };
  const getSystemTheme = () => (mediaQuery && mediaQuery.matches ? "dark" : "light");
  const getResolvedTheme = () => getStoredTheme() || getSystemTheme();
  const getNextTheme = (theme) => (theme === "dark" ? "light" : "dark");
  const getActionLabel = (theme) => (theme === "dark" ? "extinguish the bonfire" : "light the bonfire");
  const updateButton = (button, theme) => {
    const label = getActionLabel(theme);

    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);

    const text = button.querySelector("[data-theme-toggle-label]");

    if (text) {
      text.textContent = label;
    }
  };
  const applyTheme = (theme, { persist = false } = {}) => {
    const nextTheme = isTheme(theme) ? theme : getResolvedTheme();

    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;

    buttons.forEach((button) => {
      updateButton(button, nextTheme);
    });

    if (persist) {
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch (_error) {
        return;
      }
    }
  };

  applyTheme(getResolvedTheme());

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      applyTheme(getNextTheme(root.dataset.theme), { persist: true });
    });
  });

  const handleSystemThemeChange = () => {
    if (!getStoredTheme()) {
      applyTheme(getSystemTheme());
    }
  };

  if (mediaQuery) {
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleSystemThemeChange);
    }
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
  initThemeToggle();
}
