export default class Snow {
  #selector;
  #quantity;
  #container;
  #isActive;

  constructor(selector = ".snow", quantity = 53) {
    this.#selector = selector;
    this.#quantity = quantity;
    this.#container = document.querySelector(selector);
    this.#isActive = false;
  }

  render() {
    const snow = document.querySelector(this.#selector);
    let i = 0;
    while (i < this.#quantity) {
      let snowflake = document.createElement("div");
      snowflake.className = "snowflake";
      this.#container.append(snowflake);
      i++;
    }
  }
  remove() {
    this.#container.innerHTML = "";
  }
  toggle() {
    this.#isActive = !this.#isActive;
    this.#isActive ? this.render() : this.remove();
  }
}
