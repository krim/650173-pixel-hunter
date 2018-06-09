export const BASE_LEFT_LIVES = 3;
export const QUESTIONS_COUNT = 10;
export const initialState = {
  level: 0,
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
