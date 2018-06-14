// import {backButtonInit} from '../elements/back_button';
// import {renderNextLevel} from '../data/levels';
// import {saveAnswerByElement} from '../data/answers';

import {statsBlockElement} from '../elements/stats';
import footerElement from "../elements/footer";
import {questionsFormElement} from "../elements/questions/form";
import AbstractView from "./abstract-view";
import {levels, PAINT, PHOTO} from "../data";
import {headerElement} from "../elements/header";

export default class QuestionThirdView extends AbstractView {
  constructor(data, state) {
    super();
    this.titles = data.titles;
    this.state = state;
  }

  get template() {
    return `
      ${headerElement(this.state)}
      <div class="game">
        <p class="game__task">${this.questionTitle(levels[this.state.level])}</p>
        ${questionsFormElement(levels[this.state.level])}
        <div class="stats">${statsBlockElement(this.state.givenAnswers)}</div>
      </div>
      ${footerElement}
    `;
  }

  bind(el) {
    const gameForm = el.querySelector(`.game__content`);
    const answersCheckedHandler = () => {
      this.onAnswersChecked();
    };

    gameForm.removeEventListener(`change`, answersCheckedHandler);
    gameForm.addEventListener(`change`, answersCheckedHandler);
  }

  questionTitle(questions) {
    return this.isPaintQuestion(questions) ? this.titles[PAINT] : this.titles[PHOTO];
  }

  isPaintQuestion(questions) {
    const paintPhotosCount = questions.filter((question) => question.type === PAINT).length;

    return paintPhotosCount === 1;
  }

  onAnswersChecked() { }
}

// const gameOptionsClickHandler = (object, state) => {
//   const newState = saveAnswerByElement(state, object);
//
//   removeGameFormHandler(newState);
//   renderNextLevel(newState);
// };
//
// const removeGameFormHandler = (state) => {
//   const gameOptions = document.querySelectorAll(`.game__option`);
//
//   if (gameOptions) {
//     gameOptions.forEach((it) => it.removeEventListener(`click`, () => gameOptionsClickHandler(state)));
//   }
// };
//
// export const gameThirdInit = (state) => {
//   backButtonInit();
//
//   const gameOptions = document.querySelectorAll(`.game__option`);
//   gameOptions.forEach((it) => it.addEventListener(`click`, (event) => gameOptionsClickHandler(event.target, state)));
// };
//
