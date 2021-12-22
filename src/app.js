import StarSky from "./modules/star_sky.module";
import Music from "./modules/music.mudule";
import Snow from "./modules/snow.module";
import FollowWhiteRabbitModule from "./modules/follow_white_rabbit.module";

import ChristmasTree from "./modules/christmas_tree.module";
import SvgBall from "./modules/ball.module";

import "./styles.css";
import "./style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

// const snow = new Snow();

// const modal = new Modal();

let modules = {
  starSky: new StarSky(".sky", 20, 200),
  snow: new Snow(),
  music: new Music(),
  fwr: new FollowWhiteRabbitModule(),
};

window.onload = () => {
  modules.starSky.create().insert();
  modules = {
    ...modules,
    christmasTree: document.querySelector("svg-christmas-tree"),
  };
};

window.onresize = () => {
  modules.starSky.create().insert();
};

document.querySelector("body").addEventListener("click", (event) => {
  const { target } = event;
  if (target.dataset.btn === "close_modal") {
    const svgBall = document.querySelector(
      `svg-ball[data-module="${target.dataset.module}"]`
    );
    svgBall.toggleClass("selected");
    svgBall.parentElement.classList.toggle("ball-shadow");
    modules[target.dataset.module].toggle();
  }
  // console.dir(event.target);
  // console.log(event.target.closest(".sct-card"));
});

document.querySelector(".tree").addEventListener("click", (event) => {
  event.preventDefault();
  const { target } = event;
  const { parentElement } = target;
  const { module: moduleName } = target.dataset;

  //console.dir(modules[moduleName]);

  if (target.localName === "svg-ball") {
    target.toggleClass("selected");
    parentElement.classList.toggle("ball-shadow");

    //console.dir(modules[moduleName]);

    modules[moduleName].toggle();

    // if (parentElement.id === "btn_tree_light") {
    //   document.querySelector("svg-christmas-tree").toggleLight();
    // } else if (parentElement.id === "btn_ball_snow") {
    //   snow.toggle();
    // } else if (parentElement.id === "btn_ball_fwr") {
    //   modal.toggle(".modal_area");
    // }
  }
});
