import AbstractView from './abstract-view';

export default class IntroView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    return `
      <div id="intro" class="intro">
        <h1 class="intro__asterisk rotate_me">*</h1>
        <p class="intro__motto"><sup>*</sup> ${this._data.description}</p>
      </div>
    `;
  }
}
