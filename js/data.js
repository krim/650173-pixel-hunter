export const BASE_LEFT_LIVES = 3;
export const QUESTIONS_COUNT = 10;
export const initialState = {
  level: `level-0`,
  leftLives: 3,
  leftSeconds: 30
};
export const answers = [
  {variant: true, seconds: 1},
  {variant: true, seconds: 15},
  {variant: false, seconds: 10},
  {variant: true, seconds: 25},
  {variant: true, seconds: 29},
  {variant: false, seconds: 10}
];

export const levels = {
  'level-0': {
    questions: [
      {
        src: `http://placehold.it/705x455`,
        alt: `Option 1`
      }
    ]
  },
  'level-1': {
    questions: [
      {
        src: `http://placehold.it/468x458`,
        alt: `Option 1`
      },
      {
        src: `http://placehold.it/468x458`,
        alt: `Option 2`
      }
    ]
  },
  'level-2': {
    questions: [
      {
        src: `http://placehold.it/705x455`,
        alt: `Option 1`
      }
    ]
  },
  'level-3': {
    questions: [
      {
        src: `http://placehold.it/304x455`,
        alt: `Option 1`
      },
      {
        src: `http://placehold.it/304x455`,
        alt: `Option 2`
      },
      {
        src: `http://placehold.it/304x455`,
        alt: `Option 3`
      }
    ]
  },
  'level-4': {
    questions: [
      {
        src: `http://placehold.it/705x455`,
        alt: `Option 1`
      }
    ]
  },
  'level-5': {
    questions: [
      {
        src: `http://placehold.it/705x455`,
        alt: `Option 1`
      }
    ]
  },
  'level-6': {
    questions: [
      {
        src: `http://placehold.it/304x455`,
        alt: `Option 1`
      },
      {
        src: `http://placehold.it/304x455`,
        alt: `Option 2`
      },
      {
        src: `http://placehold.it/304x455`,
        alt: `Option 3`
      }
    ]
  },
  'level-7': {
    questions: [
      {
        src: `http://placehold.it/705x455`,
        alt: `Option 1`
      }
    ]
  },
  'level-8': {
    questions: [
      {
        src: `http://placehold.it/468x458`,
        alt: `Option 1`
      },
      {
        src: `http://placehold.it/468x458`,
        alt: `Option 2`
      }
    ]
  },
  'level-9': {
    questions: [
      {
        src: `http://placehold.it/468x458`,
        alt: `Option 1`
      },
      {
        src: `http://placehold.it/468x458`,
        alt: `Option 2`
      }
    ]
  }
};
