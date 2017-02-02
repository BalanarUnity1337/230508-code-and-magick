'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var setupWizardForm = setup.querySelector('.setup-wizard-form');
var setupSubmit = setup.querySelector('.setup-submit');
var setupUserName = setup.querySelector('.setup-user-name');
var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');
var wizard = setup.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

/**
 * При нажатии Enter, когда элемент .setup-open (аватарка пользователя)
 * находится в фокусе, происходит открытие окна настройки персонажа
 */
setupOpen.addEventListener('keydown', function (e) {
  if (isActivateEvent(e)) {
    showSetupMenu();
  }
});

/**
 * При нажатии Enter, когда элемент .setup-close (крестик)
 * находится в фокусе, происходит закрытие окна настройки персонажа
 */
setupClose.addEventListener('keydown', function (e) {
  if (isActivateEvent(e)) {
    hideSetupMenu();
  }
});

/**
 * При нажатии на элемент .setup-open (аватарка пользователя)
 * происходит открытие окна настройки персонажа
 */
setupOpen.addEventListener('click', function () {
  showSetupMenu();
});

/**
 * При нажатии на элемент .setup-close (крестик)
 * происходит закрытие окна настройки персонажа
 */
setupClose.addEventListener('click', function () {
  hideSetupMenu();
});

setupSubmit.addEventListener('click', function (e) {
  if (formValidation()) {
    hideSetupMenu();
  }
});

setupSubmit.addEventListener('keydown', function (e) {
  if (isActivateEvent(e)) {
    if (formValidation()) {
      hideSetupMenu();
    }
  }
});

/**
 * При попытке ввода в текстовое поле .setup-user-name
 * происходит проверка введенного значения на его
 * соответствие валидности
 */
setupUserName.addEventListener('input', function () {
  formValidation();
});

/**
 * При нажатии на элемент #wizard-coat (мантия мага)
 * происходит изменение ее цвета на любой другой
 * случайный цвет, расположенный в массиве wizardCoatColors
 */
wizardCoat.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorNumber];
});

/**
 * При нажатии на элемент #wizard-eyes (глаза мага)
 * происходит изменение их цвета на любой другой
 * случайный цвет, расположенный в массиве wizardEyesColors
 */
wizardEyes.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardEyesColors[colorNumber];
});

/**
 * При нажатии на элемент .setup-fireball-wrap (огненный шар)
 * происходит изменение его цвета на любой другой
 * случайный цвет, расположенный в массиве wizardFireballColors
 */
setupFireballWrap.addEventListener('click', function () {
  var colorNumber = Math.floor(Math.random() * wizardFireballColors.length);
  setupFireballWrap.style.background = wizardFireballColors[colorNumber];
});

/**
 * Скрываем меню настройки и удаляем
 * прослушку события нажатия на клавиатуру
 */
function hideSetupMenu() {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', eventHandlerKeydownSetup);
  toggleAriaPressed(setupOpen);
}

/**
 * Показываем меню настройки и добавляем
 * прослушку события нажатия на клавиатуру
 */
function showSetupMenu() {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', eventHandlerKeydownSetup);
  toggleAriaPressed(setupOpen);
}

/**
 * Проверяем был ли нажат Escape
 * Если да, то скрываем окно настройки
 * @param {KeyboardEvent} e
 */
function eventHandlerKeydownSetup(e) {
  if (e.keyCode === ESCAPE_KEY_CODE) {
    hideSetupMenu();
  }
}

/**
 * Проверяем был ли нажат Enter
 * @param {KeyboardEvent} e
 * @return {Boolean} Возвращается true, если нажат Enter
 */
function isActivateEvent(e) {
  return e.keyCode === ENTER_KEY_CODE;
}

/**
 * Валидация полей формы
 * @return {Boolean} Возвращается true, если поле .setup-user-name
 * соответствует критериям, в противном случае false
 */
function formValidation() {
  if (!setupUserName.value) {
    setupUserName.setCustomValidity('Имя персонажа не может быть пустым');
  } else if (setupUserName.value.length > 50) {
    setupUserName.setCustomValidity('Имя персонажа не должно превышать 50 символов');
  } else {
    setupUserName.setCustomValidity('');
    return true;
  }
  return false;
}

/**
 * Переключаем состояние роли Button 'aria-pressed'
 * @param {HTMLDivElement} element
 */
function toggleAriaPressed(element) {
  var pressed = (element.getAttribute('aria-pressed') === 'true');
  element.setAttribute('aria-pressed', !pressed);
}
