import AbstractView from '../abstract-view';

export default class ErrorModalView extends AbstractView {
  constructor(data, errorDescription) {
    super();
    this._data = data;
    this._errorDescription = errorDescription;
  }

  get template() {
    return `
      <section class="modal-error modal-error__wrap">
        <div class="modal-error__inner">
          <h2 class="modal-error__title">${this._data.title}</h2>
          <p class="modal-error__text">${this._errorDescription}. ${this._data.description}</p>
        </div>
      </section>
    `;
  }
}
