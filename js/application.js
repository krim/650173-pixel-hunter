import {showScreen} from './util';
import IntroScreen from './controllers/intro-screen';
import GreetingScreen from './controllers/greeting-screen';
import RulesScreen from './controllers/rules-screen';
import GameScreen from './controllers/game-screen';
import StatsScreen from './controllers/stats-screen';
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
    const model = new GameModel(userName);
    const gameScreen = new GameScreen(model);

    gameScreen.startGame();
  }

  static showStats(stats) {
    const statistics = new StatsScreen(stats);
    showScreen(statistics.element);
  }
}
