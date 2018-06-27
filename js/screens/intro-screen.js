import {introData} from '../data';
import IntroView from '../views/intro-view';
import Application from '../application';

export default class IntroScreen {
  constructor() {
    this._view = new IntroView(introData);
  }

  init() {
    this._view.onIntroAsteriskClick = () => Application.showGreeting();
  }

  get element() {
    return this._view.element;
  }
}
