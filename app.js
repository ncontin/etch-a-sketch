const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const color = document.querySelector(".colorBtn");
const black = document.querySelector("#blackBtn");
const clear = document.querySelector(".clearBtn");

let dynamicValue = 16;

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

let isBlack = true;
let isColor = false;

black.addEventListener("click", () => {
  isBlack = true;
  console.log("black enabled");
});



function addHovering() {
  const grids = document.querySelectorAll(".grid");
  if (isBlack) {
    grids.forEach((grid) => {
      grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = `black`;
        grid.classList.add("active");
      });
    });
  } else {
    grids.forEach((grid) => {
      grid.addEventListener("mouseover", (e) => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor}`;
        grid.classList.add("active");
      });
    });
  }
}

// function addTransparency() {
//   const active = document.querySelectorAll(".active");
//   active.forEach((square) => {
//     square.addEventListener("mouseover", (e) => {
//       let
//       e.target.style.backgroundColor = `#${randomColor}`;
//       grid.classList.add("active");
//     });
//   });
// }

addHovering();

function clearGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.remove();
  });
}

btn.addEventListener("click", () => {
  const numberOfSquares = Number(window.prompt("enter the number of square per side, MAX 100", ""));

  if (numberOfSquares && numberOfSquares <= 100 && numberOfSquares > 0) {
    clearGrid();
    createGrid(numberOfSquares);
    addHovering();
  } else {
    console.log("prompt cancelled");
    clearGrid();
    createGrid(16);
    addHovering();
  }
});
