import {
  initialState,
  introData,
  greetingData,
  rulesData
} from './data';
import {renderLevel} from "./data/levels";
import {showSlide} from './util';
import IntroView from './views/intro-view';
import GreetingView from './views/greeting-view';
import RulesView from './views/rules-view';

const introScreen = new IntroView(introData);
const greetingScreen = new GreetingView(greetingData);
const rulesScreen = new RulesView(rulesData);

introScreen.onIntroAsteriskClick = () => showSlide(greetingScreen);

greetingScreen.onGreetingContinueClick = () => showSlide(rulesScreen);

rulesScreen.onSubmitButtonClick = () => {
  renderLevel(Object.assign({}, initialState, {givenAnswers: []}));
};

showSlide(introScreen);
