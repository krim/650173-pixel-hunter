import {levels, PAINT, PHOTO} from '../data';
import {die} from './levels';
import {isPaintQuestion} from '../views/question-third-view';

const SECONDS_FOR_ANSWER = 15;

export const saveAnswer = (state, variant) => {
  if (!variant) {
    state = die(state);
  }
  state.givenAnswers.push({variant, seconds: SECONDS_FOR_ANSWER});

  return state;
};

export const saveAnswerByArray = (state, answers) => {
  const checkedAnswers = Array.from(answers).map((answer) => answer.value);
  const levelsAnswers = levels[state.level].map((question) => question.type);
  const variant = checkedAnswers.toString() === levelsAnswers.toString();

  return saveAnswer(state, variant);
};

export const saveAnswerByElement = (state, answer) => {
  const answerSrc = answer.getElementsByTagName(`img`)[0].src;
  const questions = levels[state.level];
  const levelsAnswer = questions.find((level) => level.src === answerSrc);
  const questionType = isPaintQuestion(questions) ? PAINT : PHOTO;
  const variant = levelsAnswer.type === questionType;

  return saveAnswer(state, variant);
};
