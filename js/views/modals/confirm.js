import AbstractView from '../abstract-view';

export default class ConfirmModalView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
      <section class="modal-confirm modal-confirm__wrap">
        <form class="modal-confirm__inner">
          <button class="modal-confirm__close" type="button">Закрыть</button>
          <h2 class="modal-confirm__title">${this.data.title}</h2>
          <p class="modal-confirm__text">${this.data.text}</p>
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

    okButton.addEventListener(`click`, () => this.onOkButtonClick());
    cancelButton.addEventListener(`click`, () => this.onCancelButtonClick());
    closeButton.addEventListener(`click`, () => this.onCancelButtonClick());
  }

  onOkButtonClick() { }
  onCancelButtonClick() { }
}
