import AbstractView from './abstract-view';
import {GameParams} from '../constants';
import {isFastAnswer, isSlowAnswer} from '../libs/points';

const AnswerStates = {
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
        ${new Array(GameParams.QUESTIONS_COUNT - this._answers.length)
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
      return AnswerStates.WRONG;
    }

    if (isFastAnswer(answer.seconds)) {
      return AnswerStates.FAST;
    }

    if (isSlowAnswer(answer.seconds)) {
      return AnswerStates.SLOW;
    }

    return AnswerStates.CORRECT;
  }
}
