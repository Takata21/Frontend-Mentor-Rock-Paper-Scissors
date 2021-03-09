import computerPlayer from "./computerplayer.js";
import {
    getWinner,
    getPickedDisplay,
    clearDisplay,
    getResultDisplay,
} from "./game.js";

const btnRules = document.getElementById("btn-rules");
const rulesContainer = document.querySelector(".rules-container");
const btnCloseRules = document.getElementById("btn-close-rules");
const gameItem = document.querySelectorAll(".game-item");
const pickedDisplay = document.querySelector(".picked-display");
const selectionDisplay = document.querySelector(".selection-display");
const scoreNumber = document.getElementById("score-number");
const fragment = document.createDocumentFragment();
// const btnPlayAgain = document.getElementById("play-again");

let score = 0;
const gameDefault = {
    human: { player: "human", selection: null, win: false },
    computer: { player: "computer", selection: null, win: false },
};

const getDefault = () => JSON.parse(JSON.stringify(gameDefault));

let game = getDefault();
/*------------------------------*/
/*
// ADDING EVENT LISTENERS
*/
/*------------------------------*/

gameItem.forEach((item) => {
    item.addEventListener("click", gameStart);
});

// add player selections
function setSelections(selection) {
    game.human.selection = selection;
    game.computer.selection = computerPlayer();
}

// Get a winner game
function gameStart(e) {
    setSelections(e.currentTarget.id);
    const winner = getWinner(game);
    if (!winner.draw) {
        if (winner.winner === "human") {
            game.human.win = true;
            score = score + 1;
        } else {
            game.computer.win = true;
            score = score - 1;
        }
    }
    const items = getPickedDisplay(game);
    items.forEach((item) => {
        fragment.appendChild(item);
    });
    pickedDisplay.appendChild(fragment);
    pickedDisplay.appendChild(getResultDisplay(game));
    changeDisplay();
    scoreNumber.textContent = score;
    const PlayAgain = document.getElementById("play-again");
    PlayAgain.addEventListener("click", resetGame);
}

function changeDisplay() {
    selectionDisplay.classList.remove("active");
    pickedDisplay.classList.add("active");
}

function resetGame() {
    game = {
        human: { player: "human", selection: null, win: false },
        computer: { player: "computer", selection: null, win: false },
    };
    selectionDisplay.classList.add("active");
    pickedDisplay.classList.remove("active");
    clearDisplay(pickedDisplay);
}
btnCloseRules.addEventListener("click", () =>
    rulesContainer.classList.remove("active")
);

btnRules.addEventListener("click", () =>
    rulesContainer.classList.add("active")
);