import {drawCanvas, ctx} from './scripts/canvas';
import {drawUi} from './scripts/ui';
import {moveChar} from './scripts/character';
import {animateArrows} from "./scripts/arrow";
import {animateSlime} from "./scripts/slime"
import {drawDungeon, dungeonImg, dungeonOverlay, drawDirection} from "./scripts/dungeon"


window.onload = function() {
    const framesPerSecond = 60;
    setInterval(function() {
        ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
        drawCanvas();
        drawUi();
        drawDungeon(dungeonImg);
        moveChar();
        drawDungeon(dungeonOverlay)
        animateArrows();
    }, 1000/framesPerSecond);
}

