import AbstractView from '../abstract-view';

export default class ConfirmModalView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    return `
      <section class="modal-confirm modal-confirm__wrap">
        <form class="modal-confirm__inner">
          <button class="modal-confirm__close" type="button">Закрыть</button>
          <h2 class="modal-confirm__title">${this._data.title}</h2>
          <p class="modal-confirm__text">${this._data.text}</p>
          <div class="modal-confirm__btn-wrap">
            <button class="modal-confirm__btn ok-btn">Ок</button>
            <button class="modal-confirm__btn cancel-btn">Отмена</button>
          </div>
        </form>
      </section>
    `;
  }

  bind(el) {
    const okButton = el.querySelector(`.modal-confirm__btn.ok-btn`);
    const cancelButton = el.querySelector(`.modal-confirm__btn.cancel-btn`);
    const closeButton = el.querySelector(`.modal-confirm__close`);

    okButton.addEventListener(`click`, () => this.okButtonClickHandler(okButton));
    cancelButton.addEventListener(`click`, () => this.cancelButtonClickHandler(cancelButton));
    closeButton.addEventListener(`click`, () => this.cancelButtonClickHandler(closeButton));
  }

  okButtonClickHandler(button) {
    button.removeEventListener(`click`, this.okButtonClickHandler);
    this.onOkButtonClick();
  }

  cancelButtonClickHandler(button) {
    button.removeEventListener(`click`, this.cancelButtonClickHandler);
    this.onCancelButtonClick();
  }

  onOkButtonClick() { }
  onCancelButtonClick() { }
}
