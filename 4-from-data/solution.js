const elementsToRender = [
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
];

const cnt = document.querySelector(".container");
const addBtn = document.querySelector(".button-add");

addBtn.addEventListener("click", (e) => {
  elementsToRender.forEach((el) => {
    let newEl = document.createElement("div");
    newEl.classList.add(el.className);
    newEl.style.backgroundColor = el.backgroundColor;
    cnt.append(newEl);
  });
});
