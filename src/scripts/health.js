import {canvas, ctx} from './canvas';

export const healthImg = new Image();
healthImg.src = "src/sprites/health/shealth.png";


export const skeletonHealth = {
    width: 60,
    height: 20,
    frameX: 0,
    scale: canvas.width * 0.005
}

export function drawSkeletonHealth(x,y, health) {
    ctx.drawImage(
        healthImg,
        skeletonHealth.width * health,
        0,
        skeletonHealth.width,
        skeletonHealth.height,
        x,
        y,
        skeletonHealth.scale * 3,
        skeletonHealth.scale * .5
    )
}

export const dragonHealthImg2 = new Image();
dragonHealthImg2.src = "src/sprites/health/blackbar.png";

export const dragonHealth2 = {
    width: 145,
    height: 145,
    scale: canvas.width * 0.1,
    healthbar: canvas.width * 0.3 
}

export function drawDragonHealth2() {
    ctx.drawImage(
        dragonHealthImg2,
        0,
        0,
        dragonHealth2.width,
        dragonHealth2.height,
        canvas.width * 0.725,
        canvas.height * 0.105,
        dragonHealth2.healthbar,
        dragonHealth2.scale * 1.7
    )
}

export const dragonHealthImg = new Image();
dragonHealthImg.src = "src/sprites/health/greenbar.png";

export const dragonHealth = {
    width: 145,
    height: 145,
    scale: canvas.width * 0.1,
    healthbar: canvas.width * 0.3 
}

export function drawDragonHealth(health) {
    drawDragonHealth2()
    ctx.drawImage(
        dragonHealthImg,
        0,
        0,
        dragonHealth.width,
        dragonHealth.height,
        canvas.width * 0.725 + (dragonHealth.healthbar * ((100-health)/100))/8,
        canvas.height * 0.15,
        dragonHealth.healthbar * health/100,
        dragonHealth.scale * 1.5 
    )
}

