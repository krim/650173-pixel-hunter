import {greetingData} from '../constants';
import GreetingView from '../views/greeting-view';
import FooterView from '../views/footer-view';
import Application from '../application';

export default class GreetingScreen {
  constructor() {
    this._view = new GreetingView(greetingData);
    this._footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this._view.element);
    this.root.appendChild(this._footer.element);
  }

  get element() {
    return this.root;
  }

  init() {
    this._view.onGreetingContinueClick = () => Application.showRules();
  }

  static fadeInElement(greetingElement) {
    greetingElement.querySelector(`.greeting`).classList.add(`show-me`);
  }
}
