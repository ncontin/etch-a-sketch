//Global variables

const board = document.querySelector("#board");
const btn = document.querySelector("#btn");
const color = document.querySelector(".colorBtn");
const black = document.querySelector(".blackBtn");
const clear = document.querySelector(".clearBtn");
const eraser = document.querySelector(".eraserBtn");
let dynamicValue = 32;
let isBlack = true;
let isColor = false;
let isErased = false;
let clicked = false;
let hoverFunction;

//Functions

function createGrid(x) {
    for (let rows = 0; rows < x; rows++) {
        for (let cols = 0; cols < x; cols++) {
            const div = document.createElement("div");
            div.classList.add("grid");
            board.appendChild(div);
        }
    }
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.style.flexBasis = `calc(100% / ${dynamicValue})`;
    });
}

createGrid(32);

function click() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener("click", () => {
            clicked = !clicked;
            console.log("clicked", clicked);
            addHovering();
        });
    });
}
click();

function addHovering() {
    const grids = document.querySelectorAll(".grid");

    if (hoverFunction) {
        grids.forEach((grid) => {
            grid.removeEventListener("mouseover", hoverFunction);
        });
    }

    if (clicked === true) {
        if (isBlack) {
            hoverFunction = (e) => {
                e.target.style.backgroundColor = `black`;
            };
        } else if (isColor) {
            hoverFunction = (e) => {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                e.target.style.backgroundColor = `#${randomColor}`;
            };
        } else if (isErased) {
            hoverFunction = (e) => {
                e.target.style.backgroundColor = ``;
            };
        }

        // Add new event listeners
        grids.forEach((grid) => {
            grid.addEventListener("mouseover", hoverFunction);
        });
    }
}

addHovering();

function clearGrid() {
    clicked = false;
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.style.backgroundColor = "";
    });
    addHovering();
}

function removeGrid() {
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.remove();
    });
}

//Event Listeners

black.addEventListener("click", () => {
    isBlack = true;
    isColor = false;
    isErased = false;
    clicked = false;
    addHovering();
});
color.addEventListener("click", () => {
    isColor = true;
    isBlack = false;
    isErased = false;
    clicked = false;
    addHovering();
});
eraser.addEventListener("click", () => {
    isErased = true;
    isColor = false;
    isBlack = false;
    clicked = false;
    addHovering();
    console.log("eraser enabled");
});

clear.addEventListener("click", () => {
    clearGrid();
});

btn.addEventListener("click", () => {
    const numberOfSquares = Number(window.prompt("Enter the number of squares per side, MAX 100", ""));

    if (numberOfSquares && numberOfSquares <= 100 && numberOfSquares > 0) {
        dynamicValue = numberOfSquares;
        removeGrid();
        createGrid(numberOfSquares);
        click();
        addHovering();
    } else {
        return;
    }
});
