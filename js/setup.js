'use strict';

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var wizardTemplate = document.querySelector('#similar-wizard-template');
var setupTemplate = wizardTemplate.content.querySelector('.setup-similar-item');
var setupList = document.querySelector('.setup-similar-list');
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var generatedInitialData = [];
var objectAmount = 4;

function showSetup(element) {
  element.classList.remove('hidden');
}

function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArrayElement(array) {
  return array[getRandomValue(array.length, 0)];
}

function createObject(name, surname, coatColor, eyesColor) {
  return {
    name: getRandomArrayElement(name) + ' ' + getRandomArrayElement(surname),
    coatColor: getRandomArrayElement(coatColor),
    eyesColor: getRandomArrayElement(eyesColor)
  };
}

function createRandomDataArray(objectsNumber) {
  for (var i = 0; i < objectsNumber; i++) {
    var randomObject = createObject(names, surnames, coatColors, eyesColors);
    generatedInitialData.push(randomObject);
  }

  return generatedInitialData;
}

function renderWizard(template, data) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < data.length; i++) {
    var magicianTemplate = template.cloneNode(true);

    magicianTemplate.querySelector('.setup-similar-label').textContent = data[i].name;
    magicianTemplate.querySelector('.wizard-coat').style.fill = data[i].coatColor;
    magicianTemplate.querySelector('.wizard-eyes').style.fill = data[i].eyesColor;

    fragment.appendChild(magicianTemplate);
  }

  setupList.appendChild(fragment);
}

renderWizard(setupTemplate, createRandomDataArray(objectAmount));
showSetup(setup);
showSetup(setupSimilar);
