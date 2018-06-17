import {greetingData, introData} from './data';
import {showScreen, showMainScreen, initGreetingScreen} from './util';
import IntroView from './views/intro-view';
import GreetingView from './views/greeting-view';

const introScreen = new IntroView(introData);
const greetingScreen = new GreetingView(greetingData);
introScreen.onIntroAsteriskClick = () => showScreen(greetingScreen);

showMainScreen(introScreen);
initGreetingScreen(greetingScreen);
