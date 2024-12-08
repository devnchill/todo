import sunIcon from "../assests/icon/sun.png";
import moonIcon from "../assests/icon/moon.png";

const themeSwitcher = document.querySelector("#__moon");

themeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeSwitcher.src = sunIcon;
  } else {
    themeSwitcher.src = moonIcon;
  }
});
