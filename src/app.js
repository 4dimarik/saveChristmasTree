import StarSky from "./modules/star_sky.module";
import Music from "./modules/music.mudule";
import Snow from "./modules/snow.module";
import FollowWhiteRabbitModule from "./modules/follow_white_rabbit.module";
import ChristmasTree from "./modules/christmas_tree.module";
import Timer from "./modules/timer.module";

import "./styles.css";
import "./style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

let modules = {
  starSky: new StarSky(".sky", 20, 200),
  snow: new Snow(),
  music: new Music(),
  fwr: new FollowWhiteRabbitModule(),
  timer: new Timer(),
  christmasTree: new ChristmasTree(),
};

window.onload = () => {
  modules.starSky.create().insert();
  modules.christmasTree.createEventListener(modules);
};

window.onresize = () => {
  modules.starSky.create().insert();
};
