import Application from "../application";
import GameStatView from "../views/game-stat-view";
import BackButtonView from "../views/back-button-view";
import FooterView from "../views/footer-view";
import {levelView, resizeImages} from '../libs/render-questions';
import StatBlockView from "../views/stat-block-view";
import TimerView from "../views/timer-view";

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this._backButton = new BackButtonView();
    this._gameStat = new GameStatView(this.model.state);
    this._timer = new TimerView(this.model.seconds);

    this.createHeaderElement();
    this._content = this.createContentElement();

    this.root = document.createElement(`div`);
    this.root.appendChild(this._header);
    this.root.appendChild(this._content);
    this.root.appendChild(new FooterView().element);

    this._interval = null;
  }

  init() {
    this._backButton.onBackButtonClick = () => Application.showGreeting();
  }


  get element() {
    return this.root;
  }

  startGame() {
    this.renderLevel();
    this.model.initTimer();

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, 1000);
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
    Application.showStats(this.model.state);
  }

  createHeaderElement() {
    this._header = document.createElement(`header`);
    this._header.className = `header`;

    this._header.appendChild(this._backButton.element);
    this._header.appendChild(this._timer.element);
    this._header.appendChild(this._gameStat.element);
  }

  createContentElement() {
    const statBlock = new StatBlockView(this.model.state.givenAnswers);

    const content = levelView(this.model.getCurrentLevel(), this);
    content.element.append(statBlock.element);

    return content.element;
  }

  updateHeader() {
    const gameStat = new GameStatView(this.model.state);
    const timer = new TimerView(this.model.seconds);

    this._header.replaceChild(timer.element, this._timer.element);
    this._header.replaceChild(gameStat.element, this._gameStat.element);
    this._gameStat = gameStat;
    this._timer = timer;
  }

  updateContentView() {
    const contentElement = this.createContentElement();

    this.root.replaceChild(contentElement, this._content);
    this._content = contentElement;
  }

  renderLevel() {
    this.updateHeader();
    this.updateContentView();
    resizeImages();
  }

  changeLevel() {
    if (this.model.canContinue() && this.model.isNextLevelExists()) {
      this.model.nextLevel();
      this.renderLevel();
    } else {
      this.exit();
    }
  }
}
