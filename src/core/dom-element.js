export default class DomElement {
  constructor({ tag = "div", attrs = {} }) {
    this._el = document.createElement(tag);
    this.setAttr(attrs);
  }

  setAttr(attrs) {
    if (Object.keys(attrs).length !== 0) {
      Object.keys(attrs).forEach((attr) => {
        if (attr === "dataset") {
          Object.keys(attrs[attr]).forEach(
            (key) => (this.el.dataset[`${key}`] = attrs[attr][`${key}`])
          );
        } else if (attr === "attrs") {
          Object.keys(attrs[attr]).forEach((key) =>
            this.el.setAttribute(key, attrs.attrs[key])
          );
          this.el[attr] = attrs[attr];
        } else {
          this.el[attr] = attrs[attr];
        }
      });
    }
  }

  get el() {
    return this._el;
  }
}
