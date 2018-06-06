import {expect} from 'chai';
import {beforeEach} from 'mocha';
import {calculatePoints, GAME_FAILED} from './points';

const INITIAL_LIVES = 3;
const INITIAL_QUESTIONS = 10;
const MAXIMUM_POINTS = 1650;
const MINIMUM_POINT_FOR_SLOW_ANSWERS = 650;
const POINTS_FOR_ALL_ANSWERS = 1150;
const POINTS_FOR_ALL_ANSWERS_WITH_TWO_ERRORS = 850;
const INVALID_QUESTIONS = 9;

let answers;
let leftLives;

describe(`calculatePoints`, () => {
  beforeEach(() => {
    answers = Array(INITIAL_QUESTIONS);
    leftLives = INITIAL_LIVES;
  });

  it(`should return -1 when user answered less than initial game questions count`, () => {
    answers = Array(INVALID_QUESTIONS);
    answers.fill({variant: false, seconds: 10}, 0, INVALID_QUESTIONS);

    expect(calculatePoints(answers, leftLives)).to.equal(GAME_FAILED);
  });

  it(`should return 1150 points when user answered correctly for all questions`, () => {
    answers.fill({variant: true, seconds: 15});

    expect(calculatePoints(answers, leftLives)).to.equal(POINTS_FOR_ALL_ANSWERS);
  });

  it(`should return 850 points when user have 2 errors`, () => {
    answers.fill({variant: true, seconds: 15}, 0, 8);
    answers.fill({variant: false, seconds: 15}, 8, INITIAL_QUESTIONS);

    expect(calculatePoints(answers, leftLives)).to.equal(POINTS_FOR_ALL_ANSWERS_WITH_TWO_ERRORS);
  });

  it(`should return maximum points count`, () => {
    answers.fill({variant: true, seconds: 5});

    expect(calculatePoints(answers, leftLives)).to.equal(MAXIMUM_POINTS);
  });

  it(`should return minimum points for slow answers`, () => {
    answers.fill({variant: true, seconds: 25});

    expect(calculatePoints(answers, leftLives)).to.equal(MINIMUM_POINT_FOR_SLOW_ANSWERS);
  });
});
