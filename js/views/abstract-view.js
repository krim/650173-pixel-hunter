const render = (html, blockClass) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = html.trim();
  if (blockClass) {
    wrapper.className = blockClass;
  }

  return wrapper;
};

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  get blockClass() {
    return this._blockClass;
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);

    return this._element;
  }

  set blockClass(value) {
    this._blockClass = value;
  }

  render() {
    return render(this.template, this.blockClass);
  }

  bind(_element) {}
}
