'use strict';

window.colorizeElement = function (element, colors, property) {
  element.addEventListener('click', function () {
    setNewColor();
  });
  element.addEventListener('keydown', function (e) {
    if (window.isActivateEvent(e)) {
      setNewColor();
    }
  });
  function setNewColor() {
    var newColor = window.utils.getRandomElementExcept(colors, element.style[property]);
    element.style[property] = newColor;
  }
};
