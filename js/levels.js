import {statsElement, statsInit} from './slides/stats';
import {showSlide} from './util';
import {levels} from './data';
import {gameFirstElement, gameFirstInit} from './slides/game-1';
import {gameSecondElement, gameSecondInit} from './slides/game-2';
import {gameThirdElement, gameThirdInit} from './slides/game-3';

const nextLevel = (currentLevel) => {
  const nextLevelIndex = Object.keys(levels).indexOf(currentLevel) + 1;

  return Object.keys(levels)[nextLevelIndex];
};

export const renderLevel = (state) => {
  switch (levels[state.level].questions.length) {
    case 1:
      showSlide(gameSecondElement(state));
      gameSecondInit(state);
      break;
    case 2:
      showSlide(gameFirstElement(state));
      gameFirstInit(state);
      break;
    case 3:
      showSlide(gameThirdElement(state));
      gameThirdInit(state);
      break;
  }
};

export const renderNextLevel = (state) => {
  const level = nextLevel(state.level);

  if (level) {
    renderLevel(Object.assign({}, state, {level}));
  } else {
    showSlide(statsElement);
    statsInit();
  }
};
