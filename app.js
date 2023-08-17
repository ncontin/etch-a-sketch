const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("click");
});

function createGrid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let cols = 0; cols < x; cols++) {
      const div = document.createElement("div");
      div.classList.add("grid");
      container.appendChild(div);
    }
  }
}

createGrid(16);

function addHovering() {
  const grid = document.querySelectorAll(".grid");
  grid.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
  });
}

addHovering();
