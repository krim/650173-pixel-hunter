import {expect} from 'chai';
import Timer, {FINISHED, TICK_COUNT, MAX_SECONDS, INITIAL_SECONDS} from './timer';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

describe(`timerObject`, () => {
  it(`should increase seconds after tick`, () => {
    const seconds = getRandomInt(1, MAX_SECONDS);
    const timer = new Timer(seconds);

    expect(timer.seconds).to.equal(INITIAL_SECONDS);

    timer.tick();
    expect(timer.seconds).to.equal(TICK_COUNT);
    expect(timer.isFinished).to.equal(false);
  });

  it(`should return finished when timer's left seconds equals 0`, () => {
    const seconds = 1;
    const timer = new Timer(seconds);

    timer.tick();
    expect(timer.seconds).to.equal(1);
    expect(timer.tick()).to.equal(FINISHED);
    expect(timer.isFinished).to.equal(true);
  });
});

describe(`createTimer`, () => {
  it(`should not allow seconds below or equal zero`, () => {
    const errorMessage = /Seconds should be positive value/;

    expect(() => new Timer(0)).to.throw(Error, errorMessage);
    expect(() => new Timer(-1)).to.throw(Error, errorMessage);
  });

  it(`should create new timer object`, () => {
    const seconds = 30;

    expect(() => new Timer(seconds)).to.not.throw();

    const timer = new Timer(seconds);
    expect(timer).to.respondTo(`tick`);
    expect(timer.isFinished).to.equal(false);
    expect(timer.seconds).to.equal(INITIAL_SECONDS);
  });
});
