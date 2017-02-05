'use strict';

window.utils = {
  getRandomElement: function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },
  getRandomElementExcept: function (array, elementOfArray) {
    var newElement;
    while (elementOfArray === newElement || !newElement) {
      newElement = this.getRandomElement(array);
    }
    return newElement;
  }
};
