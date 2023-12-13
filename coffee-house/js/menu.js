/* ======= Variables ======= */

const coffeeButton = document.getElementById("coffee-btn");
const teaButton = document.getElementById("tea-btn");
const dessertButton = document.getElementById("dessert-btn");

const coffeeMenu = document.querySelector(".menu-coffee");
const teaMenu = document.querySelector(".menu-tea");
const dessertMenu = document.querySelector(".menu-dessert");

const refreshButton = document.getElementById("btn-refresh");
const coffee = document.querySelectorAll("#coffee");
const dessert = document.querySelectorAll("#dessert");

document.addEventListener("DOMContentLoaded", function () {
    /* ======= Menu Coffee ======= */

    coffeeButton.addEventListener("click", function () {
        teaMenu.classList.remove("active");
        dessertMenu.classList.remove("active");
        coffeeMenu.classList.add("active");
        teaButton.classList.remove("active");
        dessertButton.classList.remove("active");
        coffeeButton.classList.add("active");

        for (let item of dessert) {
            item.classList.remove("visible");
        }

        refreshButton.setAttribute("style", "opacity: 1");

        refreshButton.addEventListener("click", function () {
            refreshButton.setAttribute("style", "display: none");

            for (let item of coffee) {
                item.classList.add("visible");
            }

            for (let item of dessert) {
                item.classList.remove("visible");
            }
        });
    });

    /* ======= Menu Tea ======= */

    teaButton.addEventListener("click", function () {
        coffeeMenu.classList.remove("active");
        dessertMenu.classList.remove("active");
        teaMenu.classList.add("active");
        coffeeButton.classList.remove("active");
        dessertButton.classList.remove("active");
        teaButton.classList.add("active");

        refreshButton.setAttribute("style", "display: none");

        for (let item of coffee) {
            item.classList.remove("visible");
        }

        for (let item of dessert) {
            item.classList.remove("visible");
        }
    });

    /* ======= Menu Desserts ======= */

    dessertButton.addEventListener("click", function () {
        teaMenu.classList.remove("active");
        coffeeMenu.classList.remove("active");
        dessertMenu.classList.add("active");
        coffeeButton.classList.remove("active");
        teaButton.classList.remove("active");
        dessertButton.classList.add("active");

        for (let item of coffee) {
            item.classList.remove("visible");
        }

        refreshButton.setAttribute("style", "opacity: 1");

        refreshButton.addEventListener("click", function () {
            refreshButton.setAttribute("style", "display: none");

            for (let item of dessert) {
                item.classList.add("visible");

                for (let item of coffee) {
                    item.classList.remove("visible");
                }
            }
        });
    });

    /* ======= Load Menu Page ======= */

    refreshButton.addEventListener("click", function () {
        refreshButton.setAttribute("style", "display: none");
        for (let item of coffee) {
            item.classList.add("visible");
        }
    });

    /* ======= Resize Menu Page ======= */

    window.addEventListener("resize", (event) => {
        if (window.innerWidth < 1024) {
            for (let item of coffee) {
                item.classList.remove("visible");
            }

            for (let item of dessert) {
                item.classList.remove("visible");
            }

            refreshButton.setAttribute("style", "opacity: 1");
        }
    });
});
