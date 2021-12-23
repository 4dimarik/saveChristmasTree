import { RandomColors } from "../utils";
import "./christmas_tree.css";

export default class ChristmasTree {
  constructor() {
    this.tree = document.querySelector(".tree");
    this.lightIsOn = false;
  }

  createEventListener(modules) {
    this.modules = modules;
    this.tree.addEventListener("click", (event) => {
      const { target } = event;
      const { module: moduleName } = target.dataset;
      if (moduleName) {
        target.classList.toggle("selected");
        this.modules[moduleName].toggle();
      }
    });
  }

  toggle() {
    this.lightIsOn = !this.lightIsOn;
    this.changeCircleColor();
    this.tree.classList.toggle("light-off");
  }
  changeCircleColor() {
    const allCircles = this.tree.querySelectorAll(".cls-34");
    if (this.lightIsOn) {
      allCircles.forEach((circle) => {
        const randomColors = new RandomColors(30);
        circle.style.fill = randomColors.color;
      });
    } else {
      allCircles.forEach((circle) => {
        circle.style = "";
      });
    }
  }
}
