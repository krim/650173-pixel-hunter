import {ImageTypes} from '../../constants';
import QuestionFormView from './question-form-view';
import AbstractView from '../abstract-view';

export default class QuestionThirdView extends AbstractView {
  constructor(data, images) {
    super();
    this._data = data;
    this._questionForm = new QuestionFormView(images);
    this._images = images;
    this.blockClass = `game`;
  }

  get template() {
    return `
      <p class="game__task">${this.questionTitle(this._images)}</p>
      ${this._questionForm.template}
    `;
  }

  bind(el) {
    const gameOptionImages = el.querySelectorAll(`.game__option img`);
    gameOptionImages.forEach((it) => it.addEventListener(`click`, this.gameOptionsClickHandler.bind(this)));
  }

  gameOptionsClickHandler(event) {
    this.onGameOptionsClick(event.target, this.state);
  }

  removeListeners() {
    const gameOptions = document.querySelectorAll(`.game__option`);
    gameOptions.forEach((it) => it.removeEventListener(`click`, this.gameOptionsClickHandler));
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
