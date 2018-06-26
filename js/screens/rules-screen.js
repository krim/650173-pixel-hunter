import {rulesData} from '../data';
import RulesView from '../views/rules-view';
import Application from '../application';
import HeaderView from '../views/header-view';
import BackButtonView from '../views/back-button-view';
import FooterView from '../views/footer-view';

export default class RulesScreen {
  constructor() {
    this.view = new RulesView(rulesData);
    this.backButton = new BackButtonView();
    this.header = new HeaderView();
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element.appendChild(this.backButton.element));
    this.root.appendChild(this.view.element);
    this.root.appendChild(this.footer.element);
  }

  init() {
    this.view.onSubmitButtonClick = (userName) => Application.showGame(userName);
    this.backButton.onBackButtonClick = () => Application.showGreeting();
  }

  get element() {
    return this.root;
  }
}
