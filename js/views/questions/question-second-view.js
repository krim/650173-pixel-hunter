import QuestionFormView from './form-view';
import AbstractView from '../abstract-view';
import {levels} from '../../data';
import StatBlockView from '../stat-block-view';

export default class QuestionSecondView extends AbstractView {
  constructor(data, state) {
    super();
    this.title = data.title;
    this.state = state;
  }

  get template() {
    const statBlock = new StatBlockView(this.state.givenAnswers);
    const questionForm = new QuestionFormView(levels[this.state.level]);

    return `
      <div class="game">
        <p class="game__task">${this.title}</p>
        ${questionForm.element.innerHTML}
        <div class="stats">${statBlock.element.innerHTML}</div>
      </div>
    `;
  }

  bind(el) {
    const gameForm = el.querySelector(`.game__content`);
    const answersCheckedHandler = () => {
      this.onAnswersChecked();
    };

    gameForm.removeEventListener(`change`, answersCheckedHandler);
    gameForm.addEventListener(`change`, answersCheckedHandler);
  }

  onAnswersChecked() { }
}
