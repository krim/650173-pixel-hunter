export const BASE_LEFT_LIVES = 3;
export const QUESTIONS_COUNT = 10;
export const PAINT = `paint`;
export const PHOTO = `photo`;

export const initialState = Object.freeze({
  level: 0,
  leftLives: 3,
  leftSeconds: 30,
  givenAnswers: []
});

const questionsImages = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,

    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

const questionVariant = (src, type) => {
  return {src, type};
};

export const levels = [
  [
    questionVariant(questionsImages.paintings[0], PAINT)
  ],
  [
    questionVariant(questionsImages.paintings[0], PAINT),
    questionVariant(questionsImages.photos[0], PHOTO)
  ],
  [
    questionVariant(questionsImages.paintings[1], PAINT),
    questionVariant(questionsImages.paintings[2], PAINT),
    questionVariant(questionsImages.photos[1], PHOTO)
  ],
  [
    questionVariant(questionsImages.photos[1], PHOTO),
    questionVariant(questionsImages.photos[2], PHOTO),
    questionVariant(questionsImages.paintings[1], PAINT)
  ],
  [
    questionVariant(questionsImages.paintings[2], PAINT)
  ],
  [
    questionVariant(questionsImages.photos[2], PHOTO)
  ],
  [
    questionVariant(questionsImages.paintings[2], PAINT),
    questionVariant(questionsImages.photos[2], PHOTO)
  ],
  [
    questionVariant(questionsImages.paintings[1], PAINT),
    questionVariant(questionsImages.photos[0], PHOTO)
  ],
  [
    questionVariant(questionsImages.paintings[0], PAINT)
  ],
  [
    questionVariant(questionsImages.photos[0], PHOTO)
  ]
];
