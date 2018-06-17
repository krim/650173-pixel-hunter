const mainElement = document.querySelector(`main.central`);
export const showSlide = (klass) => {
  mainElement.innerHTML = ``;
  if (klass.header) {
    mainElement.appendChild(klass.header);
  }
  mainElement.appendChild(klass.element);
};
