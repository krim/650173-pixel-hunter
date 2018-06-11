import {QUESTIONS_COUNT} from '../data';
import {isFastAnswer, isSlowAnswer} from '../data/points';

const statElement = (answer) => `<li class="stats__result stats__result--${statClass(answer)}"></li>`;

const ANSWERS_STATE = {
  FAST: `fast`,
  SLOW: `slow`,
  CORRECT: `correct`,
  WRONG: `wrong`
};

const statClass = (answer) => {
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
};

export const statsBlockElement = (answers) => `
  <ul class="stats">
    ${[...answers].map((answer) => statElement(answer)).join(``)}
    ${new Array(QUESTIONS_COUNT - answers.length)
      .fill(`<li class="stats__result stats__result--unknown"></li>`)
      .join(``)}
  </ul>`;
