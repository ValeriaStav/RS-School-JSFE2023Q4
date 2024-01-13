/* HEADER */

const header = document.createElement("header")
header.classList.add("header")
document.body.append(header)

const logo = document.createElement("img")
logo.classList.add("header__img")
logo.src = "./assets/images/hangman-game.png"
header.appendChild(logo)

const title = document.createElement("h1")
title.classList.add("header__title")
title.textContent = "Hangman"
header.appendChild(title)
