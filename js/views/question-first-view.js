import {backButtonInit} from '../elements/back_button';
import {levels} from '../data';
import {headerElement} from '../elements/header';
import footerElement from '../elements/footer';
import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import AbstractView from './abstract-view';

export default class QuestionFirstView extends AbstractView {
  constructor(data, state) {
    super();
    this.title = data.title;
    this.state = state;
  }

  get template() {
    return `
      ${headerElement(this.state)}
      <div class="game">
        <p class="game__task">${this.title}</p>
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

  onAnswersChecked() { }
}

//
// const answersCheckedHandler = (state) => {
//   const checkedAnswers = document.querySelectorAll(`input:checked`);
//
//   if (checkedAnswers.length === QUESTION_ANSWERS_COUNT) {
//     const newState = saveAnswerByArray(state, checkedAnswers);
//
//     removeGameFormHandler(newState);
//     renderNextLevel(newState);
//   }
// };
//
// const removeGameFormHandler = (state) => {
//
//   if (gameForm) {
//     gameForm.removeEventListener(`change`, () => answersCheckedHandler(state));
//   }
// };
//
// export const gameFirstInit = (state) => {
//   backButtonInit();
//
//   const gameForm = document.querySelector(`.game__content`);
//   gameForm.addEventListener(`change`, () => answersCheckedHandler(state));
// };
