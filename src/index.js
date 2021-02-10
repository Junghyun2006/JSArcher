import {drawCanvas} from './scripts/canvas';
import {drawUi} from './scripts/ui';
import {animate, moveChar} from './scripts/character';
import {animateArrows} from "./scripts/arrow";

window.onload = function() {
    const framesPerSecond = 30;
    setInterval(function() {
        drawCanvas(),
        drawUi()
        moveChar(),
        animateArrows()
    }, 1000/framesPerSecond);
}
