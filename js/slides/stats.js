import {getElementFromTemplate} from '../util';
import {backButtonElement, backButtonInit} from '../elements/back_button';
import {statsBlockElement} from '../elements/stats';
import footerElement from '../elements/footer';

export const stats = {
  title: `Победа!`,
  allAnswers: [
    [
      {variant: true, seconds: 1},
      {variant: true, seconds: 15},
      {variant: true, seconds: 25}
    ],
    [
      {variant: false, seconds: 1}
    ],
    [
      {variant: true, seconds: 1}
    ]
  ]
};

const statTable = (answers) => {
  return `
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${statsBlockElement(answers)}
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">900</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">50</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">-100</td>
      </tr>
      <tr>
       <td colspan="5" class="result__total  result__total--final">950</td>
      </tr>
    </table>
  `;
};

export const statsInit = () => {
  backButtonInit();
};

export const statsElement = (statistic) => {
  return getElementFromTemplate(`
    <header class="header">
      ${backButtonElement}
    </header>
    <div class="result">
      <h1>${stats.title}</h1>
      ${statistic.allAnswers.map((answers) => statTable(answers)).join(``)}
    </div>
    ${footerElement}
  `);
};
