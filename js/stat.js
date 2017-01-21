'use strict';

window.renderStatistics = function (ctx, names, times) {
  var drawCloud = function(x, y, width, height) {
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
    ctx.fill();
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  drawCloud(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  drawCloud(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 220, 40);
  ctx.fillText('Список результатов:', 220, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = 150;
  var histogramX = 140;
  var columnWidth = 40;
  var columnIndent = 50;
  var step = histogramHeight / max;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time;

    ctx.fillText(time.toFixed(0), histogramX + (columnIndent + columnWidth) * i, histogramHeight - height + 85);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, ' + ((Math.random() * 5 * 50)).toFixed(0) + ', ' + (Math.random() + 0.1).toFixed(1) + ')';
    }

    ctx.fillRect(histogramX + (columnIndent + columnWidth) * i, 245, columnWidth, height * -1);
    ctx.fillStyle = '#000000';
    ctx.fillText(name, histogramX + (columnIndent + columnWidth) * i, histogramHeight + 110);
  }
}
