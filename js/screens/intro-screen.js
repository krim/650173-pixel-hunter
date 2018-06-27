import {introData} from '../data';
import IntroView from '../views/intro-view';
import Application from '../application';

export default class IntroScreen {
  constructor() {
    this.view = new IntroView(introData);
  }

  init() {
    this.view.onIntroAsteriskClick = () => Application.showGreeting();
  }

  get element() {
    return this.view.element;
  }
}
