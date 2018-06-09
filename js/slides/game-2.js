import {getElementFromTemplate, showSlide} from '../util';
import {gameThirdElement, gameThirdInit} from './game-3';
import {backButtonInit} from '../elements/back_button';
import {initialState, answers} from '../data';
import {headerElement} from '../elements/header';
import footerElement from '../elements/footer';
import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import {levels} from '../levels';

const gameSecond = {
  title: `Угадай, фото или рисунок?`
};

const answersCheckedHandler = () => {
  removeGameFormHandler();
  showSlide(gameThirdElement);
  gameThirdInit();
};

const removeGameFormHandler = () => {
  const gameForm = document.querySelector(`.game__content`);
  gameForm.removeEventListener(`change`, answersCheckedHandler);
};

export const gameSecondInit = () => {
  backButtonInit();

  const gameForm = document.querySelector(`.game__content`);
  gameForm.addEventListener(`change`, answersCheckedHandler);
};

export const gameSecondElement = getElementFromTemplate(`${headerElement(initialState)}
<div class="game">
  <p class="game__task">${gameSecond.title}</p>
  ${questionsFormElement(levels[`level-2`])}
  <div class="stats">${statsBlockElement(answers)}</div>
</div>
${footerElement}`);
