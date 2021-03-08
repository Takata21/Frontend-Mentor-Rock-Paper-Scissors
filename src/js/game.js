function getWinner(game) {
    console.log(game);
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
    console.log(gameData);
    const items = gameData.map((item) => {
        // debugger;
        console.log(item);
        const pickedContainer = document.createElement("div");
        pickedContainer.classList.add("picked-payer-container");
        pickedContainer.id = item.player === "human" ? "player" : item.player;
        const gameItemContainer = document.createElement("div");
        gameItemContainer.classList.add("game-item-container");
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item", "picked", `${item.selection}`);
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

export { getWinner, getPickedDisplay };