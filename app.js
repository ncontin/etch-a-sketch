//Global variables

const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const color = document.querySelector(".colorBtn");
const black = document.querySelector(".blackBtn");
const clear = document.querySelector(".clearBtn");
const eraser = document.querySelector(".eraser");
let dynamicValue = 16;
let isBlack = true;
let isColor = false;
let isErased = false;
//Functions

function createGrid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let cols = 0; cols < x; cols++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      container.appendChild(div);
    }
  }
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.flexBasis = `calc(100% / ${dynamicValue})`;
  });
}

createGrid(16);

function addHovering() {
  const grids = document.querySelectorAll(".grid");
  if (isBlack) {
    grids.forEach((grid) => {
      grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `black`;
      });
    });
  } else if (isColor) {
    grids.forEach((grid) => {
      grid.addEventListener("mouseover", (e) => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor}`;
      });
    });
  } else if (isErased) {
    grids.forEach((grid) => {
      grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `white`;
      });
    });
  }
}

addHovering();

function clearGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.backgroundColor = "";
  });
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
  addHovering();
});
color.addEventListener("click", () => {
  isColor = true;
  isBlack = false;
  isErased = false;
  addHovering();
});
eraser.addEventListener("click", () => {
  isErased = true;
  isColor = false;
  isBlack = false;
  addHovering();
  console.log("eraser enabled");
});

clear.addEventListener("click", () => {
  clearGrid();
});

btn.addEventListener("click", () => {
  const numberOfSquares = Number(window.prompt("enter the number of square per side, MAX 100", ""));

  if (numberOfSquares && numberOfSquares <= 100 && numberOfSquares > 0) {
    dynamicValue = numberOfSquares;
    removeGrid();
    createGrid(numberOfSquares);
    addHovering();
  } else {
    return;
  }
});
