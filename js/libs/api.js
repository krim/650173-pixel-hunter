import {adaptServerData} from './data-adapter';
import Application from '../application';

const APP_ID = 6501730;

export default class Api {
  loadLevels() {
    return fetch(`https://es.dump.academy/pixel-hunter/questions`).
      then(this.checkOkStatus).
      then(this.convertToJson).
      then((data) => {
        this.levels = adaptServerData(data);
      }).
      then(() => this.loadImages(this.levels));
  }

  getStatisticUrl(userName) {
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

    return fetch(this.getStatisticUrl(userName), requestData).
      then(this.checkStatus).
      catch((error) => Application.showError(error));
  }

  loadResults(userName) {
    return window.fetch(this.getStatisticUrl(userName)).
      then(this.checkStatus).
      then(this.convertToJson);
  }

  checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
      return `Статус: ${response.status}.`;
    }
  }

  convertToJson(response) {
    return response.json();
  }

  loadImages(levels) {
    const promises = [];

    for (const images of levels) {
      for (const image of images) {
        promises.push(new Promise((resolve) => {
          const preloadedImage = new Image();

          preloadedImage.onload = () => resolve();
          preloadedImage.src = image.src;
        }));
      }
    }

    return Promise.all(promises);
  }
}
