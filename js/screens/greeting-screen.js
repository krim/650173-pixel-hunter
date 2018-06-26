import {greetingData} from '../data';
import GreetingView from '../views/greeting-view';
import FooterView from '../views/footer-view';
import Application from '../application';

export default class GreetingScreen {
  constructor() {
    this.view = new GreetingView(greetingData);
    this.footer = new FooterView();
    this.root = document.createElement(`div`);
    this.root.appendChild(this.view.element);
    this.root.appendChild(this.footer.element);
  }

  init() {
    this.view.onGreetingContinueClick = () => Application.showRules();
  }

  get element() {
    return this.root;
  }
}
