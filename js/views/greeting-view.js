import AbstractView from './abstract-view';
import footerElement from '../elements/footer';

export default class GreetingView extends AbstractView {
  constructor(data) {
    super();
    this.title = data.title;
    this.description = data.description;
  }

  get template() {
    return `
      <div class="greeting central--blur">
        <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
        <h1 class="greeting__asterisk">*</h1>
        <div class="greeting__challenge">
          <h3>${this.title}</h3>
          <p>${this.description}</p>
        </div>
        <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
      </div>
      ${footerElement}
    `;
  }

  bind(el) {
    const greetingContinue = el.querySelector(`.greeting__continue`);
    const greetingContinueClickHandler = () => {
      this.onGreetingContinueClick();
    };

    greetingContinue.removeEventListener(`click`, greetingContinueClickHandler);
    greetingContinue.addEventListener(`click`, greetingContinueClickHandler);
  }

  onGreetingContinueClick() { }
}
