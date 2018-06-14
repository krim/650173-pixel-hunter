import {
  calculatePoints,
  LIFE_BONUS_POINTS,
  FAST_BONUS_POINTS,
  SLOW_PENALTY_POINTS,
  CORRECT_ANSWER_POINTS,
  GAME_FAILED
} from '../data/points';
import {backButtonElement, backButtonInit} from '../elements/back_button';
import {statsBlockElement} from '../elements/stats';
import footerElement from '../elements/footer';
import {QUESTIONS_COUNT} from '../data';
import AbstractView from "./abstract-view";

export default class StatsView extends AbstractView {
  constructor(data, state, statistic) {
    super();
    this.data = data;
    this.state = state;
    this.statistic = statistic;
  }

  get template() {
    return `
      <header class="header">
        ${backButtonElement}
      </header>
      <div class="result">
        <h1>${this.statTitle(this.state)}</h1>
        ${this.statistic.allAnswers.map((answers, index) => this.statTable(answers, index, this.state.leftLives)).join(``)}
      </div>
      ${footerElement}
    `;
  }

  bind() {
    this.statistic.allAnswers.push(this.state.givenAnswers);
  }

  bonusBlock(bonusPoints, pointsCount, type) {
    if (bonusPoints.count === 0) {
      return ``;
    } else {
      return `
      <tr>
        <td></td>
        <td class="result__extra">${this.data.bonusBlocks[`type`]}</td>
        <td class="result__extra">${bonusPoints.count}&nbsp;<span class="stats__result stats__result--${type}"></span></td>
        <td class="result__points">×&nbsp;${pointsCount}</td>
        <td class="result__total">${bonusPoints.points}</td>
      </tr>
    `;
    }
  }

  winnerBlock(answers, index, calculatedPoints) {
    return `
      <tr>
        <td class="result__number">${index + 1}.</td>
        <td colspan="2">${statsBlockElement(answers)}</td>
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
    return `
      <tr>
        <td class="result__number">${index + 1}.</td>
        <td>${statsBlockElement(answers)}</td>
        <td class="result__total"></td>
        <td colspan="5" class="result__total  result__total--final">${this.loserBlock.description}</td>
      </tr>
    `;
  }


  statTable(answers, index, state) {
    const calculatedPoints = calculatePoints(answers, state.leftLives);

    return `
      <table class="result__table">
        ${calculatedPoints.pointsSum === GAME_FAILED ? this.loserBlock(answers, index) : this.winnerBlock(answers, index, calculatedPoints)}
      </table>
    `;
  }

  statTitle(state) {
    return state.givenAnswers.length < QUESTIONS_COUNT ? this.titles.lose : this.titles.win;
  }
}
