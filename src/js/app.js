import computerPlayer from "./computerplayer.js";
import { getWinner, getPickedDisplay } from "./game.js";

const btnRules = document.getElementById("btn-rules");
const rulesContainer = document.querySelector(".rules-container");
const btnCloseRules = document.getElementById("btn-close-rules");
const gameItem = document.querySelectorAll(".game-item");
const pickedDisplay = document.querySelector(".picked-display");
const selectionDisplay = document.querySelector(".selection-display");
const resultText = document.querySelector(".result-text");
const scoreNumber = document.getElementById("score-number");
const fragment = document.createDocumentFragment();

let score = 0;
let gameDefault = {
    human: { player: "human", selection: null, win: false },
    computer: { player: "computer", selection: null, win: false },
};
let game = JSON.parse(JSON.stringify(gameDefault));
console.log(game);
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
            score + 1;
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
    changeDisplay();
    scoreNumber.textContent = score;
    if (game.human.win || game.computer.win) {
        resultText.textContent = game.human.win ? "YOU WIN" : "YOU LOSE";
    } else {
        resultText.textContent = "DRAW";
    }
}

function changeDisplay() {
    selectionDisplay.classList.remove("active");
    pickedDisplay.classList.add("active");
}
btnCloseRules.addEventListener("click", () =>
    rulesContainer.classList.remove("active")
);

btnRules.addEventListener("click", () =>
    rulesContainer.classList.add("active")
);