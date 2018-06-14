// import {statsElement, statsInit, stats} from '../views/stats-view';
import {showSlide} from '../util';
import {levels, gameFirstData, gameSecondData, gameThirdData} from '../data';
import {QUESTIONS_TYPE} from '../elements/questions/question';
// import {GameFirstView} from '../views/question-first-view';
// import {GameSecondView} from '../views/question-second-view';
// import {GameThirdView} from '../views/question-third-view';
import {resizeImage} from './resize_image';

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
  // switch (levels[state.level].length) {
  //   case QUESTIONS_TYPE.ONE_IMAGE:
  //     showSlide(gameSecondElement(state));
  //     gameSecondInit(state);
  //     break;
  //   case QUESTIONS_TYPE.TWO_IMAGES:
  //     showSlide(gameFirstElement(state));
  //     gameFirstInit(state);
  //     break;
  //   case QUESTIONS_TYPE.THREE_IMAGES:
  //     showSlide(gameThirdElement(state));
  //     gameThirdInit(state);
  //     break;
  // }

  resizeImages();
};

export const renderNextLevel = (state) => {
  if (canContinue(state) && isNextLevelExists(state.level)) {
    renderLevel(Object.assign({}, state, {level: state.level + 1}));
  } else {
    showSlide(statsElement(stats, state));
    statsInit();
  }
};
