import {canvas, ctx} from './canvas'
export const heartImg = new Image();
heartImg.src = "src/images/heart.png"

export const heartUI = {
    heartPos: [0.69, 0.74, 0.79 ],
    heartCount: 3,
    counter: 0
}

function drawHeart(arr) {
    arr.forEach((heartPos, i) => {
        if (heartUI.heartCount - (i) > 0) {
        ctx.drawImage(
            heartImg,
            canvas.width * heartPos,
            canvas.height *.023,
            canvas.width * 0.1,
            canvas.width * 0.1
        )}
    })
}




export function heart() {
    drawHeart(heartUI.heartPos)
}