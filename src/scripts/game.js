const { ctx, canvas } = require("./canvas");

export function gameOver() {
    ctx.fillStyle = 'white';
    ctx.font = '40px sans serif';
    const text = "Game Over..."
    ctx.fillText(text, canvas.width*0.5 - (ctx.measureText(text).width/2), canvas.height*0.5)
}


export function instruction() {
    const fontSize = canvas.height * .018;
    ctx.fillStyle = 'white';
    ctx.font =  fontSize.toString() + 'px sans serif';
    ctx.fillText("1. Use Arrow Keys or W, A, S, D to move & space to dash", canvas.width * .285, canvas.height*0.075)
    ctx.fillText("2. Click to shoot arrows towards desired location", canvas.width * .285, canvas.height*0.105)
    ctx.fillText("3. Kill the boss before your health drops to 0", canvas.width * .285, canvas.height*0.135)
}