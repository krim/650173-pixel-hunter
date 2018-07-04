import {
  gameFirstData,
  gameSecondData,
  gameThirdData,
  QuestionTypes
} from '../constants';
import GameFirstView from '../views/questions/question-first-view';
import GameSecondView from '../views/questions/question-second-view';
import GameThirdView from '../views/questions/question-third-view';
import {calculateDimensions} from './calculate-dimensions';

export const resizeImages = () => {
  const images = document.querySelectorAll(`.game__option img`);

  images.forEach((image) => {
    image.onload = () => {
      const newImageDimensions = calculateDimensions(
          {width: image.width, height: image.height},
          {width: image.naturalWidth, height: image.naturalHeight}
      );
      image.height = newImageDimensions.height;
      image.width = newImageDimensions.width;
    };
  });
};

const onAnswerHandler = (screen, answers, saveAnswer) => {
  screen.stopGame();
  saveAnswer(answers, screen.model.secondsForAnswer);
  screen.startGame();
  screen.changeLevel();
};

const firstQuestionType = (images, screen) => {
  const gameFirstScreen = new GameFirstView(gameFirstData, images);

  gameFirstScreen.onAnswersChecked = (checkedAnswers) => {
    onAnswerHandler(screen, checkedAnswers, screen.model.saveAnswerByArray.bind(screen.model));
  };

  return gameFirstScreen;
};

const secondQuestionType = (images, screen) => {
  const gameSecondScreen = new GameSecondView(gameSecondData, images);

  gameSecondScreen.onAnswersChecked = (checkedAnswers) => {
    onAnswerHandler(screen, checkedAnswers, screen.model.saveAnswerByArray.bind(screen.model));
  };

  return gameSecondScreen;
};

const thirdQuestionType = (images, screen) => {
  const gameThirdScreen = new GameThirdView(gameThirdData, images);

  gameThirdScreen.onGameOptionsClick = (object) => {
    onAnswerHandler(screen, object, screen.model.saveAnswerByElement.bind(screen.model));
  };

  return gameThirdScreen;
};

export const levelView = (images, screen) => {
  if (images.length === QuestionTypes.TWO_IMAGES) {
    return firstQuestionType(images, screen);
  }

  if (images.length === QuestionTypes.ONE_IMAGE) {
    return secondQuestionType(images, screen);
  }

  return thirdQuestionType(images, screen);
};
