import ModuleModal from "../core/module.modal";
import { RandomColors, numeralsWithNouns } from "../utils";
import "./follow_white_rabbit.css";
import DomElement from "../core/dom-element";

export default class FollowWhiteRabbitModule extends ModuleModal {
  #SQUARES_NUMBER = 400;
  #COLORS_NUMBER = 50;

  constructor() {
    super();
    this.randomColors = new RandomColors(this.#COLORS_NUMBER); //this.getRandomColorArray();
    this.boxClassName = "fwr-box";
    this.miniGame = this.createMiniGame();
    this.setCloseBtn("fwr");
    this.setPanelsContent();
    this.addContent();
    this.build(["header", "body", "footer"]);
  }

  setPanelsContent() {
    this.panels = {};
    this.panel = new DomElement({
      attrs: { className: this.getElementClassName("fwr-panel") },
    }).el;
    // start panel
    this.panels.start = new DomElement({ attrs: {} }).el;
    this.panels.start.append(
      new DomElement({
        tag: "p",
        attrs: {
          className: this.getElementClassName("text"),
          textContent:
            "Кликай по полю ниже, что бы найти где спрятался белый кролик",
        },
      }).el
    );
    const startBtn = new DomElement({
      tag: "button",
      attrs: {
        className: "btn btn-start",
        textContent: "Старт",
        type: "button",
      },
    }).el;
    startBtn.addEventListener("click", (event) => {
      this.panel.innerHTML = "";
      this.panel.append(this.panels.started);
      this.startMiniGame();
    });
    this.panels.start.append(startBtn);

    // started panel
    this.panels.started = new DomElement({ attrs: {} }).el;
    const p = new DomElement({
      tag: "p",
      attrs: {
        textContent: "Количество попыток ",
      },
    }).el;

    this.fwrCounter = new DomElement({
      tag: "span",
      attrs: {
        id: "fwr_counter",
        textContent: 0,
      },
    }).el;

    p.append(this.fwrCounter);
    this.panels.started.append(p);

    // end panel
  }

  addContent() {
    this.modal.el.classList.add("modal_area__fwr");

    this.panel.append(this.panels.start);
    this.content.el.append(this.panel);

    this.square = new DomElement({
      attrs: { className: this.getElementClassName("fwr-container") },
    }).el;

    for (let i = 0; i < this.#SQUARES_NUMBER; i++) {
      const box = new DomElement({
        attrs: { dataset: { id: String(i) }, className: this.boxClassName },
      }).el;
      this.square.append(box);
    }

    this.content.el.append(this.square);
    this.body.el.append(this.content.el);
  }

  startMiniGame() {
    this.square.addEventListener("mouseover", (event) => {
      const { target } = event;
      if ([...target.classList].includes(this.boxClassName)) {
        this.setColor(target);
      }
    });

    this.square.addEventListener("mouseout", (event) => {
      const { target } = event;
      if ([...target.classList].includes(this.boxClassName)) {
        this.removeColor(target);
      }
    });

    this.square.addEventListener("click", (event) => {
      const { target } = event;
      if ([...target.classList].includes(this.boxClassName)) {
        const index = +target.dataset.id;
        console.log(`Click index: ${index}`);

        if (!this.miniGame.win) {
          this.miniGame.counter++;
          this.fwrCounter.textContent = this.miniGame.counter;
          if (this.miniGame.whiteDivIndex === index) {
            this.miniGame.win = true;
            target.classList.add("white-div");
            //this.fwrCounter.style.color = "red";
            this.createEndPanel(this.miniGame.counter);
            this.panel.innerHTML = "";
            this.panel.append(this.panels.end);
          }
          this.miniGame.lastClickIndex = index;
        }
      }
    });
  }

  createEndPanel(count) {
    this.panels.end = new DomElement({ attrs: {} }).el;
    console.log(this.miniGame);
    this.panels.end.append(
      new DomElement({
        tag: "p",
        attrs: {
          className: this.getElementClassName("text"),
          textContent:
            "Вы нашли кролика за " +
            count +
            " " +
            numeralsWithNouns(count, ["попытку", "попытки", "попыток"]),
        },
      }).el
    );
    const restartBtn = new DomElement({
      tag: "button",
      attrs: {
        className: "btn btn-restart",
        textContent: "Повторить",
        type: "button",
      },
    }).el;
    restartBtn.addEventListener("click", (event) => {
      this.panel.innerHTML = "";
      this.panel.append(this.panels.started);
      this.miniGame.win = false;
      this.square.querySelector(".white-div").classList.remove("white-div");
      // this.miniGame.counter = 0;
      this.fwrCounter.textContent = "0";
      // this.fwrCounter.style.color = "";
      // this.setWhiteDiv();
      this.miniGame = this.createMiniGame();
      this.startMiniGame();
    });
    this.panels.end.append(restartBtn);
    return;
  }

  setColor(el) {
    const color = this.randomColors.color; //this.getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`;
  }

  removeColor(el) {
    el.style.backgroundColor = "#1d1d1d";
    el.style.boxShadow = `0 0 2px #000`;
  }

  createMiniGame() {
    return {
      whiteDivIndex: this.setWhiteDiv(),
      counter: 0,
      lastClickIndex: null,
      win: false,
    };
  }
  setWhiteDiv() {
    //const divCount = this.square.querySelectorAll(this.boxClassName).length;
    const index = Math.floor(Math.random() * this.#SQUARES_NUMBER);
    console.log(`White div index: ${index}`);
    return index;
  }
}
