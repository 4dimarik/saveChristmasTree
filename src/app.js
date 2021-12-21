import StarSky from "./modules/star_sky.module";
import ChristmasTree from "./modules/christmas_tree.module";
import SvgBall from "./modules/ball.module";
import Modal from "./modules/modal.module";
import Snow from "./modules/snow.module";
import "./styles.css";
import "./style.scss";

const snow = new Snow();

const modal = new Modal();

document.addEventListener("DOMContentLoaded", () => {});
const starSky = new StarSky(".sky", 20, 200);
window.onload = () => {
  starSky.create().insert();
};

window.onresize = () => {
  starSky.create().insert();
};

document.querySelector("body").addEventListener("click", (event) => {
  //console.dir(event.target);
});

document.querySelector(".tree").addEventListener("click", (event) => {
  event.preventDefault();
  const { target } = event;
  const { parentElement } = target;
  console.log(target);
  console.log(target.localName, target.id);
  if (target.localName === "svg-ball") {
    target.toggleClass("selected");
    target.parentElement.classList.toggle("ball-shadow");
    console.log(parentElement.id);
    if (parentElement.id === "btn_tree_light") {
      document.querySelector("svg-christmas-tree").toggleLight();
    } else if (parentElement.id === "btn_ball_snow") {
      snow.toggle();
    } else if (parentElement.id === "btn_ball_fwr") {
      modal.toggle(".modal_area");
    }
  }
});
