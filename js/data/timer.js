export const FINISHED = `finished`;
export const TICK_COUNT = 1;

export const timerObject = (seconds) => {
  const timer = {
    tick() {
      if (this.leftSeconds > 0) {
        this.leftSeconds -= TICK_COUNT;
      } else {
        this.isFinished = true;

        return FINISHED;
      }

      return true;
    },
    leftSeconds: seconds,
    isFinished: false
  };

  return timer;
};

export const createTimer = (seconds) => {
  if (seconds <= 0) {
    throw new Error(`Seconds should be positive value`);
  }

  return timerObject(seconds);
};
