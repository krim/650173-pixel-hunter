import AbstractView from './abstract-view';

export default class IntroView extends AbstractView {
  constructor(data) {
    super();
    this.description = data.description;
  }

  get template() {
    return `
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> ${this.description}</p>
      </div>
    `;
  }

  bind(el) {
    const introAsterisk = el.querySelector(`#intro h1.intro__asterisk`);
    const introAsteriskClickHandler = () => {
      this.onIntroAsteriskClick();
    };

    introAsterisk.removeEventListener(`click`, introAsteriskClickHandler);
    introAsterisk.addEventListener(`click`, introAsteriskClickHandler);
  }

  onIntroAsteriskClick() { }
}
