import {getElementFromTemplate} from '../util';
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

export const stats = {
  titles: {
    win: `Победа!`,
    lose: `Поражение!`
  },
  bonusBlocks: {
    'fast': {
      title: `Бонус за скорость:`
    },
    'alive': {
      title: `Бонус за жизни:`
    },
    'slow': {
      title: `Штраф за медлительность:`
    }
  },
  loserBlock: {
    description: `FAIL`
  },
  allAnswers: []
};

const bonusBlock = (bonusPoints, pointsCount, type) => {
  if (bonusPoints.count === 0) {
    return ``;
  } else {
    return `
      <tr>
        <td></td>
        <td class="result__extra">${stats.bonusBlocks[`type`]}</td>
        <td class="result__extra">${bonusPoints.count}&nbsp;<span class="stats__result stats__result--${type}"></span></td>
        <td class="result__points">×&nbsp;${pointsCount}</td>
        <td class="result__total">${bonusPoints.points}</td>
      </tr>
    `;
  }
};


const winnerBlock = (answers, index, calculatedPoints) => {
  return `
    <tr>
      <td class="result__number">${index + 1}.</td>
      <td colspan="2">${statsBlockElement(answers)}</td>
      <td class="result__points">×&nbsp;${CORRECT_ANSWER_POINTS}</td>
      <td class="result__total">${calculatedPoints.rightAnswerPoints.points}</td>
    </tr>
    ${bonusBlock(calculatedPoints.fastBonusPoints, FAST_BONUS_POINTS, `fast`)}
    ${bonusBlock(calculatedPoints.liveBonusPoints, LIFE_BONUS_POINTS, `alive`)}
    ${bonusBlock(calculatedPoints.slowPenaltyPoints, SLOW_PENALTY_POINTS, `slow`)}
    <tr>
     <td colspan="5" class="result__total  result__total--final">${calculatedPoints.pointsSum}</td>
    </tr>
  `;
};

const loserBlock = (answers, index) => {
  return `
    <tr>
      <td class="result__number">${index + 1}.</td>
      <td>${statsBlockElement(answers)}</td>
      <td class="result__total"></td>
      <td colspan="5" class="result__total  result__total--final">${stats.loserBlock.description}</td>
    </tr>
  `;
};


const statTable = (answers, index, state) => {
  const calculatedPoints = calculatePoints(answers, state.leftLives);

  return `
    <table class="result__table">
      ${calculatedPoints.pointsSum === GAME_FAILED ? loserBlock(answers, index) : winnerBlock(answers, index, calculatedPoints)}
    </table>
  `;
};

export const statsInit = () => {
  backButtonInit();
};

const statTitle = (state) => {
  return state.givenAnswers.length < QUESTIONS_COUNT ? stats.titles.lose : stats.titles.win;
};

export const statsElement = (statistic, state) => {
  statistic.allAnswers.push(state.givenAnswers);

  return getElementFromTemplate(`
    <header class="header">
      ${backButtonElement}
    </header>
    <div class="result">
      <h1>${statTitle(state)}</h1>
      ${statistic.allAnswers.map((answers, index) => statTable(answers, index, state.leftLives)).join(``)}
    </div>
    ${footerElement}
  `);
};
