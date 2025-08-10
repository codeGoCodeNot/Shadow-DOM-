import { Burger } from "./burger.js";
import { setUpButton } from "./toggle.js";
import { MyMain } from "./main.js";

customElements.define("my-burger", Burger);
customElements.define("my-main", MyMain);

setUpButton();

document.addEventListener("show-profile", () => {
  const main = document.querySelector("my-main");
  if (main) {
    main.renderProfile(); // this method you define inside MyMain class
  }
});
