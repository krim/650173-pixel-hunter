import {levels, PAINT, PHOTO} from '../data';
import GameThirdView from '../views/questions/question-third-view';

const SECONDS_FOR_ANSWER = 15;
const INITIAL_GAME = Object.freeze({
  level: 0,
  leftLives: 3,
  seconds: 30,
  givenAnswers: []
});

export default class GameModel {
  constructor(userName) {
    this.userName = userName;
    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
  }

  restart() {
    this._state = Object.assign({}, INITIAL_GAME, {givenAnswers: []});
  }

  nextLevel() {
    this._state = Object.assign({}, this._state, {level: this._state.level + 1});
  }

  isNextLevelExists() {
    return levels[this._state.level + 1];
  }

  canContinue() {
    return this._state.leftLives > 0;
  }

  getCurrentLevel() {
    return levels[this._state.level];
  }

  die() {
    const leftLives = this._state.leftLives - 1;

    this._state = Object.assign({}, this._state, {leftLives});
  }

  saveAnswer(variant) {
    if (!variant) {
      this.die();
    }

    this._state.givenAnswers.push({variant, seconds: SECONDS_FOR_ANSWER});
  }

  saveAnswerByArray(answers) {
    const checkedAnswers = Array.from(answers).map((answer) => answer.value);
    const levelsAnswers = levels[this._state.level].map((question) => question.type);
    const variant = checkedAnswers.toString() === levelsAnswers.toString();

    this.saveAnswer(variant);
  }

  saveAnswerByElement(answer) {
    const answerSrc = answer.getElementsByTagName(`img`)[0].src;
    const questions = levels[this._state.level];
    const levelsAnswer = questions.find((level) => level.src === answerSrc);
    const questionType = GameThirdView.isPaintQuestion(questions) ? PAINT : PHOTO;
    const variant = levelsAnswer.type === questionType;

    this.saveAnswer(variant);
  }
}
