const KNOWN_FOLDER_REGEX =
  /(Kwalifikacja_E14|Kwalifikacja_EE09|Cwiczenia_i_Zadania)(.*)$/i;
let manifestData = [];
let currentFilter = "All";

function getRepoRelativePath(itemPath) {
  const normalizedPath = itemPath.replace(/\\/g, "/");
  const match = normalizedPath.match(KNOWN_FOLDER_REGEX);
  return match ? match[0] : normalizedPath.replace(/^.*[\\/]/, "");
}

function init() {
  manifestData = EXAM_DATA.map((item) => ({
    ...item,
    RelativePath: getRepoRelativePath(item.Path),
  }));

  renderList();
  setupEventListeners();
}

const CATEGORY_LABELS = {
  Kwalifikacja_E14: "E.14",
  Kwalifikacja_EE09: "EE.09",
  Cwiczenia_i_Zadania: "Ćwiczenia i Zadania",
};

function formatCategory(category) {
  const normalized = category.trim();
  return CATEGORY_LABELS[normalized] || normalized.replace(/_/g, " ");
}

function renderList() {
  const grid = document.getElementById("exam-grid");
  const summary = document.getElementById("summary");
  const searchTerm = document
    .getElementById("search-input")
    .value.trim()
    .toLowerCase();

  const filtered = manifestData.filter((item) => {
    const text = [item.Name, item.Category, item.Pdf, item.Html, item.Sql]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchTerm === "" || text.includes(searchTerm);
    const matchesCategory =
      currentFilter === "All" || item.Category === currentFilter;
    return matchesSearch && matchesCategory;
  });

  summary.textContent = `${filtered.length} wyników dla: ${currentFilter === "All" ? "wszystkich kategorii" : formatCategory(currentFilter)}`;

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="empty-state">Nie znaleziono zadań dla tej frazy. Spróbuj innego słowa kluczowego.</div>';
    return;
  }

  grid.innerHTML = filtered
    .map((item) => {
      const categoryShort = formatCategory(item.Category);
      const title = item.Name.replace(/_/g, " ");
      const extra = [];

      if (item.Pdf) extra.push("PDF");
      if (item.Html) extra.push("HTML/PHP");
      if (item.Sql) extra.push("SQL");
      if (item.Archive) extra.push("ZIP");

      return `
        <article class="card">
          <div class="card-info">
            <span class="card-category">${categoryShort}</span>
            <h3 class="card-title">${title}</h3>
            <p class="card-meta">Dostępne: ${extra.join(" • ")}</p>
          </div>
          <div class="card-actions">
            ${item.Pdf ? `<a href="${item.RelativePath}/${item.Pdf}" class="btn btn-secondary" target="_blank">📄 PDF</a>` : ""}
            ${item.Html ? `<a href="${item.RelativePath}/${item.Html}" class="btn btn-secondary" target="_blank" onclick="return checkPhp('${item.Html}')">🚀 Otwórz</a>` : ""}
            ${item.Sql ? `<a href="${item.RelativePath}/${item.Sql}" class="btn btn-secondary" target="_blank">💾 SQL</a>` : ""}
            ${item.Archive ? `<a href="${item.RelativePath}/${item.Archive}" class="btn btn-primary" download>📥 ZIP</a>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function checkPhp(filename) {
  if (filename.endsWith(".php") && window.location.protocol === "file:") {
    alert(
      "💡 Pliki PHP działają tylko na serwerze lokalnym (np. XAMPP). Otwórz tę stronę przez HTTP.",
    );
  }
  return true;
}

function setupEventListeners() {
  document.getElementById("search-input").addEventListener("input", renderList);

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.currentTarget;
      document
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
      currentFilter = target.dataset.category;
      renderList();
    });
  });
}

document.addEventListener("DOMContentLoaded", init);
