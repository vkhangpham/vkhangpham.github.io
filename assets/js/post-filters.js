document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-post-filters]");

  if (!form) {
    return;
  }

  const postListId = form.dataset.target;
  const postList = document.getElementById(postListId);

  if (!postList) {
    return;
  }

  const cards = Array.from(postList.querySelectorAll("[data-post-card]"));
  const summary = document.querySelector("[data-filter-summary]");
  const emptyState = document.querySelector("[data-post-empty]");
  const trackedParams = ["query", "from", "to", "tag"];

  const getFilterState = () => {
    const formData = new FormData(form);

    return {
      query: (formData.get("query") || "").toString().trim().toLowerCase(),
      selectedTags: formData
        .getAll("tag")
        .map((value) => value.toString().trim().toLowerCase())
        .filter(Boolean),
      from: (formData.get("from") || "").toString(),
      to: (formData.get("to") || "").toString(),
    };
  };

  const hydrateFiltersFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    const queryInput = form.querySelector("[name='query']");
    const fromInput = form.querySelector("[name='from']");
    const toInput = form.querySelector("[name='to']");
    const selectedTags = new Set(
      params
        .getAll("tag")
        .map((value) => value.toString().trim().toLowerCase())
        .filter(Boolean),
    );

    if (queryInput) {
      queryInput.value = (params.get("query") || "").toString();
    }

    if (fromInput) {
      fromInput.value = (params.get("from") || "").toString();
    }

    if (toInput) {
      toInput.value = (params.get("to") || "").toString();
    }

    form.querySelectorAll("[name='tag']").forEach((input) => {
      input.checked = selectedTags.has(input.value.toLowerCase());
    });
  };

  const syncUrlWithFilters = ({ query, selectedTags, from, to }) => {
    const params = new URLSearchParams(window.location.search);

    trackedParams.forEach((name) => {
      params.delete(name);
    });

    if (query) {
      params.set("query", query);
    }

    if (from) {
      params.set("from", from);
    }

    if (to) {
      params.set("to", to);
    }

    selectedTags.forEach((tag) => {
      params.append("tag", tag);
    });

    const nextSearch = params.toString();
    const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ""}${window.location.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (nextUrl !== currentUrl) {
      window.history.replaceState(null, "", nextUrl);
    }
  };

  const updateSummary = (visibleCount) => {
    if (!summary) {
      return;
    }

    summary.textContent = `${visibleCount} shown`;
  };

  const applyFilters = () => {
    const { query, selectedTags, from, to } = getFilterState();

    let visibleCount = 0;

    cards.forEach((card) => {
      const title = card.dataset.title || "";
      const cardTags = (card.dataset.tags || "").split("|").filter(Boolean);
      const date = card.dataset.date || "";

      const matchesQuery = !query || title.includes(query);
      const matchesTag = selectedTags.length === 0 || selectedTags.some((tag) => cardTags.includes(tag));
      const matchesFrom = !from || (date && date >= from);
      const matchesTo = !to || (date && date <= to);
      const isVisible = matchesQuery && matchesTag && matchesFrom && matchesTo;

      card.hidden = !isVisible;

      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }

    updateSummary(visibleCount);
    syncUrlWithFilters({ query, selectedTags, from, to });
  };

  hydrateFiltersFromUrl();
  form.addEventListener("input", applyFilters);
  form.addEventListener("change", applyFilters);
  form.addEventListener("reset", () => {
    window.requestAnimationFrame(applyFilters);
  });

  applyFilters();
});
