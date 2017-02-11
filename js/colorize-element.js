'use strict';

window.colorizeElement = (function () {
  return function (element, colors, property) {
    element.addEventListener('click', setNewColor);

    element.addEventListener('keydown', function (e) {
      if (window.setup.isActivateEvent(e)) {
        setNewColor();
      }
    });

    /**
     * Функция установки нового цвета элемента,
     * на который сработало событие нажатия или клика
     */
    function setNewColor() {
      var newColor = window.utils.getRandomElementExcept(colors, element.style[property]);
      element.style[property] = newColor;
    }
  };
})();
