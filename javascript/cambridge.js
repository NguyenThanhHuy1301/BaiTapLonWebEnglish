// ===========================
// Cambridge Dictionary +Plus
// ===========================

console.log("Cambridge +Plus page loaded");

// ===========================
// Vocabulary page behaviour
// (used on Cambridge/vocabulary.html)
// ===========================

document.addEventListener("DOMContentLoaded", function () {
    // Filter words by search text
    const searchInput = document.querySelector(".vocab-search-input");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const term = this.value.trim().toLowerCase();
            const items = document.querySelectorAll(".vocab-list li");

            items.forEach(function (li) {
                if (!term) {
                    li.style.display = "";
                } else {
                    li.style.display = li.textContent.toLowerCase().includes(term)
                        ? ""
                        : "none";
                }
            });
        });
    }

    // Jump to letter heading when selecting from dropdown
    const letterSelect = document.getElementById("vocab-filter-select");
    if (letterSelect) {
        letterSelect.addEventListener("change", function () {
            const value = this.value;
            if (value === "all") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }

            const heading = document.getElementById("letter-" + value);
            if (heading) {
                heading.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }
});
