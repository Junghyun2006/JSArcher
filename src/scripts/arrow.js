import {ctx, canvas} from './canvas'
import {char, handleShootingFrame } from './character'
const arrowSprite = new Image();
arrowSprite.src = "src/sprites/Huntress/Sprites/Arrow/Move.png";


class Arrow {
    constructor(x, y, speed, width, height, frameX, sprite, angle) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.frameX = frameX
        this.sprite = sprite;
        this.angle = angle;
    }

    draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.angle)
        ctx.translate(-this.x, -this.y)
        ctx.drawImage(
        arrowSprite, 
        this.width * this.frameX,
        0, 
        this.width, 
        this.height, 
        this.x, 
        this.y, 
        this.width*(canvas.width*.001), 
        this.height*(canvas.width*.001))
        ctx.restore()     
    }

    update() {
        if (this.x - this.width*(canvas.width*.00075)> (canvas.width*0.0183) && this.x + this.width*(canvas.width*.001) < (canvas.width*0.982) && this.y + this.height*(canvas.width*.002) < (canvas.height*0.9671) && this.y - this.height*(canvas.width*.003) > (canvas.height*0.1932)) {
            this.draw();
            this.x = this.x + this.speed.x
            this.y = this.y + this.speed.y
        } 
    }
}


const arrows = [];

export function animateArrows() {
    arrows.forEach(arrow => {
        arrow.update()
    }) 
    handleShootingFrame()
}

window.addEventListener('click', (event) => {
    const angle = Math.atan2(
        event.clientY - (char.y + (canvas.height*.19/2)), 
        event.clientX - (char.x + (canvas.height*.2/2)))
    const speed = {
        x: Math.cos(angle) * (canvas.height*.05),
        y: Math.sin(angle) * (canvas.height*.05)
    }
    setTimeout(() => {
        arrows.push(new Arrow( 
        char.x + (canvas.height*.2/2), 
        char.y + (canvas.height*.19/2), 
        speed, 
        24, 
        5, 
        0, 
        arrowSprite,
        angle))
    }, 300)
    char.frameY = 0;
    char.shooting = true;
    char.clickXPos = event.clientX;
    console.log(event.clientX, event.clientY, canvas.width, canvas.height)
})


