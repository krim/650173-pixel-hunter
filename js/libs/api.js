import {adaptServerData} from './data-adapter';

export default class Api {
  loadLevels() {
    window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
    then(this.checkStatus).
    then(this.convertToJson).
    then((data) => {
      this.levels = adaptServerData(data);
    });
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
