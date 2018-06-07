import {expect} from 'chai';
import {beforeEach} from 'mocha';
import {calculatePoints, GAME_FAILED, MAX_SECONDS_FOR_FAST_ANSWER, MIN_SECONDS_FOR_SLOW_ANSWER, QUESTIONS_COUNT} from './points';

const INITIAL_LIVES = 3;
const NORMAL_SPEED_FOR_ANSWER_IN_SECONDS = MAX_SECONDS_FOR_FAST_ANSWER + 1;
const FAST_SPEED_FOR_ANSWER_IN_SECONDS = MAX_SECONDS_FOR_FAST_ANSWER - 1;
const SLOW_SPEED_FOR_ANSWER_IN_SECONDS = MIN_SECONDS_FOR_SLOW_ANSWER + 1;

let answers;
let leftLives;

describe(`calculatePoints`, () => {
  beforeEach(() => {
    answers = Array(QUESTIONS_COUNT);
    leftLives = INITIAL_LIVES;
  });

  it(`should return -1 when user answered less than initial game questions count`, () => {
    const invalidQuestionsCount = QUESTIONS_COUNT - 1;

    answers = Array(invalidQuestionsCount);
    answers.fill({variant: false, seconds: NORMAL_SPEED_FOR_ANSWER_IN_SECONDS}, 0, invalidQuestionsCount);

    expect(calculatePoints(answers, leftLives)).to.equal(GAME_FAILED);
  });

  it(`should return 1150 points when user answered correctly for all questions`, () => {
    const pointsForAllAnswers = 1150;

    answers.fill({variant: true, seconds: NORMAL_SPEED_FOR_ANSWER_IN_SECONDS});

    expect(calculatePoints(answers, leftLives)).to.equal(pointsForAllAnswers);
  });

  it(`should return 850 points when user have 2 errors`, () => {
    const pointsForAllAnswersWithTwoErrors = 850;

    answers.fill({variant: true, seconds: NORMAL_SPEED_FOR_ANSWER_IN_SECONDS}, 0, 8);
    answers.fill({variant: false, seconds: NORMAL_SPEED_FOR_ANSWER_IN_SECONDS}, 8, QUESTIONS_COUNT);

    expect(calculatePoints(answers, leftLives)).to.equal(pointsForAllAnswersWithTwoErrors);
  });

  it(`should return maximum points count`, () => {
    const maximumPoints = 1650;

    answers.fill({variant: true, seconds: FAST_SPEED_FOR_ANSWER_IN_SECONDS});

    expect(calculatePoints(answers, leftLives)).to.equal(maximumPoints);
  });

  it(`should return minimum points for slow answers`, () => {
    const minimumPointsForSlowAnswers = 650;

    answers.fill({variant: true, seconds: SLOW_SPEED_FOR_ANSWER_IN_SECONDS});

    expect(calculatePoints(answers, leftLives)).to.equal(minimumPointsForSlowAnswers);
  });
});
