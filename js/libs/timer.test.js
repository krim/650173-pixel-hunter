import {expect} from 'chai';
import Timer, {TICK_COUNT} from './timer';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

describe(`Timer`, () => {
  it(`should decrease left seconds and increase Seconds for answer after tick`, () => {
    const seconds = getRandomInt(1, 30);
    const timer = new Timer(seconds);

    expect(timer.leftSeconds).to.equal(seconds);
    expect(timer.secondsForAnswer).to.equal(0);

    timer.tick();
    expect(timer.leftSeconds).to.equal(seconds - TICK_COUNT);
    expect(timer.secondsForAnswer).to.equal(TICK_COUNT);
    expect(timer.isFinished).to.equal(false);
  });

  it(`should return finished when timer's left seconds equals 0`, () => {
    const seconds = 1;
    const timer = new Timer(seconds);

    timer.tick();
    expect(timer.leftSeconds).to.equal(0);
    expect(timer.secondsForAnswer).to.equal(1);

    timer.tick();
    expect(timer.isFinished).to.equal(true);
  });

  it(`should not allow seconds below or equal zero`, () => {
    const errorMessage = /Seconds should be positive value/;

    expect(() => new Timer(0)).to.throw(Error, errorMessage);
    expect(() => new Timer(-1)).to.throw(Error, errorMessage);
  });

  it(`should create new timer object`, () => {
    const seconds = 1;

    expect(() => new Timer(seconds)).to.not.throw();

    const timer = new Timer(seconds);
    expect(timer).to.respondTo(`tick`);
    expect(timer.isFinished).to.equal(false);
    expect(timer.leftSeconds).to.equal(seconds);
  });
});
