import {showSlide} from './util';
import {greetingElement, greetingContinueClickHandler} from './slides/greeting';

export const backButtonElement = `<div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
</div>`;

export const backButtonHandler = () => {
  const backButton = document.querySelector(`button.back`);
  const backButtonClickListener = () => {
    showSlide(greetingElement);
    greetingContinueClickHandler();
  };

  backButton.addEventListener(`click`, backButtonClickListener);
};
