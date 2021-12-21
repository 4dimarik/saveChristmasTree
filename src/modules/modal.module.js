import "./modal.css";
export default class Modal {
  #isActive = false;
  constructor() {
    this.modal = null;
  }
  create() {
    this.modal = document.createElement("div");
    this.modal.className = "sct-card";
    this.modal.innerHTML = `
          <div class="sct-card__header"></div>
          <div class="sct-card__body">
<!--            <h5 class="sct-card__title">Special title treatment</h5>-->
<!--            <p class="sct-card__text">-->
<!--              -->
<!--            </p>-->
<!--            <div class="sct-card__close-btn"> -->
                <div class="sct-card__content"></div>
              <a class="m-1" style="color: #000;" href="#!" role="button">
                  <i class="far fa-times-circle" data-btn="close_modal" data-module=""></i>
              </a>
            </div>
          </div>
          <div class="sct-card__footer"></div>
        `;
  }
  insert() {
    document.querySelector(".modal_area").append(this.modal);
  }
  toggle() {
    this.#isActive = !this.#isActive;
    this.#isActive ? this.insert(".modal_area") : this.modal.remove();
  }
}
