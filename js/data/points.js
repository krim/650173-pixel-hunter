const BONUS_POINTS = 50;

const isFastAnswer = (seconds) => seconds < 10;
const isSlowAnswer = (seconds) => seconds > 20;

export const calculatePoints = (answers, leftLives) => {
  let points = 0;

  if (answers.length < 10) {
    return -1;
  }

  answers.forEach((answer) => {
    if (answer.variant === true) {
      points += 100;

      if (isFastAnswer(answer.seconds)) {
        points += BONUS_POINTS;
      }

      if (isSlowAnswer(answer.seconds)) {
        points -= BONUS_POINTS;
      }
    } else {
      leftLives -= 1;
    }
  });

  if (leftLives > 0) {
    points += leftLives * BONUS_POINTS;
  }

  return points;
};
