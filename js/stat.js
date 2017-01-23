'use strict';
/**
 *
 * @param {object} ctx Контекст рисования на холсте
 * @param {array} names Массив имен победителей
 * @param {array} times Массив времени прохождения
 */
window.renderStatistics = function (ctx, names, times) {
  var HISTOGRAM_HEIGHT = 150;
  var HISTOGRAM_X = 140;
  var COLUMN_WIDTH = 40;
  var COLUMN_INDENT = 50;
  var step = HISTOGRAM_HEIGHT / getMaxTime();
  drawCloud(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7');
  drawCloud(100, 10, 420, 270, '#ffffff');
  renderText();
  renderHistogram();

  /**
   *
   * @param {number} x Начальная координата облака по оси X
   * @param {number} y Начальная координата облака по оси Y
   * @param {number} width Ширина облака
   * @param {number} height Ширина облака
   * @param {string} fillColor Цвет заливки облака
   */
  function drawCloud(x, y, width, height, fillColor) {
    var offset = 15;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + offset, y + height / 2);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x + width / 2, y + height - offset);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x + width - offset, y + height / 2);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width / 2, y + offset);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = fillColor;
    ctx.fill();
  }

  /**
   * Отрисовка текста вверху облака
   * в случае победы
   */
  function renderText() {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000000';
    ctx.fillText('Ура вы победили!', 220, 40);
    ctx.fillText('Список результатов:', 220, 60);
  }

  /**
   * Поиск максимального значения
   * времени в массиве times
   *
   * @return {number}
   */
  function getMaxTime() {
    var max = -1;
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  }

  /**
   * Отрисовка гистограммы
   */
  function renderHistogram() {
    for (var i = 0; i < times.length; i++) {
      var name = names[i];
      var time = times[i];
      var height = step * time;
      renderHistogramTextTop();
      renderHistogramTextBottom();
      if (name === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, ' + ((Math.random() * 5 * 50)).toFixed(0) + ', ' + (Math.random() + 0.1).toFixed(1) + ')';
      }
      renderHistogramColumn();
    }

    /**
     * Отрисовка текущего столбца гистограммы
     */
    function renderHistogramColumn() {
      ctx.fillRect(HISTOGRAM_X + (COLUMN_INDENT + COLUMN_WIDTH) * i, 245, COLUMN_WIDTH, height * -1);
    }

    /**
     * Размещение времени прохождения
     * над текущим столбцом гистограммы
     */
    function renderHistogramTextTop() {
      ctx.fillStyle = '#000000';
      ctx.fillText(time.toFixed(0), HISTOGRAM_X + (COLUMN_INDENT + COLUMN_WIDTH) * i, HISTOGRAM_HEIGHT - height + 85);
    }

    /**
     * Размещение имени игрока
     * под текущим столбцом гистограммы
     */
    function renderHistogramTextBottom() {
      ctx.fillStyle = '#000000';
      ctx.fillText(name, HISTOGRAM_X + (COLUMN_INDENT + COLUMN_WIDTH) * i, HISTOGRAM_HEIGHT + 110);
    }
  }
};
