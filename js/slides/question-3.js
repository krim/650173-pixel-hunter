import {getElementFromTemplate} from '../util';
import {backButtonInit} from '../elements/back_button';
import {levels} from '../data';
import {headerElement} from '../elements/header';
import footerElement from '../elements/footer';
import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import {renderNextLevel} from '../data/levels';
import {saveAnswerByElement} from "../data/answers";

const gameThird = {
  title: `Найдите рисунок среди изображений`
};

const gameOptionsClickHandler = (object, state) => {
  const newState = saveAnswerByElement(state, object)

  removeGameFormHandler(newState);
  renderNextLevel(newState);
};

const removeGameFormHandler = (state) => {
  const gameOptions = document.querySelectorAll(`.game__option`);

  if (gameOptions) {
    gameOptions.forEach((it) => it.removeEventListener(`click`, () => gameOptionsClickHandler(state)));
  }
};

export const gameThirdInit = (state) => {
  backButtonInit();

  const gameOptions = document.querySelectorAll(`.game__option`);
  gameOptions.forEach((it) => it.addEventListener(`click`, (event) => gameOptionsClickHandler(event.target || event.srcElement, state)));
};

export const gameThirdElement = (state) => {
  return getElementFromTemplate(`
    ${headerElement(state)}
    <div class="game">
      <p class="game__task">${gameThird.title}</p>
      ${questionsFormElement(levels[state.level])}
      <div class="stats">${statsBlockElement(state.answers)}</div>
    </div>
    ${footerElement}
  `);
};
