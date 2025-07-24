const button = document.querySelector(".btn-dog");
let flag = false;
let div = null;

button.addEventListener("click", changeItem);

function changeItem() {
  if (!flag) {
    if (!div) {
      div = document.createElement("div");
      div.style = "margin-left: 15px; padding: 10px 20px; border-radius: 8px;";
     div.innerHTML = `<img
          class="fox-icon"
          src="./assets/975549_OGFB9T1.svg"
          alt="fox-icon"
          width="200"
          height="200"
        />`;
    }

    button.after(div);

  } else {
    if (div && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }
  flag = !flag;
}
