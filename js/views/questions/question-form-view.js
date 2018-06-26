import AbstractView from '../abstract-view';
import QuestionView from './question-view';
import {QUESTIONS_TYPES} from '../../data';

export default class QuestionFormView extends AbstractView {
  constructor(questions) {
    super();
    this._questions = questions;
  }
  get template() {
    return `
      <form class="game__content ${this.formClass(this._questions)}">
        ${[...this._questions].map((question, index) => this.question(question, this._questions.length, index)).join(``)}
      </form>
    `;
  }

  formClass(questions) {
    const classDictionary = {
      [QUESTIONS_TYPES.ONE_IMAGE]: `game__content--wide`,
      [QUESTIONS_TYPES.TWO_IMAGES]: ``,
      [QUESTIONS_TYPES.THREE_IMAGES]: `game__content--triple`
    };

    return classDictionary[questions.length];
  }

  question(question, type, index) {
    const questionElement = new QuestionView(question, type, index);

    return questionElement.element.innerHTML;
  }
}
