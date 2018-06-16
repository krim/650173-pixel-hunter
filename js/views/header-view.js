import AbstractView from './abstract-view';
import BackButtonView from './back-button-view';
import {BASE_LEFT_LIVES} from '../data';

export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.backButton = new BackButtonView();
  }
  get template() {
    return `
      <header class="header">
        ${this.backButton.element.innerHTML}
        <h1 class="game__timer">${this.state.leftSeconds}</h1>
        <div class="game__lives">
          ${new Array(BASE_LEFT_LIVES - this.state.leftLives)
            .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
            .join(``)}
          ${new Array(this.state.leftLives)
              .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
              .join(``)}
        </div>
      </header>
    `;
  }
}
