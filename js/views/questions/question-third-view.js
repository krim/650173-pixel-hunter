import {PAINT, PHOTO} from '../../data';
import QuestionFormView from './form-view';
import AbstractView from '../abstract-view';

export default class QuestionThirdView extends AbstractView {
  constructor(data, images) {
    super();
    this.titles = data.titles;
    this.questionForm = new QuestionFormView(images);
    this.images = images;
  }

  get template() {
    return `
      <div class="game">
        <p class="game__task">${this.questionTitle(this.images)}</p>
        ${this.questionForm.element.innerHTML}
      </div>
    `;
  }

  bind(el) {
    const gameOptions = el.querySelectorAll(`.game__option`);
    const gameOptionsClickHandler = (object, state) => {
      this.onGameOptionsClick(object, state);
    };

    gameOptions.forEach((it) => it.addEventListener(`click`, (event) => gameOptionsClickHandler(event.target, this.state)));
  }

  questionTitle(questions) {
    return QuestionThirdView.isPaintQuestion(questions) ? this.titles[PAINT] : this.titles[PHOTO];
  }

  static isPaintQuestion(questions) {
    const paintPhotosCount = questions.filter((question) => question.type === PAINT).length;

    return paintPhotosCount === 1;
  }

  onGameOptionsClick(_object, _state) { }
}
