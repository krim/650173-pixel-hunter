import {getElementFromTemplate} from '../util';
import {backButtonInit} from '../elements/back_button';
import {levels} from '../data';
import {saveAnswerByArray} from '../data/answers';
import {headerElement} from '../elements/header';
import footerElement from '../elements/footer';
import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import {renderNextLevel} from '../data/levels';

const QUESTION_ANSWERS_COUNT = 2;
const gameFirst = {
  title: `Угадайте для каждого изображения фото или рисунок?`
};

const answersCheckedHandler = (state) => {
  const checkedAnswers = document.querySelectorAll(`input:checked`);

  if (checkedAnswers.length === QUESTION_ANSWERS_COUNT) {
    const newState = saveAnswerByArray(state, checkedAnswers);

    removeGameFormHandler(newState);
    renderNextLevel(newState);
  }
};

const removeGameFormHandler = (state) => {
  const gameForm = document.querySelector(`.game__content`);

  if (gameForm){
    gameForm.removeEventListener(`change`, () => answersCheckedHandler(state));
  }
};

export const gameFirstInit = (state) => {
  backButtonInit();

  const gameForm = document.querySelector(`.game__content`);
  gameForm.addEventListener(`change`, () => answersCheckedHandler(state));
};

export const gameFirstElement = (state) => {
  return getElementFromTemplate(`
    ${headerElement(state)}
    <div class="game">
      <p class="game__task">${gameFirst.title}</p>
      ${questionsFormElement(levels[state.level])}
      <div class="stats">${statsBlockElement(state.answers)}</div>
    </div>
    ${footerElement}
  `);
};
