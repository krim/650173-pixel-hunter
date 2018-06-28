import {calculatePoints, Points, GAME_FAILED} from '../libs/points';

import {GameParams} from '../constants';
import AbstractView from './abstract-view';
import StatBlockView from './stat-block-view';

export default class StatsView extends AbstractView {
  constructor(data, state, results) {
    super();
    this._data = data;
    this._state = state;
    this._statistic = results.map((result) => result.data);
  }

  get template() {
    return `
      <div class="result">
        <h1>${this.statTitle(this._state)}</h1>
        ${this._statistic.map((result, index) => this.statTable(result, index)).join(``)}
      </div>
    `;
  }

  bonusBlock(bonusPoints, pointsCount, type) {
    return bonusPoints.count === 0 ? `` : `
      <tr>
        <td></td>
        <td class="result__extra">${this._data.bonusBlocks[type].title}</td>
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
        <td class="result__points">×&nbsp;${Points.CORRECT_ANSWER_BONUS}</td>
        <td class="result__total">${calculatedPoints.rightAnswerPoints.points}</td>
      </tr>
      ${this.bonusBlock(calculatedPoints.fastBonusPoints, Points.FAST_BONUS, `fast`)}
      ${this.bonusBlock(calculatedPoints.liveBonusPoints, Points.LIFE_BONUS, `alive`)}
      ${this.bonusBlock(calculatedPoints.slowPenaltyPoints, Points.SLOW_PENALTY, `slow`)}
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
        <td colspan="5" class="result__total  result__total--final">${this._data.loserBlock.description}</td>
      </tr>
    `;
  }


  statTable(result, index) {
    const calculatedPoints = calculatePoints(result.givenAnswers, result.leftLives);

    return `
      <table class="result__table">
        ${this.isLose(calculatedPoints) ? this.loserBlock(result.givenAnswers, index) : this.winnerBlock(result.givenAnswers, index, calculatedPoints)}
      </table>
    `;
  }

  statTitle() {
    return this.isLose(this._state) ? this._data.titles.lose : this._data.titles.win;
  }

  isLose(calculatedPoints) {
    return (this._state.givenAnswers.length < GameParams.QUESTIONS_COUNT) ||
      (calculatedPoints && calculatedPoints.pointsSum === GAME_FAILED);
  }
}
