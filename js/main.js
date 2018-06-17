import {greetingData, introData} from './data';
import {showScreen, initGreetingScreen} from './util';
import IntroView from './views/intro-view';
import GreetingView from './views/greeting-view';

const introScreen = new IntroView(introData);
const greetingScreen = new GreetingView(greetingData);
introScreen.onIntroAsteriskClick = () => showScreen(greetingScreen, {header: false, footer: true});

showScreen(introScreen, {header: false, footer: false});
initGreetingScreen(greetingScreen);
