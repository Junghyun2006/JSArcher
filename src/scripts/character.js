import {ctx, canvas} from './canvas'
import {uiSideGap, dungeonHeight } from './ui';
import {dungeon} from './dungeon'
import {slimes} from './slime'

export const char = {
    x: (canvas.width * .1),
    y: (canvas.height * .6),
    width: 100,
    height: 100,
    actualScale: canvas.height*.2/100,
    frameX: 0,
    frameY: 0,
    speed: (canvas.height*.005),
    moving: false,
    flip: 'right',
    shooting: false,
    counter: 0,
    clickXPos: 0
};

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
  
    requestAnimationFrame(animate)
  
    
}

animate()

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
        
        handleSpriteFrame()}
    if ((keys['ArrowDown'] || keys["s"]) && (char.y < (canvas.height-(uiSideGap)-75*char.actualScale))) {
        char.y += char.speed;
        handleSpriteFrame()} 
    if ((keys['ArrowLeft'] || keys["a"]) && (char.x > ((uiSideGap)-30*char.actualScale))) {
        char.x -= char.speed;
        // if (dungeon.frameX != 0) dungeon.frameX -= 1;
        char.flip = 'left'
        handleSpriteFrame()} 
    if ((keys['ArrowRight'] || keys["d"]) && (char.x < (canvas.width-(uiSideGap)-70*char.actualScale))) {
        char.x += char.speed;
        if (dungeon.frameX < 490 && slimes.length < 1) dungeon.frameX += 1;
        char.flip = 'right';
        handleSpriteFrame()} 
    if (keys[' ']) {
        char.flip === 'right' ? char.x += char.speed*4 : char.x -= char.speed*4
    }
}

