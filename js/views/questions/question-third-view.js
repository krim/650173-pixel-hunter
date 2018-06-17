import {levels, PAINT, PHOTO} from '../../data';
import StatBlockView from '../stat-block-view';
import QuestionFormView from './form-view';
import AbstractView from '../abstract-view';

export default class QuestionThirdView extends AbstractView {
  constructor(data, state) {
    super();
    this.titles = data.titles;
    this.state = state;
  }

  get template() {
    const statBlock = new StatBlockView(this.state.givenAnswers);
    const questionForm = new QuestionFormView(levels[this.state.level]);

    return `
      <div class="game">
        <p class="game__task">${this.questionTitle(levels[this.state.level])}</p>
        ${questionForm.element.innerHTML}
        <div class="stats">${statBlock.element.innerHTML}</div>
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
