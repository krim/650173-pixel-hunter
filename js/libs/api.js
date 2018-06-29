import {adaptServerData} from './data-adapter';
import Application from '../application';

const APP_ID = 6501730;

export default class Api {
  loadLevels() {
    return fetch(`https://es.dump.academy/pixel-hunter/questions`).
      then(Api.checkStatus).
      then(Api.convertToJson).
      then((data) => {
        this.levels = adaptServerData(data);
      }).
      then(() => this.loadImages(this.levels));
  }

  static getStatisticUrl(userName) {
    return `https://es.dump.academy/pixel-hunter/stats/${APP_ID}-${userName}`;
  }

  sendResults(userName, data) {
    const requestData = {
      body: JSON.stringify({userName, data}),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(Api.getStatisticUrl(userName), requestData).
      then(Api.checkStatus).
      catch((error) => Application.showError(error));
  }

  loadResults(userName) {
    return window.fetch(Api.getStatisticUrl(userName)).
      then(Api.checkStatus).
      then(Api.convertToJson);
  }

  static checkStatus(response) {
    if (response.ok) {
      return response;
    }

    return `Статус: ${response.status}.`;
  }

  static convertToJson(response) {
    return response.json();
  }

  loadImages(levels) {
    const promises = [];

    for (const images of levels) {
      for (const image of images) {
        promises.push(new Promise((resolve) => {
          const preloadedImage = new Image();

          preloadedImage.onload = () => resolve(preloadedImage.onload = null);
          preloadedImage.onerror = () => {
            preloadedImage.onerror = null;
            Application.showError(`Can't load image: ${image.src}`);
          };

          preloadedImage.src = image.src;
        }));
      }
    }

    return Promise.all(promises);
  }
}
