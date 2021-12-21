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
    this.#modal.innerHTML = `
        <div class="sct-card">
          <div class="sct-card__header"></div>
          <div class="sct-card__body">
            <h5 class="sct-card__title">Special title treatment</h5>
            <p class="sct-card__text">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a href="#" class="btn btn-primary">Button</a>
          </div>
          <div class="sct-card__footer">2 days ago</div>
        </div>
        `;
  }
  insert(selector) {
    document.querySelector(selector).append(this.#modal);
  }
  toggle(selector) {
    this.#isActive = !this.#isActive;
    this.#isActive ? this.#modal.remove() : this.insert(selector);
  }
}
