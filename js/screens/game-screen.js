import Application from "../application";
import GameStatView from "../views/game-stat-view";
import BackButtonView from "../views/back-button-view";
import FooterView from "../views/footer-view";
import {levelView, resizeImages} from '../data/levels';
import StatBlockView from "../views/stat-block-view";

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.backButton = new BackButtonView();
    this.gameStat = new GameStatView(this.model.state);

    this.createHeaderElement();
    this._content = this.createContentElement();

    this.root = document.createElement(`div`);
    this.root.appendChild(this._header);
    this.root.appendChild(this._content);
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
    Application.showStats(this.model.state);
  }

  createHeaderElement() {
    this._header = document.createElement(`header`);
    this._header.className = `header`;
    this._header.appendChild(this.backButton.element);
    this._header.appendChild(this.gameStat.element);
  }

  createContentElement() {
    const statBlock = new StatBlockView(this.model.state.givenAnswers);

    const content = levelView(this.model.getCurrentLevel(), this);
    content.element.append(statBlock.element);

    return content.element;
  }

  updateHeader() {
    const gameStat = new GameStatView(this.model.state);
    this._header.replaceChild(gameStat.element, this.gameStat.element);
    this.gameStat = gameStat;
  }

  updateContentView() {
    const contentElement = this.createContentElement();

    this.root.replaceChild(contentElement, this._content);
    this._content = contentElement;
    resizeImages();
  }

  changeLevel() {
    if (this.model.canContinue() && this.model.isNextLevelExists()) {
      this.model.nextLevel();
      this.updateHeader();
      this.updateContentView();
    } else {
      this.exit();
    }
  }
}
