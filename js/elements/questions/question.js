export const questionElement = (question, type, index) => {
  let element;

  switch (type) {
    case 1:
      element = firstTypeQuestionElement(question);
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

const secondTypeQuestionElement = (question) => `<div class="game__option">
  <img src="${question.src}" alt="${question.alt}" width="${question.width}" height="${question.height}">
  <label class="game__answer game__answer--photo">
    <input name="${question.name}" type="radio" value="photo">
    <span>Фото</span>
  </label>
  <label class="game__answer game__answer--paint">
    <input name="${question.name}" type="radio" value="paint">
    <span>Рисунок</span>
  </label>
</div>`;

const firstTypeQuestionElement = (question) => `<div class="game__option">
  <img src="${question.src}" alt="${question.alt}" width="${question.width}" height="${question.height}">
  <label class="game__answer  game__answer--photo">
    <input name="${question.name}" type="radio" value="photo">
    <span>Фото</span>
  </label>
  <label class="game__answer game__answer--wide  game__answer--paint">
    <input name="${question.name}" type="radio" value="paint">
    <span>Рисунок</span>
  </label>
</div>`;

const thirdTypeQuestionElement = (question, index) => {
  const selectedClass = index === 1 ? `game__option--selected` : ``;

  return `<div class="game__option ${selectedClass}">
    <img src="${question.src}" alt="${question.alt}" width="${question.width}" height="${question.height}">
  </div>`;
};
