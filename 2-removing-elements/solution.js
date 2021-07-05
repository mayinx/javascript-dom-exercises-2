const cnt = document.querySelector(".container");
const addBtn = document.querySelector(".button-add");

addBtn.addEventListener("click", (e) => {
  newEl = document.createElement("div");
  newEl.classList.add("box");
  cnt.append(newEl);
  newEl.addEventListener("click", (e) => {
    if (confirm("Sure about this, bro?! Destruction?! For real?!"))
      e.target.remove();
  });
});
