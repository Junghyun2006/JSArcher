import {char} from "./character"

const { ctx, canvas } = require("./canvas");

export function gameOver(texts) {
    ctx.fillStyle = 'white';
    ctx.font = '40px sans serif';
    const text = texts
    ctx.fillText(text, canvas.width*0.5 - (ctx.measureText(text).width/2), canvas.height*0.5)
}


export function instruction() {
    const fontSize = (canvas.width) * .009;
    ctx.fillStyle = 'white';
    ctx.font =  fontSize.toString() + 'px sans serif';
    ctx.fillText("1. Use Arrow Keys or W, A, S, D to move", canvas.width * .285, canvas.height*0.075)
    ctx.fillText("2. Click to shoot arrows toward desired location", canvas.width * .285, canvas.height*0.105)
    ctx.fillText("3. Kill the boss before your health drops to 0", canvas.width * .285, canvas.height*0.135)
}

export function arrowStats() {
    const fontSize = (canvas.width) * .009;
    ctx.fillStyle = 'white';
    ctx.font =  fontSize.toString() + 'px sans serif';
    ctx.fillText("Fire Rate", canvas.width * .5425, canvas.height*0.075)
    ctx.fillText("Arr. Speed", canvas.width * .5425, canvas.height*0.105)
    ctx.fillText("Damage", canvas.width * .5425, canvas.height*0.135)
}

function fireRate() {
    ctx.fillStyle = 'white'
    ctx.strokeRect(canvas.width * .585, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
        if (char.fireRate > 0) ctx.fillRect(canvas.width * .585, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .596, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
        if (char.fireRate > 1) ctx.fillRect(canvas.width * .596, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .607, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
        if (char.fireRate > 2) ctx.fillRect(canvas.width * .607, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .618, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
        if (char.fireRate > 3) ctx.fillRect(canvas.width * .618, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .629, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
        if (char.fireRate > 4) ctx.fillRect(canvas.width * .629, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .64, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
        if (char.fireRate > 5) ctx.fillRect(canvas.width * .64, canvas.height*0.059, canvas.width * .01, canvas.width * .01)
    
}

function speed() {
    ctx.fillStyle = 'white'
    ctx.strokeRect(canvas.width * .585, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
        if (char.arrSpeed > 0) ctx.fillRect(canvas.width * .585, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .596, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
        if (char.arrSpeed > 1) ctx.fillRect(canvas.width * .596, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .607, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
        if (char.arrSpeed > 2) ctx.fillRect(canvas.width * .607, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .618, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
        if (char.arrSpeed > 3) ctx.fillRect(canvas.width * .618, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .629, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
        if (char.arrSpeed > 4) ctx.fillRect(canvas.width * .629, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .64, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
        if (char.arrSpeed > 5) ctx.fillRect(canvas.width * .64, canvas.height*0.089, canvas.width * .01, canvas.width * .01)
    
}

function damage() {
    ctx.fillStyle = 'white'
    ctx.strokeRect(canvas.width * .585, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
        if (char.damage > 0) ctx.fillRect(canvas.width * .585, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .596, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
        if (char.damage > 1) ctx.fillRect(canvas.width * .596, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .607, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
        if (char.damage > 2) ctx.fillRect(canvas.width * .607, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .618, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
        if (char.damage > 3) ctx.fillRect(canvas.width * .618, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .629, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
        if (char.damage > 4) ctx.fillRect(canvas.width * .629, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
    ctx.strokeRect(canvas.width * .64, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
        if (char.damage > 5) ctx.fillRect(canvas.width * .64, canvas.height*0.119, canvas.width * .01, canvas.width * .01)
    
}

export function statBars() {
    fireRate();
    speed();
    damage();
}
