'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');
var wizard = setup.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');

/**
 * При нажатии на элемент .setup-open (аватарка пользователя)
 * происходит открытие окна настройки персонажа
 */
setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

/**
 * При нажатии на элемент .setup-close (крестик)
 * происходит закрытие окна настройки персонажа
 */
setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

/**
 * При попытке ввода в текстовое поле .setup-user-name
 * происходит проверка введенного значения на его
 * соответствие валидности
 */
setupUserName.addEventListener('input', function () {
  if (!setupUserName.value) {
    setupUserName.setCustomValidity('Имя персонажа не может быть пустым');
  } else if (setupUserName.value.length > 50) {
    setupUserName.setCustomValidity('Имя персонажа не должно превышать 50 символов');
  } else {
    setupUserName.setCustomValidity('');
  }
});

/**
 * При нажатии на элемент #wizard-coat (мантия мага)
 * происходит изменение ее цвета на любой другой
 * случайный цвет, расположенный в массиве wizardCoatColors
 */
wizardCoat.addEventListener('click', function () {
  var wizardCoatColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var colorNumber = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorNumber];
});

/**
 * При нажатии на элемент #wizard-eyes (глаза мага)
 * происходит изменение их цвета на любой другой
 * случайный цвет, расположенный в массиве wizardEyesColors
 */
wizardEyes.addEventListener('click', function () {
  var wizardEyesColors = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var colorNumber = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardEyesColors[colorNumber];
});

/**
 * При нажатии на элемент .setup-fireball-wrap (огненный шар)
 * происходит изменение его цвета на любой другой
 * случайный цвет, расположенный в массиве wizardFireballColors
 */
setupFireballWrap.addEventListener('click', function () {
  var wizardFireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var colorNumber = Math.floor(Math.random() * wizardFireballColors.length);
  setupFireballWrap.style.background = wizardFireballColors[colorNumber];
});
