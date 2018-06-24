import {adaptServerData} from './data-adapter';

const APP_ID = 650173;

export default class Api {
  loadLevels() {
    fetch(`https://es.dump.academy/pixel-hunter/questions`).
      then(this.checkOkStatus).
      then(this.convertToJson).
      then((data) => {
        this.levels = adaptServerData(data);
      });
  }

  statisticUrl(userName) {
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

    return fetch(this.statisticUrl(userName), requestData).then(this.checkStatus);
  }

  loadResults(userName) {
    return window.fetch(this.statisticUrl(userName)).
      then(this.checkStatus).
      then(this.convertToJson);
  }

  checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }

  convertToJson(response) {
    return response.json();
  }
}
