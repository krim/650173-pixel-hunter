import {ImageTypes} from '../../constants';
import QuestionFormView from './question-form-view';
import AbstractView from '../abstract-view';

export default class QuestionThirdView extends AbstractView {
  constructor(data, images) {
    super();
    this._data = data;
    this._questionForm = new QuestionFormView(images);
    this._images = images;
    this._blockClass = `game`;
  }

  get template() {
    return `
      <p class="game__task">${this.questionTitle(this._images)}</p>
      ${this._questionForm.element.innerHTML}
    `;
  }

  bind(el) {
    const gameOptions = el.querySelectorAll(`.game__option`);
    gameOptions.forEach((it) => it.addEventListener(`click`, (event) => this.gameOptionsClickHandler(event.target, this.state)));
  }

  gameOptionsClickHandler(object, state) {
    this.onGameOptionsClick(object, state);
  }

  questionTitle(questions) {
    return QuestionThirdView.isPaintQuestion(questions) ? this._data.titles[ImageTypes.PAINTING] : this._data.titles[ImageTypes.PHOTO];
  }

  static isPaintQuestion(questions) {
    const paintPhotosCount = questions.filter((question) => question.type === ImageTypes.PAINTING).length;

    return paintPhotosCount === 1;
  }

  onGameOptionsClick(_object, _state) { }
}
