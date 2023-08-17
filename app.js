const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
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

function addHovering() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  });
}

addHovering();

function clearGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.remove();
  });
}

btn.addEventListener("click", () => {
  const numberOfSquares = Number(window.prompt("enter the number of square per side, MAX 100", ""));

  if (Number.isInteger(numberOfSquares) && parseInt(numberOfSquares) <= 100) {
    dynamicValue = numberOfSquares;
    clearGrid();
    createGrid(numberOfSquares);
    addHovering();
  }
});
