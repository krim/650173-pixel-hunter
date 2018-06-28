import QuestionFormView from './question-form-view';
import AbstractView from '../abstract-view';

export default class QuestionSecondView extends AbstractView {
  constructor(data, images) {
    super();
    this._data = data;
    this._questionForm = new QuestionFormView(images);
    this._blockClass = `game`;
  }

  get template() {
    return `
      <p class="game__task">${this._data.title}</p>
      ${this._questionForm.element.innerHTML}
    `;
  }

  bind(el) {
    const gameForm = el.querySelector(`.game__content`);
    gameForm.addEventListener(`change`, () => this.answersCheckedHandler());
  }

  answersCheckedHandler() {
    this.onAnswersChecked();
  }

  onAnswersChecked() { }
}
