import "./modal.css";
export default class Modal {
  #id;
  #modal;
  #isActive = false;
  constructor(id) {
    this.create();
  }
  create() {
    this.#modal = document.createElement("div");
    this.#modal.className = "sct-card";
    this.#modal.innerHTML = `
          <div class="sct-card__header"></div>
          <div class="sct-card__body">
            <h5 class="sct-card__title">Special title treatment</h5>
            <p class="sct-card__text">
              
            </p>
            <div class="sct-card__close-btn"> 
              <a class="m-1" style="color: #000;" href="#!" role="button">
                  <i class="far fa-times-circle"></i>
              </a>
            </div>
          </div>
          <div class="sct-card__footer"></div>
        `;
  }
  insert(selector) {
    document.querySelector(selector).append(this.#modal);
  }
  toggle(selector) {
    this.#isActive = !this.#isActive;
    console.log(this.#isActive);
    this.#isActive ? this.insert(selector) : this.#modal.remove();
  }
}
