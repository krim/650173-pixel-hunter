import {
  calculatePoints,
  LIFE_BONUS_POINTS,
  FAST_BONUS_POINTS,
  SLOW_PENALTY_POINTS,
  CORRECT_ANSWER_POINTS,
  GAME_FAILED
} from '../data/points';

import {QUESTIONS_COUNT} from '../data';
import AbstractView from './abstract-view';
import StatBlockView from './stat-block-view';

export default class StatsView extends AbstractView {
  constructor(data, state) {
    super();
    this.data = data;
    this.state = state;
    this.statistic = [state.givenAnswers];
  }

  get template() {
    return `
      <div class="result">
        <h1>${this.statTitle(this.state)}</h1>
        ${this.statistic.map((answers, index) => this.statTable(answers, index)).join(``)}
      </div>
    `;
  }

  bonusBlock(bonusPoints, pointsCount, type) {
    return bonusPoints.count === 0 ? `` : `
      <tr>
        <td></td>
        <td class="result__extra">${this.data.bonusBlocks[`type`]}</td>
        <td class="result__extra">${bonusPoints.count}&nbsp;<span class="stats__result stats__result--${type}"></span></td>
        <td class="result__points">×&nbsp;${pointsCount}</td>
        <td class="result__total">${bonusPoints.points}</td>
      </tr>
    `;
  }

  winnerBlock(answers, index, calculatedPoints) {
    const statBlock = new StatBlockView(answers);

    return `
      <tr>
        <td class="result__number">${index + 1}.</td>
        <td colspan="2">${statBlock.element.innerHTML}</td>
        <td class="result__points">×&nbsp;${CORRECT_ANSWER_POINTS}</td>
        <td class="result__total">${calculatedPoints.rightAnswerPoints.points}</td>
      </tr>
      ${this.bonusBlock(calculatedPoints.fastBonusPoints, FAST_BONUS_POINTS, `fast`)}
      ${this.bonusBlock(calculatedPoints.liveBonusPoints, LIFE_BONUS_POINTS, `alive`)}
      ${this.bonusBlock(calculatedPoints.slowPenaltyPoints, SLOW_PENALTY_POINTS, `slow`)}
      <tr>
       <td colspan="5" class="result__total  result__total--final">${calculatedPoints.pointsSum}</td>
      </tr>
    `;
  }

  loserBlock(answers, index) {
    const statBlock = new StatBlockView(answers);

    return `
      <tr>
        <td class="result__number">${index + 1}.</td>
        <td>${statBlock.element.innerHTML}</td>
        <td class="result__total"></td>
        <td colspan="5" class="result__total  result__total--final">${this.data.loserBlock.description}</td>
      </tr>
    `;
  }


  statTable(answers, index) {
    const calculatedPoints = calculatePoints(answers, this.state.leftLives);

    return `
      <table class="result__table">
        ${this.isLose(calculatedPoints) ? this.loserBlock(answers, index) : this.winnerBlock(answers, index, calculatedPoints)}
      </table>
    `;
  }

  statTitle() {
    return this.isLose(this.state) ? this.data.titles.lose : this.data.titles.win;
  }

  isLose(calculatedPoints) {
    return (this.state.givenAnswers.length < QUESTIONS_COUNT) ||
      (calculatedPoints && calculatedPoints.pointsSum === GAME_FAILED);
  }
}
