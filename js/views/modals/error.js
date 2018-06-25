import AbstractView from '../abstract-view';

export default class ErrorModalView extends AbstractView {
  constructor(data, errorDescription) {
    super();
    this.data = data;
    this.errorDescription = errorDescription;
  }

  get template() {
    return `
      <section class="modal-error modal-error__wrap">
        <div class="modal-error__inner">
          <h2 class="modal-error__title">${this.data.title}</h2>
          <p class="modal-error__text">${this.errorDescription}. ${this.data.description}</p>
        </div>
      </section>
    `;
  }
}
