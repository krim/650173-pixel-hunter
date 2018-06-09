import {questionElement} from './question';

export const questionsFormElement = (level) => {
  let formClass;

  switch (level.questions.length) {
    case 1: formClass = `game__content--wide`; break;
    case 2: formClass = ``; break;
    case 3: formClass = `game__content--triple`; break;
  }

  return `<form class="game__content ${formClass}">
    ${[...level.questions].map((question, index) =>
    questionElement(question, level.questions.length, index)).join(``)}
    </form>`;
};
