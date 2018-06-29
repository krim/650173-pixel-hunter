import {GameParams} from '../constants';

export const Points = {
  LIFE_BONUS: 50,
  FAST_BONUS: 50,
  SLOW_PENALTY: 50,
  CORRECT_ANSWER_BONUS: 100
};

export const SecondsForAnswer = {
  FAST: 10,
  SLOW: 20
};

export const GAME_FAILED = -1;

const INITIAL_POINTS = Object.freeze({count: 0, points: 0});

export const isFastAnswer = (seconds) => seconds < SecondsForAnswer.FAST;
export const isSlowAnswer = (seconds) => seconds > SecondsForAnswer.SLOW;

export const calculatePoints = (answers, leftLives) => {
  const rightAnswerPoints = Object.assign({}, INITIAL_POINTS);
  const fastBonusPoints = Object.assign({}, INITIAL_POINTS);
  const slowPenaltyPoints = Object.assign({}, INITIAL_POINTS);
  const liveBonusPoints = Object.assign({}, INITIAL_POINTS);
  let pointsSum;

  answers.forEach((answer) => {
    if (answer.variant) {
      rightAnswerPoints.points += Points.CORRECT_ANSWER_BONUS;
      rightAnswerPoints.count++;

      if (isFastAnswer(answer.seconds)) {
        fastBonusPoints.points += Points.FAST_BONUS;
        fastBonusPoints.count++;
      }

      if (isSlowAnswer(answer.seconds)) {
        slowPenaltyPoints.points += Points.SLOW_PENALTY;
        slowPenaltyPoints.count++;
      }
    }
  });

  if (leftLives > 0) {
    liveBonusPoints.points = leftLives * Points.LIFE_BONUS;
    liveBonusPoints.count = leftLives;
  }

  pointsSum = (answers.length < GameParams.QUESTIONS_COUNT) ?
    GAME_FAILED : rightAnswerPoints.points + fastBonusPoints.points + liveBonusPoints.points - slowPenaltyPoints.points;

  return {
    rightAnswerPoints,
    fastBonusPoints,
    slowPenaltyPoints,
    liveBonusPoints,
    pointsSum
  };
};
