import {expect} from 'chai';
import {createTimer, timerObject, FINISHED, TICK_COUNT} from './timer';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

describe(`timerObject`, () => {
  it(`should decrease left seconds after tick`, () => {
    const seconds = getRandomInt(1, 30);
    const timer = timerObject(seconds);

    expect(timer.leftSeconds).to.equal(seconds);

    timer.tick();
    expect(timer.leftSeconds).to.equal(seconds - TICK_COUNT);
    expect(timer.isFinished).to.equal(false);
  });

  it(`should return finished when timer's left seconds equals 0`, () => {
    const seconds = 1;
    const timer = timerObject(seconds);

    timer.tick();
    expect(timer.leftSeconds).to.equal(0);
    expect(timer.tick()).to.equal(FINISHED);
    expect(timer.isFinished).to.equal(true);
  });
});

describe(`createTimer`, () => {
  it(`should not allow seconds below or equal zero`, () => {
    const errorMessage = /Seconds should be positive value/;

    expect(() => createTimer(0)).to.throw(Error, errorMessage);
    expect(() => createTimer(-1)).to.throw(Error, errorMessage);
  });

  it(`should create new timer object`, () => {
    const seconds = 1;

    expect(() => createTimer(seconds)).to.not.throw();

    const timer = createTimer(seconds);
    expect(timer).to.be.an.instanceof(Object);
    expect(timer).to.respondTo(`tick`);
    expect(timer.isFinished).to.equal(false);
    expect(timer.leftSeconds).to.equal(seconds);
  });
});
