import {getElementFromTemplate, showSlide} from '../util';
import {statsElement, statsInit} from './stats';
import {backButtonInit} from '../elements/back_button';
import {initialState, answers} from '../data';
import {headerElement} from '../elements/header';
import footerElement from '../elements/footer';
import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import {levels} from '../levels';

const gameThird = {
  title: `Найдите рисунок среди изображений`
};

const gameOptionsClickHandler = () => {
  removeGameFormHandler();
  showSlide(statsElement);
  statsInit();
};

const removeGameFormHandler = () => {
  const gameOptions = document.querySelectorAll(`.game__option`);
  gameOptions.forEach((it) => it.removeEventListener(`click`, gameOptionsClickHandler));
};

export const gameThirdInit = () => {
  backButtonInit();

  const gameOptions = document.querySelectorAll(`.game__option`);
  gameOptions.forEach((it) => it.addEventListener(`click`, gameOptionsClickHandler));
};

export const gameThirdElement = getElementFromTemplate(`${headerElement(initialState)}
<div class="game">
  <p class="game__task">${gameThird.title}</p>
  ${questionsFormElement(levels[`level-3`])}
  <div class="stats">${statsBlockElement(answers)}</div>
</div>
${footerElement}`);
