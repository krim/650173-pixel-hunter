import {getElementFromTemplate, showSlide} from '../util';
import {statsElement, statsInit} from './stats';
import {backButtonElement, backButtonInit} from '../back_button';
import {footerElement} from '../footer';

export const gameThirdElement = getElementFromTemplate(`<header class="header">
  ${backButtonElement}
  <h1 class="game__timer">NN</h1>
  <div class="game__lives">
    <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
    <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
  </div>
</header>
<div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
    </div>
  </form>
  <div class="stats">
    <ul class="stats">
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--correct"></li>
      <li class="stats__result stats__result--wrong"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--slow"></li>
      <li class="stats__result stats__result--unknown"></li>
      <li class="stats__result stats__result--fast"></li>
      <li class="stats__result stats__result--unknown"></li>
    </ul>
  </div>
</div>
${footerElement}`);

const gameOptionsClickHandler = () => {
  removeGameFormHandler();
  showSlide(statsElement);
  statsInit();
};

const removeGameFormHandler = () => {
  const gameOptions = document.querySelectorAll(`.game__option`);
  gameOptions.forEach((it) => it.removeEventListener(`click`, gameOptionsClickHandler));
};

export const gameThirdInit = () => {
  backButtonInit();

  const gameOptions = document.querySelectorAll(`.game__option`);
  gameOptions.forEach((it) => it.addEventListener(`click`, gameOptionsClickHandler));
};
