import {drawCanvas} from './scripts/canvas';
import {drawUi} from './scripts/ui';
import {animate, moveChar} from './scripts/character'

window.onload = function() {
    var framesPerSecond = 30;
    setInterval(function() {
        drawCanvas(),
        drawUi()
        moveChar(),
        animate()
    }, 1000/framesPerSecond);
}
