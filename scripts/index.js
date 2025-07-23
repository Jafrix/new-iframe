const button = document.querySelector(".btn-dog");
let flag = false;
let div = null;

button.addEventListener("click", changeItem);

function changeItem() {
  if (!flag) {
    if (!div) {
      div = document.createElement("div");
      div.innerHTML = "i am DOG";
    }

    button.after(div);
  } else {
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  flag = !flag;
}
