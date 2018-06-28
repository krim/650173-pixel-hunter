import AbstractView from './abstract-view';
import {GameParams} from '../constants';

export default class GameStatView extends AbstractView {
  constructor(leftLives) {
    super();
    this._leftLives = leftLives;
  }

  get template() {
    return this._leftLives < 0 ? `` : `
      <div class="game__lives">
      ${new Array(GameParams.LIVES - this._leftLives)
        .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
      ${new Array(this._leftLives)
        .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
        .join(``)}
      </div>
    `;
  }
}

