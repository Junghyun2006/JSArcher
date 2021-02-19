import {ctx, canvas} from './canvas';
import { drawSprite, animate, char, handleGetHitFrame } from './character';
import {arrows} from './arrow';
import {heart, heartUI} from './heart';

const slime = new Image();
slime.src  = "src/sprites/Slime/SlimeA.png";

class Slime {
    constructor(speed, width, height, frameX, sprite, randomFactor) {
        this.x = (Math.random() * (canvas.width*0.96 - canvas.width*0.5) + canvas.width*0.5);
        this.y = (Math.random() * (canvas.height*0.93 - canvas.height*0.45) + canvas.height*0.45);
        this.scale = (canvas.height*.05);
        this.centerPointX = this.x + this.scale/2; 
        this.centerPointY = this.y + this.scale/2;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.frameX = frameX;
        this.sprite = sprite;
        this.flip = 'right';
        this.counter = 0;
        this.randomCounter = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.moving = false;
        this.stop = 10+this.randomFactor;
        this.xMove = 0;
        this.yMove = 0;
        this.randomFactor = randomFactor*2;
        this.left = this.x;
        this.right = this.x + this.scale;
        this.top = this.y;
        this.bot = this.y + this.scale;
    }

    draw() {
        ctx.drawImage(
            this.sprite,
            this.width * this.frameX,
            0,
            this.width,
            this.height,
            this.x,
            this.y,
            this.scale, 
            this.scale)   
    }

    update() {
        this.draw();
    }

    handleSlimeAnimation() {
        this.counter += 1;
        if (this.counter % 4 === 0) {
            if (Math.abs(this.x - char.x) < 200 && this.frameX < 15) {
                this.frameX++
            } else if (this.frameX < 8) {
                this.frameX++
            } else if (this.frameX === 8 || this.frameX === 15) {
                this.frameX = 0;
            } else {
                this.frameX++
            }
        }      
    }

    handleMovement() {
        this.randomCounter += 1;
        if(this.moving) {
            
            this.x += this.xSpeed;
            this.centerPointX = this.x + this.scale/2
            this.y += this.ySpeed;
            this.centerPointY = this.y + this.scale/2
            this.draw();
            this.stop -= 1;
            if(this.stop <= 0) {
                this.moving = false;
                this.stop = 10+this.randomFactor;
            }
        } else {
            if(this.stop > 0) {
                this.stop -= 1;
                this.draw();
            } else {
                if (Math.abs(char.x - this.x) < canvas.height/4 && Math.abs(char.y - this.y) < canvas.height/4   ) { // && this.randomFactor % 2 === 0
                    this.xMove = char.centerPointX
                    this.yMove = char.centerPointY
                    if (Math.abs(char.x - this.x) < canvas.height/4) {
                        this.xSpeed = (this.xMove - this.x)/30;
                        this.ySpeed = (this.yMove - this.y)/30;
                    } else {
                        this.xSpeed = (this.xMove - this.x)/120;
                        this.ySpeed = (this.yMove - this.y)/120;
                    }
                 
                } else {
                    this.xMove = (Math.random() * (canvas.width*0.932 - canvas.width*0.02) + canvas.width*0.02) + canvas.width*0.05;
                    this.yMove = (Math.random() * (canvas.height*0.9 - canvas.height*0.5) + canvas.height*0.45) + canvas.height*0.045;
                    this.xSpeed = (this.xMove - this.x)/120;
                    this.ySpeed = (this.yMove - this.y)/120;
                }   
               
                this.draw()
                this.stop = 30+this.randomFactor;
                this.moving = true;
            }
        }
       
    }
}

export const slimes = [];

function createSlimes(count){

    let min = Math.ceil(0);
    let max = Math.floor(8);
    Math.floor(Math.random() * (max - min + 1) + min)
    for (let i = 1; i <= count; i++) {
        slimes.push(
            new Slime (
                (canvas.height*.013),
                15.99,
                16,
                (Math.floor(Math.random() * (max-2 - min + 1) + min)),
                slime,
                i
            )
        )
    }
}

createSlimes(5)

export function animateSlime() {
    heartUI.counter++
    slimes.forEach((slime, index) => {
        slime.handleSlimeAnimation()
        slime.handleMovement()
       
        arrows.forEach(arrow => {
            const arrDistance = Math.hypot(arrow.x - slime.centerPointX, arrow.y - slime.centerPointY)
            // console.log(distance)

            if ((arrDistance - slime.scale/2) < 1) {
                slimes.splice(index, 1)
                arrow.hit = true; 
            }
            // Rectangular formula
            // if (slime.x < arrow.right &&
            //     slime.right > arrow.x &&
            //     slime.y < arrow.bot &&
            //     slime.bot > arrow.y) {
            //         console.log('hit!')
            //     }
            })  
        
        const charDistance = Math.hypot(slime.centerPointX - char.centerPointX, slime.centerPointY - char.centerPointY) 
        if ((charDistance - slime.scale/4 - char.scale/4) < 1 && heartUI.heartCount > 0 && heartUI.counter % 15 === 0) {
            heartUI.heartCount -= 1
            char.hit = true;
            char.deathFrame = 0;
        }
        if((charDistance - slime.scale/4 - char.scale/4) < 1) console.log('true')
                
    })
    handleGetHitFrame()
}










