import {getElementFromTemplate, showSlide} from '../util';
import {greetingElement, greetingInit} from './greeting';

const intro = {
  description: `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`
};

const introAsteriskClickHandler = () => {
  removeAsteriskClickHandler();
  showSlide(greetingElement);
  greetingInit();
};

const removeAsteriskClickHandler = () => {
  const introAsterisk = document.querySelector(`#intro h1.intro__asterisk`);
  introAsterisk.removeEventListener(`click`, introAsteriskClickHandler);
};

export const introInit = () => {
  const introAsterisk = document.querySelector(`#intro h1.intro__asterisk`);
  introAsterisk.addEventListener(`click`, introAsteriskClickHandler);
};

export const introElement = getElementFromTemplate(`
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> ${intro.description}</p>
  </div>
`);
