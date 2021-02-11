import {drawCanvas, ctx} from './scripts/canvas';
import {drawUi} from './scripts/ui';
import {animate, moveChar} from './scripts/character';
import {animateArrows} from "./scripts/arrow";
import {animateSlime} from "./scripts/slime"

window.onload = function() {
    const framesPerSecond = 60;
    setInterval(function() {
        ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
        drawCanvas();
        drawUi();
        moveChar();
        animateArrows();
    }, 1000/framesPerSecond);
}

