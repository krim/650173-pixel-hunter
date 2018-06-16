import {levels} from '../data';
import HeaderView from './header-view';
import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import AbstractView from './abstract-view';
import FooterView from './footer-view';

export default class QuestionFirstView extends AbstractView {
  constructor(data, state) {
    super();
    this.title = data.title;
    this.state = state;
    this.header = new HeaderView(state);
    this.footer = new FooterView();
  }

  get template() {
    return `
      ${this.header.element.innerHTML}
      <div class="game">
        <p class="game__task">${this.title}</p>
        ${questionsFormElement(levels[this.state.level])}
        <div class="stats">${statsBlockElement(this.state.givenAnswers)}</div>
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
