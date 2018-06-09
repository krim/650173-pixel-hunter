import {QUESTIONS_COUNT} from '../data';
import {isFastAnswer, isSlowAnswer} from '../data/points';

export const statsBlockElement = (answers) => `
  <ul class="stats">
  ${[...answers].map((answer) => statElement(answer)).join(``)}
  ${new Array(QUESTIONS_COUNT - answers.length)
    .fill(`<li class="stats__result stats__result--unknown"></li>`)
    .join(``)}
  </ul>`;

const statElement = (answer) => `<li class="stats__result stats__result--${statClass(answer)}"></li>`;

const statClass = (answer) => {
  let statElementClass;

  if (answer.variant) {
    if (isFastAnswer(answer.seconds)) {
      statElementClass = `fast`;
    } else if (isSlowAnswer(answer.seconds)) {
      statElementClass = `slow`;
    } else {
      statElementClass = `correct`;
    }
  } else {
    statElementClass = `wrong`;
  }

  return statElementClass;
};

