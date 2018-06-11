export const QUESTIONS_TYPE = {
  ONE_IMAGE: 1,
  TWO_IMAGES: 2,
  THREE_IMAGES: 3
};

export const questionElement = (question, type, index) => {
  let element;

  switch (type) {
    case QUESTIONS_TYPE.ONE_IMAGE:
      element = firstTypeQuestionElement(question, index);
      break;
    case QUESTIONS_TYPE.TWO_IMAGES:
      element = secondTypeQuestionElement(question, index);
      break;
    case QUESTIONS_TYPE.THREE_IMAGES:
      element = thirdTypeQuestionElement(question, index);
      break;
  }

  return element;
};

const secondTypeQuestionElement = (question, index) => `<div class="game__option">
  <img src="${question.src}" alt="${question.src}" width="468" height="458">
  <label class="game__answer game__answer--photo">
    <input name="question${index}" type="radio" value="photo">
    <span>Фото</span>
  </label>
  <label class="game__answer game__answer--paint">
    <input name="question${index}" type="radio" value="paint">
    <span>Рисунок</span>
  </label>
</div>`;

const firstTypeQuestionElement = (question, index) => `<div class="game__option">
  <img src="${question.src}" alt="${question.src}" width="705" height="455">
  <label class="game__answer  game__answer--photo">
    <input name="question${index}" type="radio" value="photo">
    <span>Фото</span>
  </label>
  <label class="game__answer game__answer--wide  game__answer--paint">
    <input name="question${index}" type="radio" value="paint">
    <span>Рисунок</span>
  </label>
</div>`;

const thirdTypeQuestionElement = (question, index) => {
  const selectedClass = index === 1 ? `game__option--selected` : ``;

  return `<div class="game__option ${selectedClass}">
    <img src="${question.src}" alt="${question.src}" width="304" height="455">
  </div>`;
};
