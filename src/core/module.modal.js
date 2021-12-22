import Modal from "./modal";

export default class ModuleModal extends Modal {
  constructor() {
    super();
    this.isActive = false;
  }

  addContent() {}

  insert() {
    document.querySelector(".modal_area").append(this.modal.el);
  }
  toggle() {
    this.isActive = !this.isActive;
    this.isActive ? this.insert(".modal_area") : this.modal.el.remove();
  }
}
