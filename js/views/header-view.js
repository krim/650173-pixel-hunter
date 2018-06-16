import AbstractView from './abstract-view';
import GameStatView from './game-stat-view';
import BackButtonView from './back-button-view';

export default class HeaderView extends AbstractView {
  constructor(state = undefined) {
    super();
    this.gameStat = new GameStatView(state);
    this.backButton = new BackButtonView();
  }
  get template() {
    return `
      <header class="header">
        ${this.backButton.element.innerHTML}
        ${this.gameStat.element.innerHTML}
      </header>
    `;
  }
}
