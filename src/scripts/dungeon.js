import {canvas, ctx} from './canvas';
import {slimes, createSlimes} from './slime';
import {createSkeletons, skeletons} from "./skeleton"
import {heartUI} from './heart';
import {animateChest, chester} from './chest';
import {animateDragon, dragonSprite} from './dragon'
import { char } from './character';

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

        if (dungeon.frameX === 172) {
            dungeon.frameX++
            createSkeletons(5)
        }

        if (dungeon.frameX < 175 && dungeon.frameX > 172 && dungeon.chest === false && skeletons.length < 1) {
            dungeon.chest = true
            dungeon.frameX++
        };

        if ( slimes.length < 1 && dungeon.frameX < 3) {
                dungeon.chest = true;
                dungeon.frameX++;
        };

        if (dungeon.frameX === 350) {
            dungeon.frameX++
            createSkeletons(4)
            createSlimes(3)
        }

        if (dungeon.frameX < 353 && dungeon.frameX > 350 && dungeon.chest === false && skeletons.length < 1) {
            dungeon.chest = true
            chester.lastChest = true;
            dungeon.frameX++
        };
        

        animateChest();

        if (dungeon.frameX === 489) {
            dungeon.frameX++
            dragonSprite.alive = true;
            
        }
       

}

export const dungeon = {
    width: 2625,
    height: 1080,
    frameX: 0,
    chest: false
}

export const directionImg = new Image();


export const directionSprite = {
    width: 53,
    height: 32,
    counter: 1,
    frame: 1,
    toggle: 'off'
}

export function drawDirection() {
    directionImg.src = `src/sprites/direction/AR100_nyknck/AR102_nyknck/AR102_0${directionSprite.frame}.png`
    if (directionSprite.toggle === "on"){
            ctx.drawImage(
            directionImg,
            canvas.width * 0.9,
            canvas.height * 0.275,
            canvas.width*.0504,
            canvas.width*.0504 * directionSprite.height / directionSprite.width

        )
        if (directionSprite.counter++ % 10 === 0) directionSprite.frame++
        if (directionSprite.frame === 6) directionSprite.frame = 1;
    }

    if (dungeon.frameX === 3 && dungeon.chest === false) {
        directionSprite.toggle = "on";
    }

    if (dungeon.frameX === 150) directionSprite.toggle = "off";
}


export const map = {
    width: 5888,
    height: 1080,
    location: (canvas.width*.244 * 0.42211)
}

export function drawMap() {
        ctx.drawImage(
        dungeonImg,
        canvas.width * .0205,
        canvas.height * .03875,
        canvas.width*.244,
        canvas.width*.339 * map.height / map.width

    )

     ctx.drawImage(
        dungeonOverlay,
        canvas.width * .02025,
        canvas.height * .03875,
        canvas.width*.244,
        canvas.width*.339 * map.height / map.width

    )
    
    ctx.fillStyle = 'white'
    ctx.fillRect(
        canvas.width * .0205 + map.location,
        canvas.height * .03895,
        canvas.width * .001,
        canvas.width*.337 * map.height / map.width
    )

}



