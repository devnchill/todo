import sunIcon from "../assets/icon/sun.png";
import moonIcon from "../assets/icon/moon.png";

const themeSwitcher = document.querySelector("#__moon");

if (localStorage.getItem("colorscheme") === "dark") {
  document.body.classList.add("dark");
  themeSwitcher.src = sunIcon;
}

themeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeSwitcher.src = sunIcon;
    localStorage.setItem("colorscheme", "dark");
  } else {
    themeSwitcher.src = moonIcon;
    localStorage.setItem("colorscheme", "light");
  }
});
const DOM = document.getElementById("__todo_list");

document.body.addEventListener("click", () => {
  if (DOM.children.length === 0) {
    DOM.classList.add("empty-dom");
  } else {
    DOM.classList.remove("empty-dom");
  }
});

window.addEventListener("load", DOM.classList.add("empty-dom"));
