import {getElementFromTemplate, showSlide} from '../util';
import {gameFirstElement, gameFirstAnswersCheckedHandler} from './game-1';
import {backButtonElement, backButtonHandler} from '../back_button';
import {footer} from '../footer';

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
${footer}`);

export const rulesSubmitClickHandler = () => {
  const rulesSubmitButton = document.querySelector(`.rules__button`);
  const rulesNameInput = document.querySelector(`.rules__input`);

  const rulesNameInputOnChangeListener = () => {
    rulesSubmitButton.disabled = rulesNameInput.value.length === 0;
  };
  rulesNameInput.addEventListener(`input`, rulesNameInputOnChangeListener);

  const rulesSubmitButtonClickHandler = () => {
    showSlide(gameFirstElement);
    gameFirstAnswersCheckedHandler();
  };
  rulesSubmitButton.addEventListener(`click`, rulesSubmitButtonClickHandler);
  backButtonHandler();
};
