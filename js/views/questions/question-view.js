import AbstractView from '../abstract-view';
import {QUESTIONS_TYPES, IMAGE_TITLES} from '../../data';

export default class QuestionView extends AbstractView {
  constructor(question, type, index) {
    super();
    this.question = question;
    this.type = type;
    this.index = index;
  }
  get template() {
    let template;

    switch (this.type) {
      case QUESTIONS_TYPES.ONE_IMAGE:
        template = this.firstTypeQuestionElement(this.question, this.index);
        break;
      case QUESTIONS_TYPES.TWO_IMAGES:
        template = this.secondTypeQuestionElement(this.question, this.index);
        break;
      case QUESTIONS_TYPES.THREE_IMAGES:
        template = this.thirdTypeQuestionElement(this.question, this.index);
        break;
    }

    return template;
  }


  firstTypeQuestionElement(question, index) {
    return `
      <div class="game__option">
        <img src="${question.src}" alt="${question.src}" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question${index}" type="radio" value="photo">
          <span>${IMAGE_TITLES.PHOTO}</span>
        </label>
        <label class="game__answer game__answer--wide  game__answer--paint">
          <input name="question${index}" type="radio" value="paint">
          <span>${IMAGE_TITLES.PAINT}</span>
        </label>
      </div>
    `;
  }

  secondTypeQuestionElement(question, index) {
    return `
      <div class="game__option">
        <img src="${question.src}" alt="${question.src}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question${index}" type="radio" value="photo">
          <span>${IMAGE_TITLES.PHOTO}</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${index}" type="radio" value="paint">
          <span>${IMAGE_TITLES.PAINT}</span>
        </label>
      </div>
    `;
}

  thirdTypeQuestionElement(question, index) {
    const selectedClass = index === 1 ? `game__option--selected` : ``;

    return `
      <div class="game__option ${selectedClass}">
        <img src="${question.src}" alt="${question.src}" width="304" height="455">
      </div>
    `;
  };
}
