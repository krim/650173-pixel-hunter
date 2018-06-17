import {showScreen} from '../util';
import {
  levels,
  gameFirstData,
  gameSecondData,
  gameThirdData,
  statsData,
  QUESTIONS_TYPES
} from '../data';
import GameFirstView from '../views/questions/question-first-view';
import GameSecondView from '../views/questions/question-second-view';
import GameThirdView from '../views/questions/question-third-view';
import {resizeImage} from './resize_image';
import {saveAnswerByArray, saveAnswerByElement} from './answers';
import StatsView from '../views/stats-view';

const SECOND_QUESTION_ANSWERS_COUNT = 2;

const isNextLevelExists = (currentLevel) => {
  return levels[currentLevel + 1];
};

export const canContinue = (state) => state.leftLives > 0;
export const die = (state) => {
  const leftLives = state.leftLives - 1;

  return Object.assign({}, state, {leftLives});
};

const resizeImages = () => {
  const images = document.querySelectorAll(`.game__option img`);

  images.forEach((image) => {
    image.onload = () => {
      const newImageDimensions = resizeImage(
          {width: image.width, height: image.height},
          {width: image.naturalWidth, height: image.naturalHeight}
      );
      image.height = newImageDimensions.height;
      image.width = newImageDimensions.width;
    };
  });
};

export const renderLevel = (state) => {
  switch (levels[state.level].length) {
    case QUESTIONS_TYPES.ONE_IMAGE:
      const gameSecondScreen = new GameSecondView(gameSecondData, state);
      gameSecondScreen.onAnswersChecked = () => {
        const checkedAnswers = document.querySelectorAll(`input:checked`);
        const newState = saveAnswerByArray(state, checkedAnswers);

        renderNextLevel(newState);
      };
      showScreen(gameSecondScreen);

      break;
    case QUESTIONS_TYPES.TWO_IMAGES:
      const gameFirstScreen = new GameFirstView(gameFirstData, state);
      gameFirstScreen.onAnswersChecked = () => {
        const checkedAnswers = document.querySelectorAll(`input:checked`);

        if (checkedAnswers.length === SECOND_QUESTION_ANSWERS_COUNT) {
          const newState = saveAnswerByArray(state, checkedAnswers);

          renderNextLevel(newState);
        }
      };
      showScreen(gameFirstScreen);

      break;
    case QUESTIONS_TYPES.THREE_IMAGES:
      const gameThirdScreen = new GameThirdView(gameThirdData, state);
      gameThirdScreen.onGameOptionsClick = (object, gameState) => {
        const newState = saveAnswerByElement(gameState, object);

        renderNextLevel(newState);
      };
      showScreen(gameThirdScreen);

      break;
  }

  resizeImages();
};

export const renderNextLevel = (state) => {
  if (canContinue(state) && isNextLevelExists(state.level)) {
    renderLevel(Object.assign({}, state, {level: state.level + 1}));
  } else {
    statsData.allAnswers.push(state.givenAnswers);
    const statsScreen = new StatsView(statsData, state);
    showScreen(statsScreen);
  }
};
