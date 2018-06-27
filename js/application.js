import {showScreen} from './util';
import {errorModalData} from './data';
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
    intro.init();

    showScreen(intro.element);
    api.loadLevels();
  }

  static showGreeting() {
    const greeting = new GreetingScreen();
    greeting.init();

    showScreen(greeting.element);
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
      });
  }

  static showError(description) {
    const errorModal = new ErrorModalView(errorModalData, description);

    showScreen(errorModal.element);
  }
}
