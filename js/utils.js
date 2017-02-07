'use strict';

window.utils = {
  getRandomElement: function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },
  getRandomElementExcept: function (array, elementOfArray) {
    var newElement;
    if (elementOfArray.indexOf('rgb') !== -1) {
      elementOfArray = this.convertRGBToHex(elementOfArray);
    }
    while (elementOfArray === newElement || !newElement) {
      newElement = this.getRandomElement(array);
    }
    return newElement;
  },
  convertComponentToHex: function (component) {
    var hex = parseInt(component, 10).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  },
  convertRGBToHex: function (RGBColor) {
    RGBColor = RGBColor.split('(')[1].split(')')[0].split(', ');
    return '#' + this.convertComponentToHex(RGBColor[0]) + this.convertComponentToHex(RGBColor[1]) + this.convertComponentToHex(RGBColor[2]);
  }
};
