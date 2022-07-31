
import React from 'react';
import { useRef,useEffect } from 'react';
import { useOnDraw } from './hooks';
import "../css/canvas.css";
const Canvas = ({color,thickness}) => {

    const setCanvasRef = useOnDraw(onDraw,color,thickness);

    const width = window.innerWidth * 0.9 * 0.55;
    const height = window.innerHeight *0.9 * 0.63;

    // const width = "400px";
    // const height = "300px";
    
    function onDraw(ctx,point,prevPoint,color,thickness) {
        drawLine(prevPoint, point , ctx, color,thickness);
    }

    function drawLine(start,end,ctx,color,width) {
        start = start ?? end;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x,start.y);
        ctx.lineTo(end.x,end.y);
        ctx.stroke();


        ctx.fillStyle = color;

        ctx.beginPath();
        ctx.arc(start.x,start.y,width/2,0,2*Math.PI);
        ctx.fill();
    }
    return(
        <canvas 
            width={width}
            height={height}
            ref={setCanvasRef}
            class ="canvas"
            />
    )
}

export default Canvas;  