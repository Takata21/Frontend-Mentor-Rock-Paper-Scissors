function getWinner(game) {
    const { computer, human } = game;
    if (human.selection === "scissors" && computer.selection === "paper") {
        return { winner: "human", lose: "computer", draw: false };
    } else if (human.selection === "scissors" && computer.selection === "rock") {
        return { winner: "computer", lose: "human", draw: false };
    } else if (human.selection === "rock" && computer.selection === "scissors") {
        return { winner: "human", lose: "computer", draw: false };
    } else if (human.selection === "rock" && computer.selection === "paper") {
        return { winner: "computer", lose: "human", draw: false };
    } else if (human.selection === "paper" && computer.selection === "rock") {
        return { winner: "human", lose: "computer", draw: false };
    } else if (human.selection === "paper" && computer.selection === "scissors") {
        return { winner: "computer", lose: "human", draw: false };
    } else {
        return { winner: "", lose: "", draw: true };
    }
}

function getPickedDisplay(game) {
    const { computer, human } = game;
    const gameData = [human, computer];
    const items = gameData.map((item) => {
        // debugger;
        const pickedContainer = document.createElement("div");
        pickedContainer.classList.add("picked-payer-container");
        pickedContainer.id = item.player === "human" ? "player" : item.player;
        const gameItemContainer = document.createElement("div");
        gameItemContainer.classList.add("game-item-container");
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item", "picked", `${item.selection}`);
        item.player === "computer" ? (gameItem.id = "pc") : "";
        if (item.win) {
            gameItem.setAttribute("data-result", "win");
        }
        const imageContainer = document.createElement("span");
        imageContainer.classList.add("img-container");
        imageContainer.id = item.selection;
        const image = document.createElement("img");
        image.setAttribute("src", `./static/images/icon-${item.selection}.svg`);
        image.setAttribute("alt", `icon-${item.selection}`);
        const name = document.createElement("p");
        name.classList.add("picked-player-name");
        name.textContent =
            item.player === "human" ? "YOU PICKED" : "THE HOUSE PICKED";
        imageContainer.appendChild(image);
        gameItem.appendChild(imageContainer);
        gameItemContainer.appendChild(gameItem);
        pickedContainer.appendChild(gameItemContainer);
        pickedContainer.appendChild(name);

        return pickedContainer;
    });
    // debugger;
    return items;
}

function getResultDisplay(game) {
    // result Elements
    const gameResultContainer = document.createElement("div");
    gameResultContainer.classList.add("game-result-container");
    const resultText = document.createElement("h1");
    resultText.classList.add("result-text");
    if (game.human.win || game.computer.win) {
        resultText.textContent = game.human.win ? "YOU WIN" : "YOU LOSE";
    } else {
        resultText.textContent = "DRAW";
    }
    const btnPlayAgain = document.createElement("button");
    btnPlayAgain.classList.add("play-again");
    btnPlayAgain.id = "play-again";
    btnPlayAgain.textContent = "play again";
    gameResultContainer.appendChild(resultText);
    gameResultContainer.appendChild(btnPlayAgain);
    return gameResultContainer;
}

function clearDisplay(display) {
    while (display.firstChild) {
        display.removeChild(display.lastChild);
    }
}

export { getWinner, getPickedDisplay, clearDisplay, getResultDisplay };