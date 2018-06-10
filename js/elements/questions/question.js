export const questionElement = (question, type, index) => {
  let element;

  switch (type) {
    case 1:
      element = firstTypeQuestionElement(question, index);
      break;
    case 2:
      element = secondTypeQuestionElement(question, index);
      break;
    case 3:
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
