import AbstractView from './abstract-view';

export default class RulesView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    return `
      <div class="rules">
        <h1 class="rules__title">${this._data.title}</h1>
        <p class="rules__description">${this._data.description}</p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="${this._data.placeholder}">
          <button class="rules__button  continue" type="submit" disabled>${this._data.button}</button>
        </form>
      </div>
    `;
  }

  bind(el) {
    const submitButton = el.querySelector(`.rules__button`);
    const nameInput = el.querySelector(`.rules__input`);

    const nameInputChangeHandler = () => {
      submitButton.disabled = nameInput.value.length === 0;
    };

    const submitButtonClickHandler = () => {
      submitButton.removeEventListener(`click`, submitButtonClickHandler);
      this.onSubmitButtonClick(nameInput.value);
    };

    nameInput.addEventListener(`input`, nameInputChangeHandler);
    submitButton.addEventListener(`click`, submitButtonClickHandler);
  }

  onSubmitButtonClick(_userName) {}
}
