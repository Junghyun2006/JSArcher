import {ctx, canvas} from './canvas'
import {uiSideGap, dungeonHeight } from './ui';
import {dungeon, map} from './dungeon'
import {slimes} from './slime'


class Char {
    constructor() {
        this.x = (canvas.width * .1)
        this.y = (canvas.height * .6)
        this.width = 100
        this.height = 100
        this.scale = (canvas.height*.2)
        this.centerPointX = this.x + this.scale/2
        this.centerPointY = this.y + this.scale/2
        this.actualScale = canvas.height*.2/100
        this.frameX = 0
        this.frameY = 0
        this.speed = (canvas.height*.005)
        this.moving = false
        this.flip = 'right'
        this.shooting = false
        this.counter = 0
        this.clickXPos = 0
    }
   
};

export const char = new Char();

const charSprite = new Image(); // running
charSprite.src = "src/sprites/Huntress/Sprites/Character/Run.png";

const charShooting = new Image();
charShooting.src = "src/sprites/Huntress/Sprites/Character/Attack.png"

export function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    if (char.flip === 'right') {
        ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    } else if (char.flip != 'right') {
        ctx.save();
        ctx.translate(char.x+(canvas.height*.2), char.y)+(canvas.height*.2);
        ctx.scale(-1, 1);
        ctx.drawImage(img, sX, sY, sW, sH, 0, 0, dW, dH) ;
        ctx.restore();
    }
    
}

export function animate(){

    if (char.shooting) { 
        char.flip = char.clickXPos > char.x ? 'right' : 'left'
        drawSprite(
            charShooting, 
            char.width * char.frameY, 
            0, 
            char.width, 
            char.height, 
            char.x, 
            char.y, 
            (canvas.height*.2), 
            (canvas.height*.2))

        if (char.frameY === 5) char.shooting = false;   
    } else {
        drawSprite(
            charSprite, 
            char.width * char.frameX, 
            0, 
            char.width, 
            char.height, 
            char.x, 
            char.y, 
            (canvas.height*.2), 
            (canvas.height*.2))
    } 
    
}


function handleSpriteFrame() {  
    if (char.counter % 6 === 0) {
       if (char.frameX < 7 ) char.frameX++;
       else char.frameX = 0;  
    }    
}

export function handleShootingFrame() {
    char.counter+=1;
    if (char.counter % 3 === 0) {
        if (char.frameY < 5) char.frameY++;
        else char.frameY = 0;
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
        char.y -= char.speed;
        char.centerPointY -= char.speed;
        handleSpriteFrame()}
    if ((keys['ArrowDown'] || keys["s"]) && (char.y < (canvas.height-(uiSideGap)-75*char.actualScale))) {
        char.y += char.speed;
        char.centerPointY += char.speed;
        handleSpriteFrame()} 
    if ((keys['ArrowLeft'] || keys["a"]) && (char.x > ((uiSideGap)-30*char.actualScale))) {
        char.x -= char.speed;
        // if (dungeon.frameX != 0) dungeon.frameX -= 1;
        char.centerPointX -= char.speed;
        char.flip = 'left'
        handleSpriteFrame()} 
    if ((keys['ArrowRight'] || keys["d"]) && (char.x < (canvas.width-(uiSideGap)-70*char.actualScale))) {
        char.x += char.speed;
        char.centerPointX += char.speed;
        if (dungeon.frameX < 490 && slimes.length < 1) {
            dungeon.frameX += 1;
            map.location += (dungeon.frameX * canvas.width*.244 * .0000047736)
        } 
        char.flip = 'right';
        handleSpriteFrame()} 
    if (keys[' ']) {
        if (char.flip === 'right') {
            char.x += char.speed*4
            char.centerPointX += char.speed*4
        } else {
            char.x -= char.speed*4
            char.centerPointX -= char.speed*4
        } 
    }
}

