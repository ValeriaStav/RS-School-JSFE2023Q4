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

const secretWord = document.createElement("div");
secretWord.classList.add("secret-word");
quizPart.appendChild(secretWord);

const hintBox = document.createElement("div");
hintBox.classList.add("hint-box");
quizPart.appendChild(hintBox);

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

for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.classList.add("key-btn");
  button.id = String.fromCharCode(i);
  button.textContent = String.fromCharCode(i);
  virtualKeyboard.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

quizPart.appendChild(virtualKeyboard);

document.addEventListener("keypress", (e) => {
  const button = document.getElementById(`${e.key}`);
  if (!button.disabled) {
    initGame(button, e.key);
  }
});

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
    word: "hangman",
    hint: "The game you are currently playing.",
  },
  {
    word: "git",
    hint: "Version control system.",
  },
  {
    word: "return",
    hint: "JS operator terminates the current function and returns its value.",
  },
  {
    word: "checkout",
    hint: "Git command is used to switch between branches or move the pointer to another existing commit.",
  },
  {
    word: "const",
    hint: "Keyword is used in JavaScript to declare a variable.",
  },
  {
    word: "github",
    hint: "Web service for hosting projects and their collaborative development, based on Git.",
  },
  {
    word: "while",
    hint: "Keyword can you use to define a loop in JavaScript.",
  },
  {
    word: "show",
    hint: "Git command outputs the changes made by a specific commit.",
  },
  {
    word: "aside",
    hint: "HTML semantic element for the sidebar.",
  },
  {
    word: "clone",
    hint: "Git command is used to create a copy of a remote repository.",
  },
  {
    word: "head",
    hint: "The name of the pointer to the current state in the branch.",
  },
  {
    word: "margin",
    hint: "CSS property creates extra space around an element.",
  },
];

/* Get a random word */

const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  // console.log("Hidden Word: ", word.toUpperCase());
  hiddenWord = word;
  document.querySelector(".hint-box").textContent = hint;
  startGame();
};

/* GAME FUNCTIONS */

let hiddenWord, guessLetters, errors;

const initGame = (button, clickedBtn) => {
  if (hiddenWord.includes(clickedBtn)) {
    [...hiddenWord].forEach((letter, i) => {
      if (letter === clickedBtn) {
        guessLetters.push(letter);
        secretWord.querySelectorAll(".letter")[i].textContent = letter;
        secretWord.querySelectorAll(".letter")[i].classList.add("guess");
      }
    });
  } else {
    errors++;
    hangmanImg.src = `./assets/images/hangman-${errors}.svg`;
  }

  button.disabled = true;
  guessesCounter.textContent = `${errors} / ${maxErrors}`;

  if (guessLetters.length === hiddenWord.length) return gameOver(true);
  if (errors === maxErrors) return gameOver(false);
};

const maxErrors = 6;

const startGame = () => {
  guessLetters = [];
  errors = 0;
  hangmanImg.src = "./assets/images/hangman-0.svg";
  guessesCounter.textContent = `${errors} / ${maxErrors}`;
  secretWord.innerHTML = hiddenWord
    .split("")
    .map(() => `<div class="letter"></div>`)
    .join("");
  virtualKeyboard
    .querySelectorAll("button")
    .forEach((button) => (button.disabled = false));
};

const gameOver = (isWin) => {
  modal.classList.add("modal-active");
  modalTitle.textContent = isWin
    ? "Congrats, you win!"
    : "You lose, game over!";
  modalText = "The hidden word: ";
  modalWord.innerHTML = `${modalText} <b>${hiddenWord.toUpperCase()}</b>`;
  virtualKeyboard
    .querySelectorAll("button")
    .forEach((button) => (button.disabled = true));
};

getRandomWord();

playBtn.addEventListener("click", () => {
  getRandomWord();
  modal.classList.remove("modal-active");
});

alert("Please switch your keyboard to EN layout and use only letter keys!");
