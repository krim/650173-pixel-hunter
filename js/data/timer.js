export const timerObject = (seconds) => {
  const timer = {
    tick() {
      if (this.leftSeconds > 0) {
        this.leftSeconds -= 1;
      } else {
        this.isFinished = true;

        return `finished`;
      }

      return true;
    },
    leftSeconds: seconds,
    isFinished: false
  };

  return timer;
};

export const createTimer = (seconds) => {
  if (typeof seconds !== `number`) {
    throw new TypeError(`Seconds should be of type number`);
  }

  if (seconds <= 0) {
    throw new Error(`Seconds should be positive value`);
  }

  return timerObject(seconds);
};
