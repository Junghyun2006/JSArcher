import {canvas, ctx} from './canvas';
import {slimes} from './slime'

export const dungeonImg = new Image();
dungeonImg.src = "src/images/CrystalCaverns_Midground.png";

export const dungeonOverlay = new Image();
dungeonOverlay.src = "src/images/CrystalCaverns_Foreground.png"

export function drawDungeon(image) {
    
    ctx.drawImage(
        image,
        (canvas.height*.005) * dungeon.frameX,
        0,
        dungeon.width,
        dungeon.height,
        canvas.width * 0.0123,
        canvas.height * 0.196,
        canvas.width * 0.976,
        canvas.height * 0.78
    )
}

export const dungeon = {
    width: 2625,
    height: 1080,
    frameX: 0,
}

export const directionImg = new Image();


export const direction = {
    width: 53,
    height: 32,
    counter: 1,
    frame: 1
}

export function incrementCounter() {
    requestAnimationFrame(incrementCounter)
    if (direction.counter++ % 10 === 0) direction.frame++
}

incrementCounter()

export function drawDirection() {
    directionImg.src = `src/sprites/direction/AR100_nyknck/AR102_nyknck/AR102_0${direction.frame}.png`
    
    ctx.drawImage(
        directionImg,
        canvas.width * 0.9,
        canvas.height * 0.275,
        125,
        125 * direction.height / direction.width

    )
    if (direction.frame === 6) direction.frame = 1;

    

    requestAnimationFrame(drawDirection);  
}

drawDirection()


