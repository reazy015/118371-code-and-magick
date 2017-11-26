'use strict';

window.renderStatistics = function (ctx, names, times) {

  var HISTOGRAM_WIDTH = 150;
  var BAR_WIDTH = 40;
  var INDENT = BAR_WIDTH + 50;
  var INITIAL_X = 140;
  var INITIAL_Y = 250;
  var maxElement;
  var step;

  var drawCloud = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };

  var getMaxArrayElement = function (array) {
    var max = -1;
    for (var i = 0; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return max;
  };

  maxElement = getMaxArrayElement(times);
  step = HISTOGRAM_WIDTH / maxElement;

  var getRandomNumber = function (min, max) {
    return min + Math.random() * (max - min);
  };

  var setHistogramFillStyle = function (name) {
    name === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(0, 0, 255,' + getRandomNumber(0.1, 1) + ')';
  };

  var drawRectangeOfHistogram = function (caption, value, number) {
    var x0 = INITIAL_X + INDENT * number;
    var y0 = INITIAL_Y;
    var x1 = BAR_WIDTH;
    var y1 = -value * step;

    ctx.fillRect(x0, y0, x1, y1);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(caption, x0, y0 + 15);
    ctx.fillText(Math.round(value), x0, y1 - 5);
  };

  var drawHistogram = function () {
    for (var i = 0; i < times[i]; i++) {
      setHistogramFillStyle(names[i]);
      drawRectangeOfHistogram(names[i], times[i], i);
    }
  };

  drawCloud();
  drawHistogram();
};
