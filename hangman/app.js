/* HEADER */

const header = document.createElement("header");
header.classList.add("header");
document.body.append(header);

const logo = document.createElement("img");
logo.classList.add("header-img");
logo.src = "./assets/images/hangman-game.png";
header.appendChild(logo);

const title = document.createElement("h1");
title.classList.add("header-title");
title.textContent = "Hangman Game";
header.appendChild(title);

/* PLAYING FIELD */

const app = document.createElement("main");
app.classList.add("app-container");
document.body.append(app);

/* Gallows Part */

const hangmanBox = document.createElement("div");
hangmanBox.classList.add("hangman-box");
app.appendChild(hangmanBox);

const hangmanImg = document.createElement("img");
hangmanImg.classList.add("hangman-img");
hangmanBox.appendChild(hangmanImg);

/* Quiz Part */

const quizPart = document.createElement("div");
quizPart.classList.add("quiz-part");
app.appendChild(quizPart);

const secretWord = document.createElement("ul");
secretWord.classList.add("secret-word");
quizPart.appendChild(secretWord);

const hintBox = document.createElement("div");
hintBox.classList.add("hint-box");
hintBox.textContent = "Hint: ";
quizPart.appendChild(hintBox);

const hint = document.createElement("span");
hint.classList.add("hint");
hintBox.appendChild(hint);

const guessesBox = document.createElement("div");
guessesBox.classList.add("guesses-box");
quizPart.appendChild(guessesBox);

const guessesText = document.createElement("span");
guessesText.classList.add("guesses-text");
guessesText.textContent = "Incorrect guesses: ";
guessesBox.appendChild(guessesText);

const guessesCounter = document.createElement("span");
guessesCounter.classList.add("guesses-counter");
guessesBox.appendChild(guessesCounter);

const virtualKeyboard = document.createElement("div");
virtualKeyboard.classList.add("keyboard");

for (let i = 65; i <= 90; i++) {
  const button = document.createElement("button");
  button.classList.add("key-btn");
  button.textContent = String.fromCharCode(i);
  virtualKeyboard.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

quizPart.appendChild(virtualKeyboard);
