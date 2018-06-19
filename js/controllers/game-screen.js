import RulesView from "../views/rules-view";
import GameStatView from "../views/game-stat-view";
import BackButtonView from "../views/back-button-view";
import {rulesData} from "../data";
import FooterView from "../views/footer-view";
import HeaderView from "../views/header-view";

export default class GameScreen {
  constructor(model) {
    this.model = model;
    this.view = new RulesView(rulesData);
    this.backButton = new BackButtonView();
    this.gameStat = new GameStatView(); // object.state
    this.header = new HeaderView();
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(
        this.header.element.
          appendChild(this.backButton.element).
          appendChild(this.gameStat.element)
    );
    this.root.appendChild(this.view.element);
    this.root.appendChild(this.footer.element);
  }

  init() {

  }

  startGame() {

  }
}
