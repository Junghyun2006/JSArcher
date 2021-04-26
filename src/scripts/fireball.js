import {ctx, canvas} from './canvas';
import { drawSprite, animate, char, handleGetHitFrame } from './character';
import {heart, heartUI} from './heart';

export class Fireball {
    constructor(speed, width, height, sprite, y) {
        this.x = canvas.width * 0.84;
        this.y = y;
        this.scale = canvas.width * 0.1;
        this.centerPointX = this.x + this.scale/2; 
        this.centerPointY = this.y + this.scale/1.6;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.frame = 1;
        this.sprite = sprite;
        this.counter = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.yPos = 0;
        this.moving = false;
    }

    draw() {
        this.sprite.src = `src/sprites/dragons/small_dragon/Fire_Attack${this.frame}.png`;
        ctx.save();
        ctx.translate(this.x+(this.scale), this.y);
        ctx.scale(-1, 1);
        ctx.drawImage(
                this.sprite,
                0,
                0,
                this.width,
                this.height,
                0,
                0,
                this.scale, 
                this.scale);
        ctx.restore();
    }

    update() {
        this.handleFireballMovement();
        this.handleFireballAnimation();
    }

    handleFireballAnimation() {
        this.draw();
        this.counter += 1;
        if (this.counter % 4 === 0) {
            if (this.frame < 4) this.frame++;
            else (this.frame = 1);      
        }
    }

    handleFireballMovement() {
        this.centerPointX = this.x + this.scale/2
        this.x -= this.speed;
    }
}

export const fireImg = new Image();

export const fireBalls = [];

export function animateFireball() {
    fireBalls.forEach((fireball, i) => {
        fireball.handleFireballAnimation();
        fireball.handleFireballMovement();
        
        const charDistance = Math.hypot(fireball.centerPointX - char.centerPointX, fireball.centerPointY - char.centerPointY) 
        if ((charDistance - fireball.scale/8 - char.scale/8) < 1 && heartUI.heartCount > 0 && char.invulnerable != true) {
            heartUI.heartCount -= 1
            char.invulnerable = true;
            char.hit = true;
            char.deathFrame = 0;
        }

        if (fireball.x < (canvas.width*0.001)) fireBalls.splice(i,1);
    })
}
