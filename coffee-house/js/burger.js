/* ======= Close the menu by clicking a button / link ======= */

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("burger-button")
        .addEventListener("click", function () {
            document.querySelector(".header").classList.toggle("open");
        });
    document
        .getElementById("burger-menu")
        .addEventListener("click", function () {
            document.querySelector(".header").classList.toggle("open");
        });
});

/* ======= Close the menu by clicking Escape ======= */

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        document.querySelector(".header").classList.remove("open");
    }
});
