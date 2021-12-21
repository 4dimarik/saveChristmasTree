export default class followWhiteRabbitModule {
  #SQUARES_NUMBER = 400;
  #COLORS_NUMBER = 50;
  constructor({ boardSelector = "#board", spanCounterSelector = "#counter" }) {
    this.colors = this.getRandomColorArray();
    this.board = document.querySelector(boardSelector);
    this.spanCounter = document.querySelector(spanCounterSelector);
  }
  start() {
    for (let i = 0; i < this.#SQUARES_NUMBER; i++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", (event) => {
        this.setColor(square);
      });
      square.addEventListener("mouseleave", () => {
        this.removeColor(square);
      });

      this.board.append(square);
    }

    let miniGame = {
      whiteDivIndex: setWhiteDiv(),
      counter: 0,
      lastClickIndex: null,
      win: false,
    };

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        let index = Array.from(squares).indexOf(event.target);

        console.log(`Click index: ${index}`);
        if (!miniGame.win) {
          miniGame.counter++;
          spanCounter.textContent = miniGame.counter;
          if (miniGame.whiteDivIndex === index) {
            event.target.classList.add("white-div");
            spanCounter.style.color = "red";
            miniGame.win = true;
          }
          miniGame.lastClickIndex = index;
        } else {
          if (miniGame.lastClickIndex === index) {
            event.target.classList.remove("white-div");
            miniGame.counter = 0;
            spanCounter.textContent = 0;
            spanCounter.style.color = "";
            miniGame.win = false;
          }
        }
      });
    });
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
  setWhiteDiv() {
    const divCount = document.querySelectorAll(".container div").length; //?
    const index = Math.floor(Math.random() * divCount);
    console.log(`White div index: ${index}`);
    return index;
  }
}
