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

  const updateSummary = (visibleCount) => {
    if (!summary) {
      return;
    }

    summary.textContent = `${visibleCount} shown`;
  };

  const applyFilters = () => {
    const formData = new FormData(form);
    const query = (formData.get("query") || "").toString().trim().toLowerCase();
    const selectedTags = formData
      .getAll("tag")
      .map((value) => value.toString().trim().toLowerCase())
      .filter(Boolean);
    const from = (formData.get("from") || "").toString();
    const to = (formData.get("to") || "").toString();

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
  };

  form.addEventListener("input", applyFilters);
  form.addEventListener("change", applyFilters);
  form.addEventListener("reset", () => {
    window.requestAnimationFrame(applyFilters);
  });

  applyFilters();
});
