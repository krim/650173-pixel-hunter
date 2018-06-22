import StatsView from "../views/stats-view";
import BackButtonView from "../views/back-button-view";
import Application from "../application";
import HeaderView from "../views/header-view";
import FooterView from "../views/footer-view";
import {statsData} from "../data";

export default class StatsScreen {
  constructor(state) {
    this.view = new StatsView(statsData, state);
    this.backButton = new BackButtonView();
    this.header = new HeaderView();
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element.appendChild(this.backButton.element));
    this.root.appendChild(this.view.element);
    this.root.appendChild(this.footer.element);
  }

  init() {
    this.backButton.onBackButtonClick = () => Application.showGreeting();
  }

  get element() {
    return this.root;
  }
}
