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

/* MODAL */

const modal = document.createElement("div");
modal.classList.add("modal");
app.appendChild(modal);

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);

const modalTitle = document.createElement("h2");
modalTitle.classList.add("modal-title");
modalContent.appendChild(modalTitle);

const modalWord = document.createElement("span");
modalWord.classList.add("modal-word");
modalContent.appendChild(modalWord);

const playBtn = document.createElement("button");
playBtn.classList.add("play-btn");
playBtn.textContent = "Play again";
modalContent.appendChild(playBtn);

/* GET WORD FROM LIST */

const wordList = [
  {
    word: "HANGMAN",
    hint: "The game you are currently playing.",
  },
  {
    word: "GIT",
    hint: "Version control system.",
  },
  {
    word: "CHECKOUT",
    hint: "Git command is used to switch between branches or move the pointer to another existing commit.",
  },
  {
    word: "GITHUB",
    hint: "Web service for hosting projects and their collaborative development, based on Git.",
  },
  {
    word: "SHOW",
    hint: "Git command outputs the changes made by a specific commit.",
  },
  {
    word: "CLONE",
    hint: "Git command is used to create a copy of a remote repository.",
  },
  {
    word: "HEAD",
    hint: "The name of the pointer to the current state in the branch.",
  },
];

/* Get a random word */

const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  hiddenWord = word;
  document.querySelector(".hint").textContent = hint;
  startGame();
};

/* GAME FUNCTIONS */

let hiddenWord, correctLetters, wrongGuesses;
const maxGuesses = 6;

const initGame = (button, clickedBtn) => {
  if (hiddenWord.includes(clickedBtn)) {
    [...hiddenWord].forEach((letter, i) => {
      if (letter === clickedBtn) {
        correctLetters.push(letter);
        secretWord.querySelectorAll("li")[i].textContent = letter;
        secretWord.querySelectorAll("li")[i].classList.add("guess");
      }
    });
  } else {
    wrongGuesses++;
    hangmanImg.src = `./assets/images/hangman-${wrongGuesses}.svg`;
  }

  button.disabled = true;
  guessesCounter.textContent = `${wrongGuesses} / ${maxGuesses}`;

  if (correctLetters.length === hiddenWord.length) return gameOver(true);
  if (wrongGuesses === maxGuesses) return gameOver(false);
};

const startGame = () => {
  correctLetters = [];
  wrongGuesses = 0;
  hangmanImg.src = "./assets/images/hangman-0.svg";
  guessesCounter.textContent = `${wrongGuesses} / ${maxGuesses}`;
  secretWord.innerHTML = hiddenWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  virtualKeyboard
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));
};

const gameOver = (isWin) => {
  modal.classList.add("modal-active");
  modalTitle.textContent = isWin
    ? "Congrats, you win!"
    : "You lose, game over!";
  modalText = "The hidden word: ";
  modalWord.innerHTML = `${modalText} <b>${hiddenWord}</b>`;
};

getRandomWord();

playBtn.addEventListener("click", () => {
  getRandomWord();
  modal.classList.remove("modal-active");
});
