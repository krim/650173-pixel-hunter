import AbstractView from '../abstract-view';
import {QuestionTypes, ImageTitles, ImageTypes} from '../../constants';

export default class QuestionView extends AbstractView {
  constructor(question, type, index) {
    super();
    this._question = question;
    this._type = type;
    this._index = index;
    this._debugMode = new URLSearchParams(document.location.search).get(`debug`) === `true`;
  }

  get template() {
    if (this._type === QuestionTypes.ONE_IMAGE) {
      return this.firstTypeQuestionElement(this._question, this._index);
    }

    if (this._type === QuestionTypes.TWO_IMAGES) {
      return this.secondTypeQuestionElement(this._question, this._index);
    }

    if (this._type === QuestionTypes.THREE_IMAGES) {
      return this.thirdTypeQuestionElement(this._question, this._index);
    }

    return ``;
  }

  firstTypeQuestionElement(question, index) {
    return `
      <div class="game__option">
        ${this.addDebugImageType(question)}
        <img src="${question.src}" alt="${question.src}" width="705" height="455">
        <label class="game__answer game__answer--photo">
          <input name="question${index}" type="radio" value="${ImageTypes.PHOTO}">
          <span>${ImageTitles.PHOTO}</span>
        </label>
        <label class="game__answer game__answer--wide  game__answer--paint">
          <input name="question${index}" type="radio" value="${ImageTypes.PAINTING}">
          <span>${ImageTitles.PAINTING}</span>
        </label>
      </div>
    `;
  }

  secondTypeQuestionElement(question, index) {
    return `
      <div class="game__option">
        ${this.addDebugImageType(question)}
        <img src="${question.src}" alt="${question.src}" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question${index}" type="radio" value="${ImageTypes.PHOTO}">
          <span>${ImageTitles.PHOTO}</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${index}" type="radio" value="${ImageTypes.PAINTING}">
          <span>${ImageTitles.PAINTING}</span>
        </label>
      </div>
    `;
  }

  thirdTypeQuestionElement(question, index) {
    const selectedClass = index === 1 ? `game__option--selected` : ``;

    return `
      <div class="game__option ${selectedClass}">
        ${this.addDebugImageType(question)}
        <img src="${question.src}" alt="${question.src}" width="304" height="455">
      </div>
    `;
  }

  addDebugImageType(question) {
    return this._debugMode ? `<div class="debug">${question.type}</div>` : ``;
  }
}
