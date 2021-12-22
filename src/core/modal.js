import DomElement from "./dom-element";
import "./modal.css";

export default class Modal {
  #blockClassName = "sct-card";
  constructor() {
    this.modal = new DomElement({ attrs: { className: this.#blockClassName } });
    this.header = new DomElement({
      attrs: { className: this.getElementClassName("header") },
    });
    this._body = new DomElement({
      attrs: { className: this.getElementClassName("body") },
    });
    this._content = new DomElement({
      attrs: { className: this.getElementClassName("content") },
    });
    this.footer = new DomElement({
      attrs: { className: this.getElementClassName("footer") },
    });
    this.title = new DomElement({
      attrs: { className: this.getElementClassName("title") },
    });
    this.text = new DomElement({
      attrs: { className: this.getElementClassName("text") },
    });
  }

  build(componentList) {
    componentList.forEach((component) => {
      this.modal.el.append(this[component].el);
    });
  }

  getElementClassName(className) {
    return this.#blockClassName + "__" + className;
  }

  get body() {
    return this._body;
  }

  get content() {
    return this._content;
  }

  setCloseBtn(moduleName = "") {
    const closeBtn = new DomElement({
      tag: "a",
      attrs: { className: "fa-lg", href: "#!", attrs: { role: "button" } },
    });
    const icon = new DomElement({
      tag: "i",
      attrs: {
        className: "far fa-times-circle",
        dataset: { btn: "close_modal", module: moduleName },
      },
    });
    closeBtn.el.append(icon.el);

    closeBtn.el.addEventListener("click", (event) => {
      const { target } = event;
      this.closeEvent();
    });

    this.footer.el.append(closeBtn.el);
  }
  closeEvent() {
    console.log("close modal");
  }
}
