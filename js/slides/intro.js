import {getElementFromTemplate, showSlide} from '../util';
import {greetingElement, greetingContinueClickHandler} from './greeting';

export const introElement = getElementFromTemplate(`<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</div>`);

export const asteriskClickHandler = () => {
  const introAsterisk = document.querySelector(`#intro h1.intro__asterisk`);
  const introAsteriskClickListener = () => {
    showSlide(greetingElement);
    greetingContinueClickHandler();
  };

  introAsterisk.addEventListener(`click`, introAsteriskClickListener);
};
