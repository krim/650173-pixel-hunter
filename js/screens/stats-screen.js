import StatsView from '../views/stats-view';
import BackButtonView from '../views/back-button-view';
import Application from '../application';
import HeaderView from '../views/header-view';
import FooterView from '../views/footer-view';
import {statsData} from '../data';

export default class StatsScreen {
  constructor(state, results) {
    this._view = new StatsView(statsData, state, results);
    this._backButton = new BackButtonView();
    this._header = new HeaderView();
    this._footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this._header.element.appendChild(this._backButton.element));
    this.root.appendChild(this._view.element);
    this.root.appendChild(this._footer.element);
  }

  init() {
    this._backButton.onBackButtonClick = () => Application.showGreeting();
  }

  get element() {
    return this.root;
  }
}
