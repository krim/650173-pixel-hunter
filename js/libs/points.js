import {QUESTIONS_COUNT} from '../data';

export const LIFE_BONUS_POINTS = 50;
export const FAST_BONUS_POINTS = 50;
export const SLOW_PENALTY_POINTS = 50;
export const CORRECT_ANSWER_POINTS = 100;
export const MAX_SECONDS_FOR_FAST_ANSWER = 10;
export const MIN_SECONDS_FOR_SLOW_ANSWER = 20;
export const GAME_FAILED = -1;

const INITIAL_POINTS = Object.freeze({count: 0, points: 0});

export const isFastAnswer = (seconds) => seconds < MAX_SECONDS_FOR_FAST_ANSWER;
export const isSlowAnswer = (seconds) => seconds > MIN_SECONDS_FOR_SLOW_ANSWER;

export const calculatePoints = (answers, leftLives) => {
  let rightAnswerPoints = Object.assign({}, INITIAL_POINTS);
  let fastBonusPoints = Object.assign({}, INITIAL_POINTS);
  let slowPenaltyPoints = Object.assign({}, INITIAL_POINTS);
  let liveBonusPoints = Object.assign({}, INITIAL_POINTS);
  let pointsSum;

  answers.forEach((answer) => {
    if (answer.variant) {
      rightAnswerPoints.points += CORRECT_ANSWER_POINTS;
      rightAnswerPoints.count++;

      if (isFastAnswer(answer.seconds)) {
        fastBonusPoints.points += FAST_BONUS_POINTS;
        fastBonusPoints.count++;
      }

      if (isSlowAnswer(answer.seconds)) {
        slowPenaltyPoints.points += SLOW_PENALTY_POINTS;
        slowPenaltyPoints.count++;
      }
    }
  });

  if (leftLives > 0) {
    liveBonusPoints.points = leftLives * LIFE_BONUS_POINTS;
    liveBonusPoints.count = leftLives;
  }

  if (answers.length < QUESTIONS_COUNT) {
    pointsSum = GAME_FAILED;
  } else {
    pointsSum = rightAnswerPoints.points + fastBonusPoints.points + liveBonusPoints.points - slowPenaltyPoints.points;
  }

  return {
    rightAnswerPoints,
    fastBonusPoints,
    slowPenaltyPoints,
    liveBonusPoints,
    pointsSum
  };
};
