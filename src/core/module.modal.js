import Modal from "./modal";
import DomElement from "./dom-element";

export default class ModuleModal extends Modal {
  constructor() {
    super();
    this.isActive = false;
  }

  addContent() {}

  insert() {
    if (document.querySelector(".modal_area")) {
      document.querySelector(".modal_area").append(this.modal.el);
    } else {
      this.modalArea = new DomElement({
        attrs: { className: "modal_area" },
      }).el;
      document.querySelector("body").append(this.modalArea);
      this.modalArea.append(this.modal.el);
    }
  }

  toggle() {
    this.isActive = !this.isActive;
    this.isActive ? this.insert() : this.modal.el.remove();

    this.modalArea.childNodes.length === 0 ? this.modalArea.remove() : false;
  }
}
