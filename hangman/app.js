/* HEADER */

const header = document.createElement("header")
header.classList.add("header")
document.body.append(header)

const logo = document.createElement("img")
logo.classList.add("header-img")
logo.src = "./assets/images/hangman-game.png"
header.appendChild(logo)

const title = document.createElement("h1")
title.classList.add("header-title")
title.textContent = "Hangman Game"
header.appendChild(title)

/* PLAYING FIELD */

const app = document.createElement("main")
app.classList.add("app-container")
document.body.append(app)

/* Gallows Part */

const gallowsPart = document.createElement("div")
gallowsPart.classList.add("gallows-part")
app.appendChild(gallowsPart)

const gallowsImg = document.createElement("img")
gallowsImg.classList.add("gallows-img")
gallowsImg.src = "./assets/images/gallows.svg"
gallowsPart.appendChild(gallowsImg)

/* Quiz Part */

const quizPart = document.createElement("div")
quizPart.classList.add("quiz-part")
app.appendChild(quizPart)

const secretWord = document.createElement("div")
secretWord.classList.add("secret-word")
secretWord.textContent = "_ _ _ _ _ _ _"
quizPart.appendChild(secretWord)

const question = document.createElement("div")
question.classList.add("question")
question.textContent =
  "Hint: any question  any question any question any question"
quizPart.appendChild(question)

const guessesCounter = document.createElement("div")
guessesCounter.classList.add("guesses-counter")
guessesCounter.textContent = "Incorrect guesses: 0/6"
quizPart.appendChild(guessesCounter)

const virtualKeyboard = document.createElement("div")
virtualKeyboard.classList.add("keyboard")

for (let i = 65; i <= 90; i++) {
  const keyBtn = document.createElement("button")
  keyBtn.innerText = String.fromCharCode(i)
  virtualKeyboard.appendChild(keyBtn)
}

quizPart.appendChild(virtualKeyboard)
