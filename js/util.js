export const getElementFromTemplate = (htmlCode) => {
  const element = document.createElement(`div`);
  element.innerHTML = htmlCode.trim();

  return element;
};

const mainElement = document.querySelector(`main.central`);
export const showSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};
