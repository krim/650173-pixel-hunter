import AbstractView from './abstract-view';
import {BASE_LEFT_LIVES} from '../data';

export default class GameStatView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }
  get template() {
    if (!this.state) {
      return ``;
    } else {
      return `
        <h1 class="game__timer">${this.state.leftSeconds}</h1>
        <div class="game__lives">
        ${new Array(BASE_LEFT_LIVES - this.state.leftLives)
          .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
        ${new Array(this.state.leftLives)
          .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
          .join(``)}
        </div>
      `;
    }
  }
}

