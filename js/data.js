export const BASE_LEFT_LIVES = 3;
export const QUESTIONS_COUNT = 10;
export const PAINTING = `painting`;
export const PHOTO = `photo`;

export const QUESTIONS_TYPES = {
  ONE_IMAGE: 1,
  TWO_IMAGES: 2,
  THREE_IMAGES: 3
};

export const IMAGE_TITLES = {
  PHOTO: `Фото`,
  PAINTING: `Рисунок`
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
    [PAINTING]: `Найдите рисунок среди изображений`,
    [PHOTO]: `Найдите фото среди изображений`
  }
};

export const statsData = {
  titles: {
    win: `Победа!`,
    lose: `Поражение!`
  },
  bonusBlocks: {
    'fast': {
      title: `Бонус за скорость:`
    },
    'alive': {
      title: `Бонус за жизни:`
    },
    'slow': {
      title: `Штраф за медлительность:`
    }
  },
  loserBlock: {
    description: `FAIL`
  }
};
