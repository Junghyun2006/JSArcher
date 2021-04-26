import {ctx, canvas} from './canvas';
import {char} from './character';
import {fireBalls, Fireball, fireImg, animateFireball} from './fireball';
import {drawDragonHealth, dragonHealth} from './health';
import {arrows} from './arrow';
import { createSkeletons } from './skeleton';
import { createSlimes } from './slime';


class Dragon {
    constructor(speed, width, height, sprite) {
        this.x = canvas.width * 0.8;
        this.y = canvas.height * 0.5;
        this.scale = canvas.width * 0.2;
        this.state = "Idle";
        this.centerPointX = this.x + this.scale/2; 
        this.centerPointY = this.y + this.scale/2;
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
        this.health = 100;
        this.alive = false;
        this.rate1 = 137;
        this.rate2 = 97;
    }

    draw() {
        drawDragonHealth(this.health);
        this.sprite.src = `src/sprites/dragons/dragon/${this.state}${this.frame}.png`;
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
        this.draw();
        animateFireball();
    }

    handleDragonAnimation() {
        this.counter += 1;
        if (this.counter % 10 === 0) {
            switch (this.state) {
                // case "Death":
                //     if (this.frame < 5) this.frame++;
                //     else (this.alive = false);
                //     break;
                case "Attack":
                    if (this.frame < 4) this.frame++;
                    else (this.frame = 1);
                    break;
                case "Walk":
                    if (this.frame < 5) this.frame++;
                    else (this.frame = 1);
                    break;
                default:
                    if (this.frame < 3) this.frame++;
                    else (this.frame = 1);
                    break;
            }
           
            if (this.health === 32 || this.health === 33) {
                createSkeletons(5)
                this.health = this.health -2;
            }
        }

        arrows.forEach(arrow => {
            const arrDistance = Math.hypot(arrow.x - this.centerPointX, arrow.y - this.centerPointY)
            if ((arrDistance - this.scale/5.5) < 1) {
                arrow.hit = true; 
                if (this.health <= 0) this.alive = false;

                else if (this.health <= 75 && this.health > 50) {
                    this.rate1 = 97;
                    this.rate2 = 67;
                }

                else if (this.health <= 50 && this.health > 25) {
                    this.rate1 = 71;
                    this.rate2 = 43;
                }
                else if (this.health <= 30 && this.health > 15 ) {
                    this.rate1 = 13;
                    this.rate2 = 31
                }
                else if (this.health <= 15 ) {
                    this.rate1 = 5;
                    this.rate2 = 11;
                }
                this.health -= 1;
            }
        })  

    }

    handleDragonMovement() {
        if (this.counter % this.rate1 === 0) {
            this.frame = 1;
            this.state = "Walk"
            this.moving = true;
            }
        else if (this.counter % this.rate2 === 0) {
            this.frame = 1;
            this.state = "Attack"
            this.moving = false;
            if (this.frame === 1) {
                fireBalls.push(new Fireball (
                    (canvas.height * .01),
                    64,
                    64,
                    fireImg,
                    this.y+this.height*0.15))
            }
        }
        if (this.moving) {
            this.yMove = char.centerPointY - (canvas.height * .12);
            this.ySpeed = (this.yMove - this.y)/30;
            this.y += this.ySpeed;
            this.centerPointY = this.y + this.scale/2
        }
    }
}

const dragonImg = new Image();

export const dragonSprite = new Dragon (
    (canvas.height * .05),
    256,
    256,
    dragonImg)

export function animateDragon() {
    dragonSprite.update()
    dragonSprite.handleDragonAnimation()
    dragonSprite.handleDragonMovement()
}
