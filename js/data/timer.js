export const FINISHED = `finished`;
export const TICK_COUNT = 1;
export const MAX_SECONDS = 30;

export const timerObject = (seconds) => {
  const timer = {
    tick() {
      if (this.seconds < MAX_SECONDS) {
        this.seconds += TICK_COUNT;
      } else {
        this.isFinished = true;

        return FINISHED;
      }

      return true;
    },
    seconds,
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
