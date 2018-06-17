import AbstractView from './abstract-view';

export default class RulesView extends AbstractView {
  constructor(data) {
    super();
    this.title = data.title;
    this.description = data.description;
    this.placeholder = data.placeholder;
    this.button = data.button;
  }

  get template() {
    return `
      <div class="rules">
        <h1 class="rules__title">${this.title}</h1>
        <p class="rules__description">${this.description}</p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="${this.placeholder}">
          <button class="rules__button  continue" type="submit" disabled>${this.button}</button>
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
      this.onSubmitButtonClick();
    };

    nameInput.removeEventListener(`input`, nameInputChangeHandler);
    nameInput.addEventListener(`input`, nameInputChangeHandler);
    submitButton.removeEventListener(`click`, submitButtonClickHandler);
    submitButton.addEventListener(`click`, submitButtonClickHandler);
  }

  onSubmitButtonClick() {}
}
