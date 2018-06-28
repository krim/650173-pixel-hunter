import {expect} from 'chai';
import {beforeEach} from 'mocha';
import {calculatePoints, GAME_FAILED, SecondsForAnswer} from './points';
import {GameParams} from '../constants';

const AnswerSpeed = {
  SLOW: SecondsForAnswer.SLOW + 1,
  NORMAL: SecondsForAnswer.FAST + 1,
  FAST: SecondsForAnswer.FAST - 1
};

let answers;
let leftLives;

describe(`calculatePoints`, () => {
  beforeEach(() => {
    answers = Array(GameParams.QUESTIONS_COUNT);
    leftLives = GameParams.LIVES;
  });

  it(`should return -1 when user answered less than initial game questions count`, () => {
    const invalidQuestionsCount = GameParams.QUESTIONS_COUNT - 1;

    answers = Array(invalidQuestionsCount);
    answers.fill({variant: false, seconds: AnswerSpeed.NORMAL}, 0, invalidQuestionsCount);

    expect(calculatePoints(answers, leftLives).pointsSum).to.equal(GAME_FAILED);
  });

  it(`should return 1150 points when user answered correctly for all questions`, () => {
    const pointsForAllAnswers = 1150;

    answers.fill({variant: true, seconds: AnswerSpeed.NORMAL});

    expect(calculatePoints(answers, leftLives).pointsSum).to.equal(pointsForAllAnswers);
  });

  it(`should return 950 points when user have 2 errors`, () => {
    const pointsForAllAnswersWithTwoErrors = 950;
    const answersWithErrors = 2;
    const rightAnswersCount = GameParams.QUESTIONS_COUNT - answersWithErrors;

    answers.fill({variant: true, seconds: AnswerSpeed.NORMAL}, 0, rightAnswersCount);
    answers.fill({variant: false, seconds: AnswerSpeed.NORMAL}, rightAnswersCount, GameParams.QUESTIONS_COUNT);

    expect(calculatePoints(answers, leftLives).pointsSum).to.equal(pointsForAllAnswersWithTwoErrors);
  });

  it(`should return maximum points count`, () => {
    const maximumPoints = 1650;

    answers.fill({variant: true, seconds: AnswerSpeed.FAST});

    expect(calculatePoints(answers, leftLives).pointsSum).to.equal(maximumPoints);
  });

  it(`should return minimum points for slow answers`, () => {
    const minimumPointsForSlowAnswers = 650;

    answers.fill({variant: true, seconds: AnswerSpeed.SLOW});

    expect(calculatePoints(answers, leftLives).pointsSum).to.equal(minimumPointsForSlowAnswers);
  });
});
