import AbstractView from './abstract-view';
import {QUESTIONS_COUNT} from '../data';
import {isFastAnswer, isSlowAnswer} from '../libs/points';

const ANSWERS_STATE = {
  FAST: `fast`,
  SLOW: `slow`,
  CORRECT: `correct`,
  WRONG: `wrong`
};

export default class StatBlockView extends AbstractView {
  constructor(answers) {
    super();
    this._answers = answers;
    this._blockClass = `stats`;
  }
  get template() {
    return `
      <ul class="stats">
        ${this._answers.map((answer) => this.statElement(answer)).join(``)}
        ${new Array(QUESTIONS_COUNT - this._answers.length)
          .fill(`<li class="stats__result stats__result--unknown"></li>`)
          .join(``)}
      </ul>
    `;
  }

  statElement(answer) {
    return `<li class="stats__result stats__result--${this.statClass(answer)}"></li>`;
  }

  statClass(answer) {
    if (!answer.variant) {
      return ANSWERS_STATE.WRONG;
    }

    if (isFastAnswer(answer.seconds)) {
      return ANSWERS_STATE.FAST;
    }

    if (isSlowAnswer(answer.seconds)) {
      return ANSWERS_STATE.SLOW;
    }

    return ANSWERS_STATE.CORRECT;
  }
}
