import {initialState} from '../data';
import {getElementFromTemplate} from '../util';
import {backButtonElement, backButtonInit} from '../elements/back_button';
import footerElement from '../elements/footer';
import {renderLevel} from '../levels';

const rules = {
  title: `Правила`,
  description: `Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?`,
  placeholder: `Ваше Имя`,
  button: `Go!`
};

const rulesSubmitButtonClickHandler = () => {
  removeRulesHandlers();
  renderLevel(initialState);
};

const rulesButtons = function () {
  return {
    rulesSubmitButton: document.querySelector(`.rules__button`),
    rulesNameInput: document.querySelector(`.rules__input`)
  };
};

const rulesNameInputOnChangeHandler = () => {
  const buttons = rulesButtons();
  buttons.rulesSubmitButton.disabled = buttons.rulesNameInput.value.length === 0;

  return;
};

const removeRulesHandlers = () => {
  const buttons = rulesButtons();
  buttons.rulesNameInput.removeEventListener(`input`, rulesNameInputOnChangeHandler);
  buttons.rulesSubmitButton.removeEventListener(`click`, rulesSubmitButtonClickHandler);
};

export const rulesInit = () => {
  backButtonInit();

  const buttons = rulesButtons();
  buttons.rulesNameInput.addEventListener(`input`, rulesNameInputOnChangeHandler);
  buttons.rulesSubmitButton.addEventListener(`click`, rulesSubmitButtonClickHandler);
};

export const rulesElement = getElementFromTemplate(`<header class="header">
  ${backButtonElement}
</header>
<div class="rules">
  <h1 class="rules__title">${rules.title}</h1>
  <p class="rules__description">${rules.description}</p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="${rules.placeholder}">
    <button class="rules__button  continue" type="submit" disabled>${rules.button}</button>
  </form>
</div>
${footerElement}`);
