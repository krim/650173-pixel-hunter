import {getElementFromTemplate, showSlide} from '../util';
import {gameSecondElement, gameSecondInit} from './game-2';
import {backButtonInit} from '../elements/back_button';
import {initialState, answers} from '../data';
import {headerElement} from '../elements/header';
import footerElement from '../elements/footer';
import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import {levels} from '../levels';

const gameFirst = {
  title: `Угадайте для каждого изображения фото или рисунок?`
};

const answersCheckedHandler = () => {
  const checkedAnswers = document.querySelectorAll(`input:checked`);

  if (checkedAnswers.length === 2) {
    removeGameFormHandler();
    showSlide(gameSecondElement);
    gameSecondInit();
  }
};

const removeGameFormHandler = () => {
  const gameForm = document.querySelector(`.game__content`);
  gameForm.removeEventListener(`change`, answersCheckedHandler);
};

export const gameFirstInit = () => {
  backButtonInit();

  const gameForm = document.querySelector(`.game__content`);
  gameForm.addEventListener(`change`, answersCheckedHandler);
};

export const gameFirstElement = getElementFromTemplate(`${headerElement(initialState)}
<div class="game">
  <p class="game__task">${gameFirst.title}</p>
  ${questionsFormElement(levels[`level-1`])}
  <div class="stats">${statsBlockElement(answers)}</div>
</div>
${footerElement}`);
