import {ctx, canvas} from './canvas'

const uiWidth = canvas.width * .975;
export const uiSideGap = (canvas.width - uiWidth)/2;
export const dungeonHeight = canvas.height * .775

export const drawUi = () => {    
    const uiHeight = canvas.height * .15;
    ctx.fillStyle = 'gray';
    ctx.fillRect(uiSideGap,uiSideGap,uiWidth,uiHeight)

    const dungeonWidth = uiWidth;
    ctx.fillStyle = 'gray';
    ctx.fillRect(uiSideGap, uiSideGap*2 + uiHeight, dungeonWidth, dungeonHeight)

    const uiBoxSizes = [.25, .25, .075, .075, .2775];

    const drawUiBoxes = (boxSizes) => {
        const height = uiHeight * .8;
        const uiBoxGap = (uiHeight - height)/2;
        const uiTopPos = uiSideGap + uiBoxGap
        let totalLeftPos = uiSideGap + uiBoxGap
        
        boxSizes.forEach(size => {
            const width = uiWidth * size;
            ctx.fillStyle = 'black';
            ctx.fillRect(totalLeftPos, uiTopPos, width, height)
            totalLeftPos += uiSideGap + width
        })
    }

    drawUiBoxes(uiBoxSizes);
}

