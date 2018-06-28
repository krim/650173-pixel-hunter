export const TICK_COUNT = 1;

export default class Timer {
  constructor(leftSeconds) {
    if (leftSeconds <= 0) {
      throw new Error(`Seconds should be positive value`);
    }

    this.isFinished = false;
    this.secondsForAnswer = 0;
    this.leftSeconds = leftSeconds;
  }

  tick() {
    if (this.leftSeconds > 0) {
      this.leftSeconds -= TICK_COUNT;
      this.secondsForAnswer += TICK_COUNT;
    } else {
      this.isFinished = true;
    }
  }
}
