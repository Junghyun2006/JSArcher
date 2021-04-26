import { ctx, canvas } from "./canvas";
import { dungeon } from "./dungeon";
import { char } from './character';
import {arrowSpec} from './arrow';
import {skeletons} from './skeleton';

const chest = new Image();
chest.src = "src/sprites/Chest/chest.png";

class Chest {
  constructor(width, height, frameX, frameY, sprite) {
    this.x = canvas.width * 0.10;
    this.y = canvas.height * 0.7;
    // this.x = canvas.width * 0.3;
    // this.y = canvas.height * 0.7;
    this.width = width;
    this.height = height;
    this.frameX = frameX;
    this.frameY = frameY;
    this.sprite = sprite;
    this.scale = canvas.height * 0.05;
    this.counter = 0;
    this.centerPointX = this.x + this.scale/2; 
    this.centerPointY = this.y + this.scale/2;
    this.lastChest = false;

    // 300x300
  }

  draw() {
    ctx.drawImage(
      this.sprite,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.scale,
      this.scale
    );
  }

  handleFrames() {
    this.counter += 1;
    if (this.counter % 8 === 0) {
       this.frameX++;
       if (this.frameX === 5) {
            this.frameX = 0;
            this.frameY++;
            if (this.frameY === 2) {
                this.frameY = 0;
            }
       } 
    }
  }

  update() {
    this.handleFrames();
    this.draw();
  }
}

export const chester = new Chest(300, 300, 0, 0, chest);

export function animateChest() {
    const charDistance = Math.hypot(chester.centerPointX - char.centerPointX, chester.centerPointY - char.centerPointY) 
    if ((charDistance - chester.scale/4 - char.scale/4) < 1 && dungeon.chest === true) {
        arrowSpec.arrowSpeed = 0.010 + (0.005*char.arrSpeed)
        if (char.arrSpeed < 4)char.arrSpeed += 1
        if (char.fireRate < 3) char.fireRate += 1
        if (char.arrSpeed === 4 || char.arrSpeed === 5) char.damage = 2;
        if (chester.lastChest) char.damage = 3;
        dungeon.chest = false;
    }
    if (dungeon.chest && skeletons.length === 0) chester.update();
}
