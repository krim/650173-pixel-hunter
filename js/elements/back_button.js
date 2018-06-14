import {showSlide} from '../util';
// import {greetingView} from '../views/greeting-vew';

export const backButtonElement = `<div class="header__back">
  <button class="back">
    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
    <img src="img/logo_small.svg" width="101" height="44">
  </button>
</div>`;

const backButtonClickHandler = () => {
  removeBackButtonEventHandler();
  // showSlide(greetingElement);
  // greetingInit();
};

const removeBackButtonEventHandler = () => {
  const backButton = document.querySelector(`button.back`);
  backButton.removeEventListener(`click`, backButtonClickHandler);
};

export const backButtonInit = () => {
  const backButton = document.querySelector(`button.back`);
  backButton.addEventListener(`click`, backButtonClickHandler);
};
