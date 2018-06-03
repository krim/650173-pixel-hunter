import {getElementFromTemplate, showSlide} from '../util';
import {gameFirstElement, gameFirstInit} from './game-1';
import {backButtonElement, backButtonInit} from '../back_button';
import {footerElement} from '../footer';

export const rulesElement = getElementFromTemplate(`<header class="header">
  ${backButtonElement}
</header>
<div class="rules">
  <h1 class="rules__title">Правила</h1>
  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?
  </p>
  <form class="rules__form">
    <input class="rules__input" type="text" placeholder="Ваше Имя">
    <button class="rules__button  continue" type="submit" disabled>Go!</button>
  </form>
</div>
${footerElement}`);

const rulesSubmitButtonClickHandler = () => {
  removeRulesHandlers();
  showSlide(gameFirstElement);
  gameFirstInit();
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
