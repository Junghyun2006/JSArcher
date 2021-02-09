import {drawCanvas} from './scripts/canvas';
import {drawUi} from './scripts/ui';
import {animate, moveChar} from './scripts/character';
import {animateArrows} from "./scripts/arrow";

window.onload = function() {
    var framesPerSecond = 30;
    setInterval(function() {
        drawCanvas(),
        drawUi()
        moveChar(),
        animate(),
        animateArrows()
    }, 1000/framesPerSecond);
}
