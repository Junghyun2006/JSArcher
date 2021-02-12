import {drawCanvas, ctx} from './scripts/canvas';
import {drawUi} from './scripts/ui';
import {moveChar, animate} from './scripts/character';
import {animateArrows} from "./scripts/arrow";
import {animateSlime, slimes} from "./scripts/slime"
import {dungeon, drawDungeon, dungeonImg, dungeonOverlay, drawMap} from "./scripts/dungeon"


window.onload = function() {
    const framesPerSecond = 60;
    setInterval(function() {
        ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
        drawCanvas();
        drawUi();
        drawDungeon(dungeonImg);
        drawMap()
        animate()
        moveChar();
        animateArrows();
        drawDungeon(dungeonOverlay)
    }, 1000/framesPerSecond);
}

