import Application from "../application";
import RulesView from "../views/rules-view";
import GameStatView from "../views/game-stat-view";
import BackButtonView from "../views/back-button-view";
import FooterView from "../views/footer-view";
import HeaderView from "../views/header-view";
import {levelView, resizeImages} from '../data/levels';
import {statsData} from "../data";

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.backButton = new BackButtonView();
    this.gameStat = new GameStatView(); // object.state
    this.header = new HeaderView();
    this.content = levelView(this.model.getCurrentLevel())

    this.root = document.createElement(`div`);
    this.root.appendChild(
        this.header.element.
          appendChild(this.backButton.element).
          appendChild(this.gameStat.element)
    );
    this.root.appendChild(this.content.element);
    this.root.appendChild(new FooterView().element);

    this._interval = null;
  }

  init() {
    this.backButton.onBackButtonClick = () => Application.showGreeting();
  }

  get modelObject() {
    return this.model;
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.changeLevel();
  }

  stopGame() {
    clearInterval(this._interval);
  }

  restart(continueGame) {
    if (!continueGame) {
      this.model.restart();
    }
    this.startGame();
  }

  exit() {
    statsData.allAnswers.push(this.model._state.givenAnswers);
    Application.showStats(this.model._state);
  }

  updateHeader() {
    const gameStat = new GameStatView();
    this.root.replaceChild(gameStat.element, this.gameStat.element);
    this.gameStat = gameStat;
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
    resizeImages();
  }

  changeLevel() {
    if (this.model.canContinue() && this.model.isNextLevelExists()) {
      this.model.nextLevel();
    } else {
      this.exit();
    }
    this.updateHeader();

    const level = levelView(this.model.getCurrentLevel(), this);
    this.changeContentView(level);
  }
}
