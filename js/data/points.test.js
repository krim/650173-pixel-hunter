import {expect} from 'chai';
import {calculatePoints} from './points';

describe(`calculatePoints`, () => {
  it(`should return -1 when user answered less than 10 questions`, () => {
    const answers = Array(10);
    const leftLives = 3;

    answers.fill({variant: false, seconds: 10}, 0, 10);

    expect(calculatePoints(answers, leftLives)).to.equal(-1);
  });

  it(`should return 1150 when user answered correctly for 10 questions`, () => {
    const answers = Array(10);
    const leftLives = 3;

    answers.fill({variant: true, seconds: 15}, 0, 10);

    expect(calculatePoints(answers, leftLives)).to.equal(1150);
  });

  it(`should return 1050 when user answered correctly for 8 questions and with 2 errors`, () => {
    const answers = Array(10);
    const leftLives = 3;

    answers.fill({variant: true, seconds: 15}, 0, 8);
    answers.fill({variant: false, seconds: 15}, 8, 10);

    expect(calculatePoints(answers, leftLives)).to.equal(850);
  });

  it(`should return 1500 when user answered correctly and fast for 10 questions`, () => {
    const answers = Array(10);
    const leftLives = 3;

    answers.fill({variant: true, seconds: 5}, 0, 10);

    expect(calculatePoints(answers, leftLives)).to.equal(1650);
  });

  it(`should return 650 when user answered correctly and slow for 10 questions`, () => {
    const answers = Array(10);
    const leftLives = 3;

    answers.fill({variant: true, seconds: 25}, 0, 10);

    expect(calculatePoints(answers, leftLives)).to.equal(650);
  });
});
