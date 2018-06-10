export const BASE_LEFT_LIVES = 3;
export const QUESTIONS_COUNT = 10;
export const PAINT = `paint`;
export const PHOTO = `photo`;

export const initialState = Object.freeze({
  level: `level-0`,
  leftLives: 3,
  leftSeconds: 30,
  answers: []
});
export const levels = {
  'level-0': {
    questions: [
      {
        src: `http://placehold.it/705x455`,
        type: `paint`
      }
    ]
  },
  'level-1': {
    questions: [
      {
        src: `http://placehold.it/468x458`,
        type: `paint`
      },
      {
        src: `http://placehold.it/468x458`,
        type: `photo`
      }
    ]
  },
  'level-2': {
    questions: [
      {
        src: `http://placehold.it/705x455`,
        type: `photo`
      }
    ]
  },
  'level-3': {
    questions: [
      {
        src: `http://placehold.it/304x455?1`,
        type: `paint`
      },
      {
        src: `http://placehold.it/304x455?2`,
        type: `photo`
      },
      {
        src: `http://placehold.it/304x455?3`,
        type: `photo`
      }
    ]
  },
  'level-4': {
    questions: [
      {
        src: `http://placehold.it/705x455`,
        type: `photo`
      }
    ]
  },
  'level-5': {
    questions: [
      {
        src: `http://placehold.it/705x455`,
        type: `paint`
      }
    ]
  },
  'level-6': {
    questions: [
      {
        src: `http://placehold.it/304x455?1`,
        type: `paint`
      },
      {
        src: `http://placehold.it/304x455?2`,
        type: `paint`
      },
      {
        src: `http://placehold.it/304x455?3`,
        type: `photo`
      }
    ]
  },
  'level-7': {
    questions: [
      {
        src: `http://placehold.it/705x455`,
        type: `paint`
      }
    ]
  },
  'level-8': {
    questions: [
      {
        src: `http://placehold.it/468x458`,
        type: `paint`
      },
      {
        src: `http://placehold.it/468x458`,
        type: `photo`
      }
    ]
  },
  'level-9': {
    questions: [
      {
        src: `http://placehold.it/468x458`,
        type: `paint`
      },
      {
        src: `http://placehold.it/468x458`,
        type: `photo`
      }
    ]
  }
};
