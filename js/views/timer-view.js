import AbstractView from './abstract-view';
const SECONDS_FOR_BLINK_TIMER = 5;

export default class TimerView extends AbstractView {
  constructor(seconds) {
    super();
    this._seconds = seconds;
  }

  get template() {
    return `
      <h1 class="game__timer ${this.addBlinkClass()}">${this._seconds}</h1>
    `;
  }

  addBlinkClass() {
    return this._seconds <= SECONDS_FOR_BLINK_TIMER ? `blink_me` : ``;
  }
}
