import {backButtonElement} from './back_button';
import {BASE_LEFT_LIVES} from '../data';

export const headerElement = (state) => `<header class="header">
  ${backButtonElement}
  <h1 class="game__timer">${state.leftSeconds}</h1>
  <div class="game__lives">
    ${new Array(BASE_LEFT_LIVES - state.leftLives)
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
    ${new Array(state.leftLives)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
  </div>
</header>`;
