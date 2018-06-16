import {statsBlockElement} from '../elements/stats';
import {questionsFormElement} from '../elements/questions/form';
import AbstractView from './abstract-view';
import {levels, PAINT, PHOTO} from '../data';
import HeaderView from './header-view';
import FooterView from './footer';

export default class QuestionThirdView extends AbstractView {
  constructor(data, state) {
    super();
    this.titles = data.titles;
    this.state = state;
    this.header = new HeaderView(state);
    this.footer = new FooterView();
  }

  get template() {
    return `
      ${this.header.element.innerHTML}
      <div class="game">
        <p class="game__task">${this.questionTitle(levels[this.state.level])}</p>
        ${questionsFormElement(levels[this.state.level])}
        <div class="stats">${statsBlockElement(this.state.givenAnswers)}</div>
      </div>
      ${this.footer.element.innerHTML}
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
