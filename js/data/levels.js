// import {statsElement, statsInit, stats} from '../views/stats-view';
import {showSlide} from '../util';
import {levels, gameFirstData, gameSecondData, gameThirdData, statsData} from '../data';
import {QUESTIONS_TYPE} from '../elements/questions/question';
import GameFirstView from '../views/question-first-view';
import GameSecondView from '../views/question-second-view';
import GameThirdView from '../views/question-third-view';
import {resizeImage} from './resize_image';
import {saveAnswerByArray, saveAnswerByElement} from "./answers";
import StatsView from "../views/stats-view";

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
    case QUESTIONS_TYPE.ONE_IMAGE:
      const gameSecondScreen = new GameSecondView(gameSecondData, state);
      gameSecondScreen.onAnswersChecked = () => {
        const checkedAnswers = document.querySelectorAll(`input:checked`);
        const newState = saveAnswerByArray(state, checkedAnswers);

        renderNextLevel(newState);
      };
      showSlide(gameSecondScreen);

      break;
    case QUESTIONS_TYPE.TWO_IMAGES:
      const gameFirstScreen = new GameFirstView(gameFirstData, state);
      gameFirstScreen.onAnswersChecked = () => {
        const checkedAnswers = document.querySelectorAll(`input:checked`);

        if (checkedAnswers.length === SECOND_QUESTION_ANSWERS_COUNT) {
          const newState = saveAnswerByArray(state, checkedAnswers);

          renderNextLevel(newState);
        }
      };
      showSlide(gameFirstScreen);

      break;
    case QUESTIONS_TYPE.THREE_IMAGES:
      const gameThirdScreen = new GameThirdView(gameThirdData, state);
      gameThirdScreen.onGameOptionsClick = (object, gameState) => {
        const newState = saveAnswerByElement(gameState, object);

        renderNextLevel(newState);
      };
      showSlide(gameThirdScreen);

      break;
  }

  resizeImages();
};

export const renderNextLevel = (state) => {
  if (canContinue(state) && isNextLevelExists(state.level)) {
    renderLevel(Object.assign({}, state, {level: state.level + 1}));
  } else {
    const statsScreen = new StatsView(statsData, state, statistic);
    // showSlide(statsElement(stats, state));
    // statsInit();
  }
};
