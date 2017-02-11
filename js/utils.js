'use strict';

window.utils = (function () {
  return {
    /**
     * Функция возвращает случайный элемент из
     * переданного массива
     * @param {Array} array
     * @return {String}
     */
    getRandomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },

    /**
     * Функция возвращает новый цвет, не равный переданному
     * @param {Array} array
     * @param {String} elementOfArray
     * @return {String}
     */
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

    /**
     * Функция принимает один из элементов(компонентов) RGB цвета (R, G или B)
     * и возвращает его HEX представление
     * @param {String} component
     * @return {String}
     */
    convertComponentToHex: function (component) {
      var hex = parseInt(component, 10).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    },

    /**
     * Функция принимает цвет в RGB формате и разбивает его
     * на массив из трех элементов - составляющие RGB формат: R, G, B
     * Возвращается цвет в HEX формате
     * @param {String} RGBColor
     * @return {String}
     */
    convertRGBToHex: function (RGBColor) {
      RGBColor = RGBColor.split('(')[1].split(')')[0].split(', ');
      return '#' + this.convertComponentToHex(RGBColor[0]) + this.convertComponentToHex(RGBColor[1]) + this.convertComponentToHex(RGBColor[2]);
    }
  };
})();
