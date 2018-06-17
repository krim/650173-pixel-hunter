import {levels} from '../../data';
import HeaderView from '../header-view';
import StatBlockView from '../stat-block-view';
import QuestionFormView from './form-view';
import AbstractView from '../abstract-view';
import FooterView from '../footer-view';

export default class QuestionFirstView extends AbstractView {
  constructor(data, state) {
    super();
    this.title = data.title;
    this.state = state;
    this.header = new HeaderView(state);
    this.footer = new FooterView();
  }

  get template() {
    const statBlock = new StatBlockView(this.state.givenAnswers);
    const questionForm = new QuestionFormView(levels[this.state.level]);

    return `
      ${this.header.element.innerHTML}
      <div class="game">
        <p class="game__task">${this.title}</p>
        ${questionForm.element.innerHTML}
        <div class="stats">${statBlock.element.innerHTML}</div>
      </div>
      ${this.footer.element.innerHTML}
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
