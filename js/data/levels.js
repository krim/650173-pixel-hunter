import {statsElement, statsInit, stats} from '../slides/stats';
import {showSlide} from '../util';
import {levels} from '../data';
import {QUESTIONS_TYPE} from '../elements/questions/question';
import {gameFirstElement, gameFirstInit} from '../slides/question-1';
import {gameSecondElement, gameSecondInit} from '../slides/question-2';
import {gameThirdElement, gameThirdInit} from '../slides/question-3';

const nextLevel = (currentLevel) => {
  const nextLevelIndex = Object.keys(levels).indexOf(currentLevel) + 1;

  return Object.keys(levels)[nextLevelIndex];
};

export const canContinue = (state) => state.leftLives > 0;
export const die = (state) => {
  const leftLives = state.leftLives - 1;

  return Object.assign({}, state, {leftLives});
};

export const renderLevel = (state) => {
  switch (levels[state.level].questions.length) {
    case QUESTIONS_TYPE.ONE_IMAGE:
      showSlide(gameSecondElement(state));
      gameSecondInit(state);
      break;
    case QUESTIONS_TYPE.TWO_IMAGES:
      showSlide(gameFirstElement(state));
      gameFirstInit(state);
      break;
    case QUESTIONS_TYPE.THREE_IMAGES:
      showSlide(gameThirdElement(state));
      gameThirdInit(state);
      break;
  }
};

export const renderNextLevel = (state) => {
  const level = nextLevel(state.level);

  if (canContinue(state) && level) {
    renderLevel(Object.assign({}, state, {level}));
  } else {
    showSlide(statsElement(stats, state));
    statsInit();
  }
};
