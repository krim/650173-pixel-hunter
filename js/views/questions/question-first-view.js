import QuestionFormView from './form-view';
import AbstractView from '../abstract-view';

export default class QuestionFirstView extends AbstractView {
  constructor(data, images) {
    super();
    this.title = data.title;
    this.questionForm = new QuestionFormView(images);
    this._blockClass = `game`;
  }

  get template() {
    return `
      <p class="game__task">${this.title}</p>
      ${this.questionForm.element.innerHTML}
    `;
  }

  bind(el) {
    const gameForm = el.querySelector(`.game__content`);
    const answersCheckedHandler = () => {
      this.onAnswersChecked();
    };

    gameForm.addEventListener(`change`, answersCheckedHandler);
  }

  onAnswersChecked() { }
}
