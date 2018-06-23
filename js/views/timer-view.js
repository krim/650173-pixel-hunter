import AbstractView from './abstract-view';

export default class TimerView extends AbstractView {
  constructor(seconds) {
    super();
    this._seconds = seconds;
  }
  get template() {
    return `
      <h1 class="game__timer">${this._seconds}</h1>
    `;
  }
}
