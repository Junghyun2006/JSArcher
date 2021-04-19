import {ctx, canvas} from './canvas';
import {uiSideGap, dungeonHeight } from './ui';
import {dungeon, map} from './dungeon';
import {slimes, createSlimes } from './slime';
import {heartUI} from './heart';
import {animateChest} from './chest'
import { arrows } from './arrow';


class Char {
    constructor() {
        this.x = (canvas.width * .1);
        this.y = (canvas.height * .6);
        this.width = 100;
        this.height = 100;
        this.scale = (canvas.height*.2);
        this.centerPointX = this.x + this.scale/2;
        this.centerPointY = this.y + this.scale/2;
        this.actualScale = canvas.height*.2/100;
        this.frameX = 0;
        this.frameY = 0;
        this.getHitFrame = 0;
        this.idleFrame = 0;
        this.deathFrame = 0;
        this.speed = (canvas.height*.005);
        this.moving = false;
        this.flip = 'right';
        this.shooting = false;
        this.counter = 0;
        this.clickXPos = 0;
        this.hit = false;
        this.dead = false;
        this.invulnerable = false;
        this.reset = true;
        this.arrowCount = 1;
        this.fireRate = 1;
        this.arrSpeed = 1;
        this.damage = 1;
    }
   
};

export const char = new Char();

const charSprite = new Image(); 
charSprite.src = "src/sprites/Huntress/Sprites/Character/Run.png";

const charShooting = new Image();
charShooting.src = "src/sprites/Huntress/Sprites/Character/Attack.png";

const charGetHit = new Image();
charGetHit.src = "src/sprites/Huntress/Sprites/Character/Get Hit.png"

const charIdle = new Image();
charIdle.src = "src/sprites/Huntress/Sprites/Character/Idle.png"

const charDeath = new Image();
charDeath.src = "src/sprites/Huntress/Sprites/Character/Death.png"

export function drawSprite(img, frame) {
    if (char.flip === 'right') {
        ctx.drawImage(
            img, 
            char.width * frame, 
            0, 
            char.width, 
            char.height, 
            char.x, 
            char.y, 
            (canvas.height*.2), 
            (canvas.height*.2));
    } else if (char.flip != 'right') {
        ctx.save();
        ctx.translate(char.x+(canvas.height*.2), char.y)+(canvas.height*.2);
        ctx.scale(-1, 1);
        ctx.drawImage(
            img, 
            char.width * frame, 
            0, 
            char.width, 
            char.height, 
            0, 
            0, 
            (canvas.height*.2), 
            (canvas.height*.2)) ;
        ctx.restore();
    }
    
}

export function animate(){
    if (char.dead) {
        drawSprite(
            charDeath, 
            char.deathFrame)
    }
    else if (char.hit) {
        drawSprite(
            charGetHit, 
            char.getHitFrame)
    }
    else if (char.shooting) { 
        char.flip = char.clickXPos > char.x ? 'right' : 'left'
        drawSprite(
            charShooting, 
            char.frameY)

        if (char.frameY === 5) char.shooting = false;   
    } else if (char.moving) {
        drawSprite(
            charSprite, 
            char.frameX)
    } else {
         drawSprite(
            charIdle, 
            char.idleFrame)
    }
    handleIdleFrame();
    handleDeathFrame();
    
    
    if (char.counter % (Math.floor(100/char.fireRate)) === 0 && char.arrowCount === 0) char.arrowCount = 1;
    
}


function handleSpriteFrame() {  
    if (char.counter % 5 === 0) {
       if (char.frameX < 7 ) char.frameX++;
       else char.frameX = 0;  
    }    
}

export function handleShootingFrame() {
    if (char.counter % 3 === 0) {
        if (char.frameY < 5) char.frameY++;
        else char.frameY = 0;
    }
}

export function handleGetHitFrame() {
    if (char.counter % 10 === 0) {
        if (char.getHitFrame < 2) {char.getHitFrame++}
        else {
            char.getHitFrame = 0;
            char.hit = false;    
        }
    }
    if (char.invulnerable) {
        char.frameX = 11;
    }
    if (char.counter % 120 === 0) {char.invulnerable = false}
}

export function handleIdleFrame() {
    char.counter+=1;
    char.moving = false;
    if (char.counter % 5 === 0) {
        if (char.idleFrame < 9) {char.idleFrame++}
        else {
            char.idleFrame = 0;  
        }
    }
}

export function handleDeathFrame() {
    char.moving = false;
    if (heartUI.heartCount === 0) {
        char.dead = true
    }

    if (char.counter % 15 === 0) {
        if (char.deathFrame < 9) {char.deathFrame++}
    }
}


const keys = {
    'ArrowUp': false,
    'ArrowDown': false,
    'ArrowLeft' : false,
    'ArrowRight' : false,
    'w': false,
    'a': false,
    's': false,
    'd': false,
};



window.addEventListener("keydown", (e) => {
    e.preventDefault();
    keys[e.key] = true;
    // char.moving = true;
    console.log(e.key)
});

window.addEventListener("keyup", (e) => {
    e.preventDefault();
    keys[e.key] = false;
    // char.moving = false;
});

export function moveChar() {
    if ((keys['ArrowUp'] || keys["w"]) && (char.y > (canvas.height *0.4 ))) { //- dungeonHeight- 40*char.actualScale
        char.moving = true;
        char.y -= char.speed;
        char.centerPointY -= char.speed;
        handleSpriteFrame()}
    if ((keys['ArrowDown'] || keys["s"]) && (char.y < (canvas.height-(uiSideGap)-75*char.actualScale))) {
        char.moving = true;
        char.y += char.speed;
        char.centerPointY += char.speed;
        handleSpriteFrame()} 
    if ((keys['ArrowLeft'] || keys["a"]) && (char.x > ((uiSideGap)-30*char.actualScale))) {
        char.moving = true;
        char.x -= char.speed;
        // if (dungeon.frameX != 0) dungeon.frameX -= 1;
        char.centerPointX -= char.speed;
        char.flip = 'left'
        handleSpriteFrame()} 
    if ((keys['ArrowRight'] || keys["d"]) && (char.x < (canvas.width-(uiSideGap)-70*char.actualScale))) {
        char.moving = true;
        char.x += char.speed;
        char.centerPointX += char.speed;
        if (dungeon.frameX < 490 && slimes.length < 1 && dungeon.chest === false) {
            dungeon.frameX += 1;
            map.location += (dungeon.frameX * canvas.width*.244 * .0000047736)
        } 
        char.flip = 'right';
        handleSpriteFrame()} 
    if (keys[' ']) {
        if (char.flip === 'right' && (char.x > ((uiSideGap)-30*char.actualScale)) && (char.x < (canvas.width-(uiSideGap)-70*char.actualScale)) ) {
            char.x += char.speed*4
            char.centerPointX += char.speed*4
        } else if (char.flip != 'right' && (char.x > ((uiSideGap)-30*char.actualScale)) && (char.x < (canvas.width-(uiSideGap)-70*char.actualScale))) {
            char.x -= char.speed*4
            char.centerPointX -= char.speed*4
        } 
    }
}

