import {canvas, ctx} from './canvas'
export const heartImg = new Image();
heartImg.src = "src/images/heart.png"

function drawHeart(arr) {
    arr.forEach(heartPos => {
        ctx.drawImage(
            heartImg,
            canvas.width * heartPos,
            canvas.height *.023,
            canvas.width * 0.1,
            canvas.width * 0.1
        )
    })
}

const heartUI = {
    heartPos: [.69, .74, .79 ],
    heartCount: 3
}


export function heart() {
    drawHeart(heartUI.heartPos)
}