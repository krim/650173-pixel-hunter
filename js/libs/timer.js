export const FINISHED = `finished`;
export const TICK_COUNT = 1;
export const MAX_SECONDS = 30;
export const INITIAL_SECONDS = 0;

export default class Timer {
  constructor(maxSeconds) {
    if (maxSeconds <= 0) {
      throw new Error(`Seconds should be positive value`);
    }

    this._maxSeconds = maxSeconds;
    this.isFinished = false;
    this.seconds = INITIAL_SECONDS;
  }

  tick() {
    if (this.seconds < this._maxSeconds) {
      this.seconds += TICK_COUNT;
    } else {
      this.isFinished = true;

      return FINISHED;
    }

    return true;
  }
}
