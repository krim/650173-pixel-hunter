import {questionElement, QUESTIONS_TYPE} from './question';

export const questionsFormElement = (questions) => {
  const classDictionary = {
    [QUESTIONS_TYPE.ONE_IMAGE]: `game__content--wide`,
    [QUESTIONS_TYPE.TWO_IMAGES]: ``,
    [QUESTIONS_TYPE.THREE_IMAGES]: `game__content--triple`
  };

  const formClass = classDictionary[questions.length];

  return `<form class="game__content ${formClass}">
    ${[...questions].map((question, index) =>
    questionElement(question, questions.length, index)).join(``)}
    </form>`;
};
