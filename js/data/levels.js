import {
  gameFirstData,
  gameSecondData,
  gameThirdData,
  QUESTIONS_TYPES
} from '../data';
import GameFirstView from '../views/questions/question-first-view';
import GameSecondView from '../views/questions/question-second-view';
import GameThirdView from '../views/questions/question-third-view';
import {resizeImage} from './resize_image';

const SECOND_QUESTION_ANSWERS_COUNT = 2;

export const resizeImages = () => {
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

export const levelView = (images, screen) => {
  if (images.length === QUESTIONS_TYPES.ONE_IMAGE) {
    const gameSecondScreen = new GameSecondView(gameSecondData, images);
    gameSecondScreen.onAnswersChecked = () => {
      const checkedAnswers = document.querySelectorAll(`input:checked`);
      screen.modelObject.saveAnswerByArray(checkedAnswers);
      screen.changeLevel();
    };

    return gameSecondScreen;
  }

  if (images.length === QUESTIONS_TYPES.TWO_IMAGES) {
    const gameFirstScreen = new GameFirstView(gameFirstData, images);
    gameFirstScreen.onAnswersChecked = () => {
      const checkedAnswers = document.querySelectorAll(`input:checked`);

      if (checkedAnswers.length === SECOND_QUESTION_ANSWERS_COUNT) {
        screen.modelObject.saveAnswerByArray(checkedAnswers);
        screen.changeLevel();
      }
    };

    return gameFirstScreen;
  }

  if (images.length === QUESTIONS_TYPES.THREE_IMAGES) {
    const gameThirdScreen = new GameThirdView(gameThirdData, images);
    gameThirdScreen.onGameOptionsClick = (object) => {
      screen.modelObject.saveAnswerByElement(object);
      screen.changeLevel();
    };

    return gameThirdScreen;
  }
};

// export const renderNextLevel = (state) => {
//   if (canContinue(state) && isNextLevelExists(state.level)) {
//     renderLevel(Object.assign({}, state, {level: state.level + 1}));
//   } else {
//     statsData.allAnswers.push(state.givenAnswers);
//     const statsScreen = new StatsView(statsData, state);
//     showScreen(statsScreen);
//   }
// };
