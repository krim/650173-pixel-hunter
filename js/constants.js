export const GameParams = {
  LIVES: 3,
  QUESTIONS_COUNT: 10,
  SECONDS_FOR_ANSWER: 30
};

export const Delays = {
  FADEOUT: 2000,
  FADEIN: 10,
  TIMER: 1000
};

export const ImageTypes = {
  PHOTO: `photo`,
  PAINTING: `painting`
};

export const QuestionTypes = {
  ONE_IMAGE: 1,
  TWO_IMAGES: 2,
  THREE_IMAGES: 3
};

export const ImageTitles = {
  PHOTO: `Фото`,
  PAINTING: `Рисунок`
};

export const errorModalData = {
  title: `Произошла ошибка!`,
  description: `Пожалуйста, перезагрузите страницу.`
};

export const confirmModalData = {
  title: `Подтверждение`,
  text: `Вы уверены что хотите начать игру заново?`
};

export const introData = {
  description: `Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`
};

export const greetingData = {
  title: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
  description: `
    Правила игры просты.<br>
    Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
    Задача кажется тривиальной, но не думай, что все так просто.<br>
    Фотореализм обманчив и коварен.<br>
    Помни, главное — смотреть очень внимательно.
  `
};

export const rulesData = {
  title: `Правила`,
  description: `Угадай 10 раз для каждого изображения фото <img
    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
    Фотографиями или рисунками могут быть оба изображения.<br>
    На каждую попытку отводится 30 секунд.<br>
    Ошибиться можно не более 3 раз.<br>
    <br>
    Готовы?`,
  placeholder: `Ваше Имя`,
  button: `Go!`
};

export const gameFirstData = {
  title: `Угадайте для каждого изображения фото или рисунок?`
};

export const gameSecondData = {
  title: `Угадай, фото или рисунок?`
};

export const gameThirdData = {
  titles: {
    [ImageTypes.PAINTING]: `Найдите рисунок среди изображений`,
    [ImageTypes.PHOTO]: `Найдите фото среди изображений`
  }
};

export const statsData = {
  titles: {
    win: `Победа!`,
    lose: `Поражение!`
  },
  bonusBlocks: {
    fast: {
      title: `Бонус за скорость:`
    },
    alive: {
      title: `Бонус за жизни:`
    },
    slow: {
      title: `Штраф за медлительность:`
    }
  },
  loserBlock: {
    description: `FAIL`
  }
};
