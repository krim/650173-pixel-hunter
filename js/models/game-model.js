import {ImageTypes, GameParams} from '../constants';
import Api from '../libs/api';
import GameThirdView from '../views/questions/question-third-view';
import Timer from '../libs/timer';

const INITIAL_GAME = Object.freeze({
  level: 0,
  leftLives: GameParams.LIVES,
  seconds: GameParams.SECONDS_FOR_ANSWER,
  givenAnswers: []
});

export default class GameModel {
  constructor(userName, levels) {
    this.userName = userName;
    this.levels = levels;

    this.restart();
  }

  get state() {
    return Object.freeze(this._state);
  }

  get secondsForAnswer() {
    return this._timer.secondsForAnswer;
  }

  get leftSeconds() {
    return this._timer.leftSeconds;
  }

  get isTimerFinished() {
    return this._timer.isFinished;
  }

  initTimer() {
    this._timer = new Timer(GameParams.SECONDS_FOR_ANSWER);
  }

  tick() {
    this._timer.tick();
  }

  getCurrentLevel() {
    return this.levels[this._state.level];
  }

  die() {
    this._state = Object.assign({}, this._state, {leftLives: this._state.leftLives - 1});
  }

  restart() {
    this.initTimer();
    this._state = Object.assign({}, INITIAL_GAME, {givenAnswers: []});
  }

  nextLevel() {
    this._state = Object.assign({}, this._state, {level: this._state.level + 1});
  }

  isNextLevelExists() {
    return this.levels[this._state.level + 1];
  }

  canContinue() {
    return this._state.leftLives >= 0;
  }

  sendResults() {
    const api = new Api();

    return api.sendResults(this.userName, this._state);
  }

  saveAnswer(variant, seconds) {
    if (!variant) {
      this.die();
    }

    this._state.givenAnswers.push({variant, seconds});
  }

  saveAnswerByArray(answers, seconds) {
    const checkedAnswers = Array.from(answers).map((answer) => answer.value);
    const levelsAnswers = this.levels[this._state.level].map((question) => question.type);
    const variant = checkedAnswers.toString() === levelsAnswers.toString();

    this.saveAnswer(variant, seconds);
  }

  saveAnswerByElement(answer, seconds) {
    const answerSrc = answer.src;
    const questions = this.levels[this._state.level];
    const levelsAnswer = questions.find((level) => level.src === answerSrc);
    const questionType = GameThirdView.isPaintQuestion(questions) ? ImageTypes.PAINTING : ImageTypes.PHOTO;
    const variant = levelsAnswer.type === questionType;

    this.saveAnswer(variant, seconds);
  }
}
