import AbstractView from './abstract-view';
import GreetingView from './greeting-view';
import {showSlide} from '../util';
import {greetingData} from '../data';

export default class BackButtonView extends AbstractView {
  get template() {
    return `
      <div class="header__back">
        <button class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.svg" width="101" height="44">
        </button>
      </div>
    `;
  }

  bind(el) {
    const backButtonClickHandler = () => {
      const greetingScreen = new GreetingView(greetingData);
      showSlide(greetingScreen);
    };

    const backButton = el.querySelector(`button.back`);
    backButton.removeEventListener(`click`, backButtonClickHandler);
    backButton.addEventListener(`click`, backButtonClickHandler);
  }
}
