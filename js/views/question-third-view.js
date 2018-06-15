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
    const gameOptions = el.querySelectorAll(`.game__option`);
    const gameOptionsClickHandler = (object, state) => {
      this.onGameOptionsClick(object, state);
    };

    gameOptions.forEach((it) => it.addEventListener(`click`, (event) => gameOptionsClickHandler(event.target, this.state)));
  }

  questionTitle(questions) {
    return QuestionThirdView.isPaintQuestion(questions) ? this.titles[PAINT] : this.titles[PHOTO];
  }

  static isPaintQuestion(questions) {
    const paintPhotosCount = questions.filter((question) => question.type === PAINT).length;

    return paintPhotosCount === 1;
  }

  onGameOptionsClick(_object, _state) { }
}

// export const gameThirdInit = (state) => {
//   backButtonInit();
//
//   const gameOptions = document.querySelectorAll(`.game__option`);
//   gameOptions.forEach((it) => it.addEventListener(`click`, (event) => gameOptionsClickHandler(event.target, state)));
// };
//
