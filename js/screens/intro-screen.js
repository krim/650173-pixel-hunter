import {introData} from '../constants';
import IntroView from '../views/intro-view';

export default class IntroScreen {
  constructor() {
    this._view = new IntroView(introData);
  }

  get element() {
    return this._view.element;
  }
}
