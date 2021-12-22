import Modal from "./modal.module";
import "./follow_white_rabbit.css";

export default class FollowWhiteRabbitModule extends Modal {
  #SQUARES_NUMBER = 400;
  #COLORS_NUMBER = 50;

  constructor() {
    super();
    this.colors = this.getRandomColorArray();
    this.create();
    this.spanCounter = document.querySelector("#counter");
    this.addContent();
  }
  addContent() {
    this.modal.querySelector(".sct-card__content").insertAdjacentHTML(
      "afterbegin",
      `<div class="sct-card__fwr-panel">
<p class="sct-card__text">Кликай по полю ниже, что бы найти где спрятался белый кролик</p>
<button type="button" class="btn" >Старт</button>
</div>`
    );

    this.square = document.createElement("div");
    this.square.classList.add("sct-card__fwr-container");

    for (let i = 0; i < this.#SQUARES_NUMBER; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.dataset.id = String(i);
      this.square.append(box);
    }

    this.miniGame = this.createMiniGame();

    this.square.addEventListener("mouseover", (event) => {
      const { target } = event;
      if ([...target.classList].includes("box")) {
        this.setColor(target);
      }
    });
    this.square.addEventListener("mouseout", (event) => {
      const { target } = event;
      if ([...target.classList].includes("box")) {
        this.removeColor(target);
      }
    });

    const boxes = this.square.querySelectorAll("box");
    this.square.addEventListener("click", (event) => {
      const { target } = event;
      if ([...target.classList].includes("box")) {
        //let index = Array.from(boxes).indexOf(target);
        const index = +target.dataset.id;
        console.log(`Click index: ${index}`);

        if (!this.miniGame.win) {
          this.miniGame.counter++;
          this.miniGame.textContent = this.miniGame.counter;
          if (this.miniGame.whiteDivIndex === index) {
            target.classList.add("white-div");
            this.spanCounter.style.color = "red";
            this.miniGame.win = true;
          }
          this.miniGame.lastClickIndex = index;
        } else {
          if (this.miniGame.lastClickIndex === index) {
            event.target.classList.remove("white-div");
            this.miniGame.counter = 0;
            this.spanCounter.textContent = 0;
            this.spanCounter.style.color = "";
            this.miniGame.win = false;
          }
        }
      }
    });
    this.modal.querySelector(".sct-card__content").append(this.square);
  }
  setColor(el) {
    const color = this.getRandomColor();
    el.style.backgroundColor = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`;
  }

  removeColor(el) {
    el.style.backgroundColor = "#1d1d1d";
    el.style.boxShadow = `0 0 2px #000`;
  }

  getRandomColor() {
    const index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }
  getRGBColor() {
    return Math.floor(Math.random() * 255);
  }

  getRandomColorArray() {
    const colors = [];
    for (let i = 0; i < this.#COLORS_NUMBER; i++) {
      colors[
        i
      ] = `rgb(${this.getRGBColor()} ${this.getRGBColor()} ${this.getRGBColor()})`;
    }
    return colors;
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
    const divCount = this.square.querySelectorAll(".box").length;
    const index = Math.floor(Math.random() * divCount);
    console.log(`White div index: ${index}`);
    return index;
  }
}
