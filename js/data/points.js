const LIFE_BONUS_POINTS = 50;
const CORRECT_ANSWER_POINTS = 100;
export const QUESTIONS_COUNT = 10;
export const MAX_SECONDS_FOR_FAST_ANSWER = 10;
export const MIN_SECONDS_FOR_SLOW_ANSWER = 20;
export const GAME_FAILED = -1;

const isFastAnswer = (seconds) => seconds < MAX_SECONDS_FOR_FAST_ANSWER;
const isSlowAnswer = (seconds) => seconds > MIN_SECONDS_FOR_SLOW_ANSWER;

export const calculatePoints = (answers, leftLives) => {
  let points = 0;

  if (answers.length < QUESTIONS_COUNT) {
    return GAME_FAILED;
  }

  answers.forEach((answer) => {
    if (answer.variant) {
      points += CORRECT_ANSWER_POINTS;

      if (isFastAnswer(answer.seconds)) {
        points += LIFE_BONUS_POINTS;
      }

      if (isSlowAnswer(answer.seconds)) {
        points -= LIFE_BONUS_POINTS;
      }
    } else {
      leftLives -= 1;
    }
  });

  if (leftLives > 0) {
    points += leftLives * LIFE_BONUS_POINTS;
  }

  return points;
};
