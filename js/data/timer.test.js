import {expect} from 'chai';
import {createTimer, timerObject} from './timer';

describe(`timerObject`, () => {
  it(`should return 29 when timer init with 30 seconds and tick one time`, () => {
    const seconds = 30;
    const timer = timerObject(seconds);

    expect(timer.leftSeconds).to.equal(seconds);

    timer.tick();
    expect(timer.leftSeconds).to.equal(29);
    expect(timer.isFinished).to.equal(false);
  });

  it(`should return finished when timer's left seconds equals 0`, () => {
    const seconds = 1;
    const timer = timerObject(seconds);

    timer.tick();
    expect(timer.leftSeconds).to.equal(0);
    expect(timer.tick()).to.equal(`finished`);
    expect(timer.isFinished).to.equal(true);
  });
});

describe(`createTimer`, () => {
  it(`should not allow seconds below or equal zero`, () => {
    const errorMessage = /Seconds should be positive value/;

    expect(() => createTimer(0)).to.throw(Error, errorMessage);
    expect(() => createTimer(-1)).to.throw(Error, errorMessage);
  });

  it(`should not allow NaN as seconds`, () => {
    expect(() => createTimer(``)).to.throw(TypeError, /Seconds should be of type number/);
  });

  it(`should create new timer object`, () => {
    expect(() => createTimer(1)).to.not.throw();

    const timer = createTimer(1);
    expect(timer).to.be.an.instanceof(Object);
    expect(timer).to.respondTo(`tick`);
    expect(timer.isFinished).to.equal(false);
    expect(timer.leftSeconds).to.equal(1);
  });
});
