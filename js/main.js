'use strict';

const RIGHT_ARROW = 37;
const LEFT_ARROW = 39;

const mainElement = document.querySelector(`main.central`);
const screens = [...document.querySelectorAll(`template`)].map((it) => it.content);

const arrows = document.createElement(`div`);
arrows.innerHTML = `<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`;
document.body.appendChild(arrows);

const [leftArrow, rightArrow] = [...document.querySelectorAll(`.arrows__wrap .arrows__btn`)];

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

let current = 0;
const selectSliderElement = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

const keyboardKeyDownListener = (evt) => {
  if (!evt.ctrlKey && !evt.metaKey) {
    switch (evt.keyCode) {
      case RIGHT_ARROW:
        selectSliderElement(current + 1);
        break;
      case LEFT_ARROW:
        selectSliderElement(current - 1);
        break;
    }
  }
};
const leftArrowClickListener = () => selectSliderElement(current + 1);
const rightArrowClickListener = () => selectSliderElement(current - 1);

document.addEventListener(`keydown`, keyboardKeyDownListener);
leftArrow.addEventListener(`click`, leftArrowClickListener);
rightArrow.addEventListener(`click`, rightArrowClickListener);

selectSliderElement(1);
