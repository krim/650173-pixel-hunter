import {getElementFromTemplate} from '../util';
import {backButtonInit} from '../elements/back_button';
import {answers, levels} from '../data';
import {headerElement} from '../elements/header';
import footerElement from '../elements/footer';
import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import {renderNextLevel} from '../levels';

const gameSecond = {
  title: `Угадай, фото или рисунок?`
};

const answersCheckedHandler = (state) => {
  removeGameFormHandler(state);
  renderNextLevel(state);
};

const removeGameFormHandler = (state) => {
  const gameForm = document.querySelector(`.game__content`);
  gameForm.removeEventListener(`change`, () => answersCheckedHandler(state));
};

export const gameSecondInit = (state) => {
  backButtonInit();

  const gameForm = document.querySelector(`.game__content`);
  gameForm.addEventListener(`change`, () => answersCheckedHandler(state));
};

export const gameSecondElement = (state) => {
  return getElementFromTemplate(`${headerElement(state)}
  <div class="game">
    <p class="game__task">${gameSecond.title}</p>
    ${questionsFormElement(levels[state.level])}
    <div class="stats">${statsBlockElement(answers)}</div>
  </div>
  ${footerElement}`);
};
