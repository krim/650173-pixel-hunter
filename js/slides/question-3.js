import {getElementFromTemplate} from '../util';
import {backButtonInit} from '../elements/back_button';
import {levels, PAINT, PHOTO} from '../data';
import {headerElement} from '../elements/header';
import footerElement from '../elements/footer';
import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import {renderNextLevel} from '../data/levels';
import {saveAnswerByElement} from '../data/answers';

const gameThird = {
  titles: {
    [PAINT]: `Найдите рисунок среди изображений`,
    [PHOTO]: `Найдите фото среди изображений`
  }
};

const gameOptionsClickHandler = (object, state) => {
  const newState = saveAnswerByElement(state, object);

  removeGameFormHandler(newState);
  renderNextLevel(newState);
};

const removeGameFormHandler = (state) => {
  const gameOptions = document.querySelectorAll(`.game__option`);

  if (gameOptions) {
    gameOptions.forEach((it) => it.removeEventListener(`click`, () => gameOptionsClickHandler(state)));
  }
};

const questionTitle = (questions) => {
  return isPaintQuestion(questions) ? gameThird.titles[PAINT] : gameThird.titles[PHOTO];
};

export const gameThirdInit = (state) => {
  backButtonInit();

  const gameOptions = document.querySelectorAll(`.game__option`);
  gameOptions.forEach((it) => it.addEventListener(`click`, (event) => gameOptionsClickHandler(event.target, state)));
};

export const isPaintQuestion = (questions) => {
  const paintPhotosCount = questions.filter((question) => question.type === PAINT).length;

  return paintPhotosCount === 1;
};

export const gameThirdElement = (state) => {
  return getElementFromTemplate(`
    ${headerElement(state)}
    <div class="game">
      <p class="game__task">${questionTitle(levels[state.level])}</p>
      ${questionsFormElement(levels[state.level])}
      <div class="stats">${statsBlockElement(state.givenAnswers)}</div>
    </div>
    ${footerElement}
  `);
};
