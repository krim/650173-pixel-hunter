import {showScreen} from './util';
import IntroScreen from './screens/intro-screen';
import GreetingScreen from './screens/greeting-screen';
import RulesScreen from './screens/rules-screen';
import GameScreen from './screens/game-screen';
import StatsScreen from './screens/stats-screen';
import GameModel from './models/game-model';

export default class Application {
  static showIntro() {
    const intro = new IntroScreen();
    intro.init();

    showScreen(intro.element);
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
    const gameModel = new GameModel(userName);
    const gameScreen = new GameScreen(gameModel);

    gameScreen.init();
    showScreen(gameScreen.element);
    gameScreen.startGame();
  }

  static showStats(state) {
    const statistics = new StatsScreen(state);

    statistics.init();
    showScreen(statistics.element);
  }
}
