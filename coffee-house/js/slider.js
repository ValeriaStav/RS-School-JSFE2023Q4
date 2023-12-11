const slides = [
    "../assets/images/coffee-slider-1.png",
    "../assets/images/coffee-slider-2.png",
    "../assets/images/coffee-slider-3.png",
];

const titles = ["S’mores Frappuccino", "Caramel Macchiato", "Ice coffee"];

const descriptions = [
    "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
    "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
    "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
];

const prices = ["$5.50", "$5.00", "$4.50"];

let slide = document.getElementById("slide-img");
let title = document.getElementById("slide-title");
let text = document.getElementById("slide-text");
let price = document.getElementById("slide-price");
let controls = document.querySelectorAll(".control");

let num = 0;

function next() {
    num++;
    if (num >= slides.length) {
        num = 0;
    }
    slide.src = slides[num];
    title.textContent = titles[num];
    text.textContent = descriptions[num];
    price.textContent = prices[num];
    controls[num].style.background = "#665F55";
    controls[num - 1].style.background = "#C1B6AD";
}

function prev() {
    num--;

    if (num < 0) {
        num = slides.length - 1;
    }
    slide.src = slides[num];
    title.textContent = titles[num];
    text.textContent = descriptions[num];
    price.textContent = prices[num];
    controls[num].style.background = "#665F55";
    controls[num + 1].style.background = "#C1B6AD";
}
