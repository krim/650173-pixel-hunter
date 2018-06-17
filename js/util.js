const mainElement = document.querySelector(`main.central`);
export const showSlide = (klass) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(klass.element);
};
