const cnt = document.querySelector(".container");
const addBtn = document.querySelector(".button-add");

addBtn.addEventListener("click", (e) => {
  newEl = document.createElement("div");
  newEl.classList.add("box");
  cnt.append(newEl);
});
