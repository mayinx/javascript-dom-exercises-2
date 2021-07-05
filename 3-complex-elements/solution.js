const cnt = document.querySelector(".container");
const addBtn = document.querySelector(".button-add");

addBtn.addEventListener("click", (e) => {
  newEl = document.createElement("div");
  newEl.classList.add("box");
  colorPickerEl = document.createElement("input");
  colorPickerEl.type = "color";
  newEl.append(colorPickerEl);
  colorPickerEl.addEventListener("input", (e) => {
    e.target.closest(".box").style.backgroundColor = e.target.value;
  });

  cnt.append(newEl);
  newEl.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("box") &&
      confirm("Sure about this, bro?! Destruction?! For real?!")
    )
      e.target.remove();
  });
});
