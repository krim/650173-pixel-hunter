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

const firstQuestionType = (images, screen) => {
  const gameFirstScreen = new GameFirstView(gameFirstData, images);
  gameFirstScreen.onAnswersChecked = () => {
    const checkedAnswers = document.querySelectorAll(`input:checked`);

    if (checkedAnswers.length === SECOND_QUESTION_ANSWERS_COUNT) {
      screen.stopGame();
      screen.model.saveAnswerByArray(checkedAnswers, screen.model.seconds);
      screen.startGame();
      screen.changeLevel();
    }
  };

  return gameFirstScreen;
};

const secondQuestionType = (images, screen) => {
  const gameSecondScreen = new GameSecondView(gameSecondData, images);
  gameSecondScreen.onAnswersChecked = () => {
    const checkedAnswers = document.querySelectorAll(`input:checked`);
    screen.stopGame();
    screen.model.saveAnswerByArray(checkedAnswers, screen.model.seconds);
    screen.startGame();
    screen.changeLevel();
  };

  return gameSecondScreen;
};

const thirdQuestionType = (images, screen) => {
  const gameThirdScreen = new GameThirdView(gameThirdData, images);
  gameThirdScreen.onGameOptionsClick = (object) => {
    screen.stopGame();
    screen.model.saveAnswerByElement(object, screen.model.seconds);
    screen.startGame();
    screen.changeLevel();
  };

  return gameThirdScreen;
};

export const levelView = (images, screen) => {
  if (images.length === QUESTIONS_TYPES.ONE_IMAGE) {
    return secondQuestionType(images, screen);
  }

  if (images.length === QUESTIONS_TYPES.TWO_IMAGES) {
    return firstQuestionType(images, screen);
  }

  if (images.length === QUESTIONS_TYPES.THREE_IMAGES) {
    return thirdQuestionType(images, screen);
  }

  return true;
};
