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
export const showScreen = (klass) => {
  mainElement.innerHTML = ``;

  const header = new HeaderView();
  const footer = new FooterView();
  const gameStat = new GameStatView(klass.state);
  const backButton = new BackButtonView();
  backButton.onBackButtonClick = () => {
    const greetingScreen = new GreetingView(greetingData);

    initGreetingScreen(greetingScreen);
    showScreen(greetingScreen);
  };

  mainElement.appendChild(header.element);
  const headerElement = mainElement.querySelector(`header`);
  headerElement.appendChild(backButton.element);
  headerElement.appendChild(gameStat.element);
  mainElement.appendChild(klass.element);
  mainElement.appendChild(footer.element);
};

export const showMainScreen = (klass) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(klass.element);
};
