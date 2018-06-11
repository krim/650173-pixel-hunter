import {getElementFromTemplate} from '../util';
import {backButtonInit} from '../elements/back_button';
import {levels} from '../data';
import {headerElement} from '../elements/header';
import footerElement from '../elements/footer';
import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import {renderNextLevel} from '../data/levels';
import {saveAnswerByArray} from '../data/answers';

const gameSecond = {
  title: `Угадай, фото или рисунок?`
};

const answersCheckedHandler = (state) => {
  const checkedAnswers = document.querySelectorAll(`input:checked`);
  const newState = saveAnswerByArray(state, checkedAnswers);

  removeGameFormHandler(newState);
  renderNextLevel(newState);
};

const removeGameFormHandler = (state) => {
  const gameForm = document.querySelector(`.game__content`);

  if (gameForm) {
    gameForm.removeEventListener(`change`, () => answersCheckedHandler(state));
  }
};

export const gameSecondInit = (state) => {
  backButtonInit();

  const gameForm = document.querySelector(`.game__content`);
  gameForm.addEventListener(`change`, () => answersCheckedHandler(state));
};

export const gameSecondElement = (state) => {
  return getElementFromTemplate(`
    ${headerElement(state)}
    <div class="game">
      <p class="game__task">${gameSecond.title}</p>
      ${questionsFormElement(levels[state.level])}
      <div class="stats">${statsBlockElement(state.givenAnswers)}</div>
    </div>
    ${footerElement}
  `);
};
