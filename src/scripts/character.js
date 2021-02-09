import {ctx, canvas} from './canvas'
import {uiSideGap, dungeonHeight } from './ui';

export const char = {
    x: (canvas.width * .1),
    y: (canvas.height * .6),
    width: 100,
    height: 100,
    actualScale: canvas.height*.2/100,
    frameX: 0,
    frameY: 0,
    speed: (canvas.height*.02),
    moving: false
};

const charSprite = new Image();
charSprite.src = "src/sprites/Huntress/Sprites/Character/Run.png";

export function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

export function animate(){
    drawSprite(charSprite, char.width * char.frameX, 0, char.width, char.height, char.x, char.y, (canvas.height*.2), (canvas.height*.2))
}

function handleSpriteFrame() {
    if (char.frameX < 7 ) char.frameX++;
    else char.frameX = 0;
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
});

window.addEventListener("keyup", (e) => {
    e.preventDefault();
    keys[e.key] = false;
    // char.moving = false;
});

export function moveChar() {
    if ((keys['ArrowUp'] || keys["w"]) && (char.y > (canvas.height - dungeonHeight- 40*char.actualScale))) {
        char.y -= char.speed;
        handleSpriteFrame()}
    if ((keys['ArrowDown'] || keys["s"]) && (char.y < (canvas.height-(uiSideGap)-75*char.actualScale))) {
        char.y += char.speed;
        handleSpriteFrame()} 
    if ((keys['ArrowLeft'] || keys["a"]) && (char.x > ((uiSideGap)-30*char.actualScale))) {
        char.x -= char.speed;
        handleSpriteFrame()} 
    if ((keys['ArrowRight'] || keys["d"]) && (char.x < (canvas.width-(uiSideGap)-70*char.actualScale))) {
        char.x += char.speed;
        handleSpriteFrame()} 
}


