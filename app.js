const container = document.querySelector("#container");

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
