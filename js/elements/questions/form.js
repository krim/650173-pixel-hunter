import {questionElement, QUESTIONS_TYPE} from './question';

export const questionsFormElement = (level) => {
  let formClass;

  switch (level.questions.length) {
    case QUESTIONS_TYPE.ONE_IMAGE: formClass = `game__content--wide`; break;
    case QUESTIONS_TYPE.TWO_IMAGES: formClass = ``; break;
    case QUESTIONS_TYPE.THREE_IMAGES: formClass = `game__content--triple`; break;
  }

  return `<form class="game__content ${formClass}">
    ${[...level.questions].map((question, index) =>
    questionElement(question, level.questions.length, index)).join(``)}
    </form>`;
};
