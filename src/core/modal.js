import DomElement from "./dom-element";
import "./modal.css";

export default class Modal {
  #blockClassName = "sct-card";
  constructor() {
    this.modal = new DomElement({ attrs: { className: this.blockClassName } });
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
      console.log(target);
      console.log(modules);
    });

    this.footer.el.append(closeBtn.el);
  }
}

// import "./modal.css";
//
// export default class Modal {
//     #isActive = false;
//     constructor() {
//         this.modal = null;
//     }
//     create() {
//         this.modal = document.createElement("div");
//         this.modal.className = "sct-card";
//         this.modal.innerHTML = `
//           <div class="sct-card__header"></div>
//           <div class="sct-card__body">
// <!--            <h5 class="sct-card__title">Special title treatment</h5>-->
// <!--            <p class="sct-card__text">-->
// <!--              -->
// <!--            </p>-->
// <!--            <div class="sct-card__close-btn"> -->
//                 <div class="sct-card__content"></div>
//               <a class="fa-lg" style="color: #fff;" href="#!" role="button">
//                   <i class="far fa-times-circle" data-btn="close_modal" data-module=""></i>
//               </a>
//             </div>
//           </div>
//           <div class="sct-card__footer"></div>
//         `;
//     }
//     insert() {
//         document.querySelector(".modal_area").append(this.modal);
//     }
//     toggle() {
//         this.#isActive = !this.#isActive;
//         this.#isActive ? this.insert(".modal_area") : this.modal.remove();
//     }
// }
