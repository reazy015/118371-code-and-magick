'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var template = document.querySelector('#similar-wizard-template');
var setupTemplate = template.content.querySelector('.setup-similar-item');
var setupList = document.querySelector('.setup-similar-list');
var names = ['Иван', 'Хуан Себастьян','Мария','Кристоф','Юлия','Люпита','Вашингтон'];
var surnames = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var coatColors = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var generatedInitialData = [];

setup.classList.remove('hidden');

function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function createRandomDataArray(names, surnames, coatC, eyesC) {
  var result = [];
  var objectAmount = 4;

  for(var i = 0; i < objectAmount; i++) {
    result.push({
      "name": names[getRandomValue(names.length, 0)] + ' ' + surnames[getRandomValue(surnames.length, 0)],
      "coatColor": coatC[getRandomValue(coatC.length, 0)],
      "eyesColor": eyesC[getRandomValue(eyesC.length, 0)]
    })
  }

  return result;
}

function drawMagician(template, data) {
  var fragment = document.createDocumentFragment();

  for(var i = 0; i < data.length; i++) {
      var magicianTemplate = template.cloneNode(true);

      magicianTemplate.querySelector('.setup-similar-label').textContent = data[i].name;
      magicianTemplate.querySelector('.wizard-coat').style.fill = data[i].coatColor;
      magicianTemplate.querySelector('.wizard-eyes').style.fill = data[i].eyesColor;

      fragment.appendChild(magicianTemplate);
  }

  setupList.appendChild(fragment);
}

drawMagician(setupTemplate, createRandomDataArray(names, surnames, coatColors, eyesColor));
setupSimilar.classList.remove('hidden');
