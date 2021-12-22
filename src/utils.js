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

export const numeralsWithNouns = (num, nouns) => {
  if (num === 1 || (num > 20 && +String(num)[1] === 1)) {
    return nouns[0];
  } else if (
    (num > 1 && num < 5) ||
    (num > 21 && +String(num)[1] > 1 && +String(num)[1] < 5)
  ) {
    return nouns[1];
  } else if (
    num === 0 ||
    (num > 4 && num < 21) ||
    (num > 21 && +String(num)[1] > 4) ||
    +String(num)[1] === 0
  ) {
    return nouns[2];
  }
};
