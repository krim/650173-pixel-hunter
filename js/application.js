import {showScreen} from './util';
import {errorModalData, Delays} from './constants';
import IntroScreen from './screens/intro-screen';
import GreetingScreen from './screens/greeting-screen';
import RulesScreen from './screens/rules-screen';
import GameScreen from './screens/game-screen';
import StatsScreen from './screens/stats-screen';
import GameModel from './models/game-model';
import Api from './libs/api';
import ErrorModalView from './views/modals/error';

const api = new Api();

export default class Application {
  static showIntro() {
    const intro = new IntroScreen();
    const introElement = intro.element;

    showScreen(introElement);
    api.loadLevels().
      then(() => IntroScreen.fadeOutElement(introElement)).
      then(() => {
        setTimeout(() => Application.showGreeting(), Delays.FADEOUT);
      }).
      catch((error) => Application.showError(error));
  }

  static showGreeting() {
    const greeting = new GreetingScreen();
    greeting.init();
    const greetingElement = greeting.element;

    showScreen(greetingElement);
    setTimeout(() => GreetingScreen.fadeInElement(greetingElement), Delays.FADEIN);
  }

  static showRules() {
    const rules = new RulesScreen();
    rules.init();

    showScreen(rules.element);
  }

  static showGame(userName) {
    const gameModel = new GameModel(userName, api.levels);
    const gameScreen = new GameScreen(gameModel);

    gameScreen.init();
    showScreen(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(state, userName) {
    api.loadResults(userName).
      then((results) => {
        const statistics = new StatsScreen(state, results);

        statistics.init();
        showScreen(statistics.element);
      }).
      catch((error) => Application.showError(error));
  }

  static showError(description) {
    const errorModal = new ErrorModalView(errorModalData, description);

    showScreen(errorModal.element);
  }
}
