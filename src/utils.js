export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export class RandomColors {
  constructor(quantity) {
    this.colors = this.getRandomColorArray(quantity);
  }

  get() {
    const index = Math.floor(Math.random() * this.colors.length);
    return this.colors[index];
  }
  getRGBColor() {
    return Math.floor(Math.random() * 255);
  }

  getRandomColorArray(quantity) {
    const colors = [];
    for (let i = 0; i < quantity; i++) {
      colors[
        i
      ] = `rgb(${this.getRGBColor()} ${this.getRGBColor()} ${this.getRGBColor()})`;
    }
    return colors;
  }
}
