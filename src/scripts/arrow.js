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
        this.left = this.x
        this.right = this.x + this.width*(canvas.width*.001)
        this.top = this.y
        this.bot = this.y + this.height*(canvas.height*.001)
        this.hit = false;
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
        this.height*(canvas.height*.001))
        ctx.restore()     

        setTimeout(()=> {
                ctx.save()
                ctx.translate(this.x, this.y)
                ctx.rotate(this.angle)
                ctx.translate(-(this.x), -(this.y))
                ctx.fillStyle = 'rgba(135,206,200,0.1)'
                ctx.fillRect(this.x-(canvas.width*0.1), this.y, this.width+(canvas.width*0.1), this.height+3)
                ctx.restore()
            }, 50)
    }

    update() {
        if (this.x > (canvas.width*0.0183) && 
        this.x + this.width*(canvas.width*.001) < (canvas.width*0.995) && 
        this.y + this.height*(canvas.width*.002) < (canvas.height*0.9671) && 
        this.y - this.height*(canvas.width*.003) > (canvas.height*0.19) && 
        this.hit === false )  {
            this.draw();
            this.x = this.x + this.speed.x
            this.y = this.y + this.speed.y
        } 
    }
}



export const arrows = [];

export function animateArrows() {
    arrows.forEach((arrow, i) => {
        arrow.update()

        if (arrow.x < (canvas.width*0.0182) || 
            arrow.x > (canvas.width*0.995) - arrow.width*(canvas.width*.001)  || 
            arrow.y < (canvas.height*0.1932) + arrow.height*(canvas.width*.003) || 
            arrow.y > (canvas.height*0.9671)  - arrow.height*(canvas.width*.002) || 
            arrow.hit === true)  {
            setTimeout(() => {
                arrows.splice(i, 1)
            }, 0)
            
        }
        // console.log(arrow,i)
    }) 
    handleShootingFrame()
}

window.addEventListener('click', (event) => {
    const angle = Math.atan2(
        event.clientY - (char.y + (canvas.height*.19/2)), 
        event.clientX - (char.x + (canvas.height*.2/2)))
    const speed = {
        x: Math.cos(angle) * (canvas.height*.02),
        y: Math.sin(angle) * (canvas.height*.02)

    }
    // setTimeout(() => {
        arrows.push(new Arrow( 
        char.x + (canvas.height*.2/2), 
        char.y + (canvas.height*.19/2.35), 
        speed, 
        24, 
        5, 
        0, 
        arrowSprite,
        angle))
    // }, 50)
    char.frameY = 0;
    char.shooting = true;
    char.clickXPos = event.clientX;

})


