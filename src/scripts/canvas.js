const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

const drawCanvas = () => {
    ctx.fillStyle = 'gray';
    ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
}

module.exports = {
    canvas,
    ctx,
    drawCanvas
}

     