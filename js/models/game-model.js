import {PAINTING, PHOTO} from '../data';
import GameThirdView from '../views/questions/question-third-view';
import Timer, {MAX_SECONDS} from "../libs/timer";

const INITIAL_GAME = Object.freeze({
  level: 0,
  leftLives: 3,
  seconds: 30,
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

  initTimer() {
    this._timer = new Timer(MAX_SECONDS);
  }

  get secondsForAnswer() {
    return this._timer.secondsForAnswer;
  }

  get leftSeconds() {
    return this._timer.leftSeconds;
  }

  tick() {
    this._timer.tick();
  }

  get isTimerFinished() {
    return this._timer.isFinished;
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
    return this._state.leftLives > 0;
  }

  getCurrentLevel() {
    return this.levels[this._state.level];
  }

  die() {
    const leftLives = this._state.leftLives - 1;

    this._state = Object.assign({}, this._state, {leftLives});
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
    const answerSrc = answer.getElementsByTagName(`img`)[0].src;
    const questions = this.levels[this._state.level];
    const levelsAnswer = questions.find((level) => level.src === answerSrc);
    const questionType = GameThirdView.isPaintQuestion(questions) ? PAINTING : PHOTO;
    const variant = levelsAnswer.type === questionType;

    this.saveAnswer(variant, seconds);
  }
}
