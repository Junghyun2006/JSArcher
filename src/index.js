import {drawCanvas, ctx} from './scripts/canvas';
import {drawUi} from './scripts/ui';
import {moveChar, animate} from './scripts/character';
import {animateArrows} from "./scripts/arrow";
import {animateSlime, slimes} from "./scripts/slime";
import {dungeon, drawDungeon, dungeonImg, dungeonOverlay, drawMap, drawDirection} from "./scripts/dungeon";
import {heart, heartUI} from './scripts/heart';
import {gameOver, instruction, arrowStats, statBars} from './scripts/game'
import {gameMusic} from './scripts/gameMusic'
import {animateSkeleton, skeletons} from "./scripts/skeleton"

 

window.onload = function() {
    const framesPerSecond = 60;
    setInterval(function() {
        ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
        drawCanvas();
        
        if (heartUI.heartCount != 0) {
            drawUi();
            heart();
            drawMap();
            drawDungeon(dungeonImg);
            drawDirection();
            if (skeletons.length > 0) animateSkeleton();
            if (slimes.length > 0) animateSlime(); 
            moveChar();
            animateArrows();
            instruction();
            arrowStats();
            statBars();
        }
        animate();
        if (heartUI.heartCount === 0) {
            gameOver()
            setTimeout(() => {
                window.location.reload(false)
            }, 5000);
        }
        else drawDungeon(dungeonOverlay)
    }, 1000/framesPerSecond);
}

