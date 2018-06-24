const mainElement = document.querySelector(`main.central`);
export const showScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};
