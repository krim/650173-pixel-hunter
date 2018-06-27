import AbstractView from './abstract-view';
import {BASE_LEFT_LIVES} from '../data';

export default class GameStatView extends AbstractView {
  constructor(leftLives) {
    super();
    this._leftLives = leftLives;
  }

  get template() {
    return `
      <div class="game__lives">
      ${new Array(BASE_LEFT_LIVES - this._leftLives)
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
      ${new Array(this._leftLives)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
      </div>
    `;
  }
}

