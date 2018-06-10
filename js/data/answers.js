import {levels} from '../data';
import {die} from './levels';

const SECONDS_FOR_ANSWER = 15;

export const saveAnswer = (state, variant) => {
  if (!variant) {
    state = die(state);
  }
  state.answers.push({variant, seconds: SECONDS_FOR_ANSWER});

  return state;
};

export const saveAnswerByArray = (state, answers) => {
  const checkedAnswers = Array.from(answers).map((answer) => answer.value);
  const levelsAnswers = levels[state.level].questions.map((question) => question.type);
  const variant = checkedAnswers.toString() === levelsAnswers.toString();

  return saveAnswer(state, variant);
};

export const saveAnswerByElement = (state, answer) => {
  const answerSrc = answer.getElementsByTagName(`img`)[0].src;
  const levelsAnswer = levels[state.level].questions.find((level) => level.src === answerSrc).src;
  const variant = levelsAnswer === `paint`;

  return saveAnswer(state, variant);
};
