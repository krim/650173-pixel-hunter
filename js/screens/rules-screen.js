import {rulesData} from '../constants';
import RulesView from '../views/rules-view';
import Application from '../application';
import HeaderView from '../views/header-view';
import BackButtonView from '../views/back-button-view';
import FooterView from '../views/footer-view';

export default class RulesScreen {
  constructor() {
    this._view = new RulesView(rulesData);
    this._backButton = new BackButtonView();
    this._header = new HeaderView();
    this._footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this._header.element.appendChild(this._backButton.element));
    this.root.appendChild(this._view.element);
    this.root.appendChild(this._footer.element);
  }

  get element() {
    return this.root;
  }

  init() {
    this._view.onSubmitButtonClick = (userName) => Application.showGame(userName);
    this._backButton.onBackButtonClick = () => Application.showGreeting();
  }
}
