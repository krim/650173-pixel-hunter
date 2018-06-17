import GreetingView from './views/greeting-view';
import {greetingData, initialState, rulesData} from './data';
import FooterView from './views/footer-view';
import HeaderView from './views/header-view';
import BackButtonView from './views/back-button-view';
import GameStatView from './views/game-stat-view';
import RulesView from './views/rules-view';
import {renderLevel} from './data/levels';

export const initGreetingScreen = (greetingScreen) => {
  const rulesScreen = new RulesView(rulesData);

  greetingScreen.onGreetingContinueClick = () => showScreen(rulesScreen);

  rulesScreen.onSubmitButtonClick = () => {
    renderLevel(Object.assign({}, initialState, {givenAnswers: []}));
  };
};

const mainElement = document.querySelector(`main.central`);
export const showScreen = (object, conditions = {header: true, footer: true}) => {
  mainElement.innerHTML = ``;

  if (conditions.header) {
    const header = new HeaderView();
    const gameStat = new GameStatView(object.state);
    const backButton = new BackButtonView();
    backButton.onBackButtonClick = () => {
      const greetingScreen = new GreetingView(greetingData);

      initGreetingScreen(greetingScreen);
      showScreen(greetingScreen, {header: false, footer: true});
    };
    mainElement.appendChild(header.element);
    const headerElement = mainElement.querySelector(`header`);
    headerElement.appendChild(backButton.element);
    headerElement.appendChild(gameStat.element);
  }

  mainElement.appendChild(object.element);

  if (conditions.footer) {
    const footer = new FooterView();
    mainElement.appendChild(footer.element);
  }
};
