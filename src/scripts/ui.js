import {ctx, canvas} from './canvas'
import { slimes } from './slime';

const uiWidth = canvas.width * .975;
export const uiSideGap = (canvas.width - uiWidth)/2;
export const dungeonHeight = canvas.height * .775

const rocks = new Image();
rocks.src = "src/images/rocks.png";

const itemBox = new Image();
itemBox.src = "src/images/itembox.png"


export const drawUi = () => {    
    const rockPattern = ctx.createPattern(rocks, 'repeat');
    const uiHeight = canvas.height * .15;
    ctx.fillStyle = 'black';
 
   
    ctx.fillRect(uiSideGap,uiSideGap,uiWidth,uiHeight)

    const dungeonWidth = uiWidth;
    ctx.fillStyle = 'black';
    ctx.fillRect(uiSideGap, uiSideGap*2 + uiHeight, dungeonWidth, dungeonHeight)

    const uiBoxSizes = [.25, .075, .075, .2775];

    const drawUiBoxes = (boxSizes) => {
        const height = uiHeight * .79;
        const uiBoxGap = (uiHeight - height)/2;
        const uiTopPos = uiSideGap + uiBoxGap
        let totalLeftPos = uiSideGap*2 + uiBoxGap + 0.25*uiWidth
        
        boxSizes.forEach(size => {
            const width = uiWidth * size;
            // ctx.fillStyle = itemBox;
            
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            // ctx.fillRect(totalLeftPos, uiTopPos, width, height)
            ctx.strokeRect(totalLeftPos, uiTopPos, width, height)
            // ctx.drawImage(
            //     itemBox,
            //     totalLeftPos,
            //     uiTopPos,
            //     width,
            //     height

            // )
            totalLeftPos += uiSideGap + width
        })
    }

    drawUiBoxes(uiBoxSizes);
}

