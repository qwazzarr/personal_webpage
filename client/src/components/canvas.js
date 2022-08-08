
import React from 'react';
import { useRef,useEffect,useImperativeHandle,forwardRef,useState} from 'react';
import { useOnDraw } from './hooks';
import "../css/canvas.css";
const Canvas = ({color,thickness, width, height},ref) => {

    const [toRender,setToRender] = useState(0);
    const setCanvasRef = useOnDraw(onDraw,color,thickness,toRender);

    useImperativeHandle(ref, () => ({
        clear: clear
      }));

    console.log("Getting Rendered:"+width);
    
    // let width = null;
    // let height = null;
    // if(parent.current== null) {
    //     width = window.innerWidth * 0.9 * 0.55;
    //     height = window.innerHeight *0.9 * 0.63;
    // }
    // else {
    //     const boundingRect =  parent.current.getBoundingClientRect();
    //     width = boundingRect.width * 0.9;
    //     height = boundingRect.height; 
    //     console.log("GSIFOHGOSIFHGS");
    // }
    // let width = null;
    // let height = null;
    // const canvasdiv = document.getElementById("canvasdiv");
    // if(canvasdiv == null) {
    //     width = window.innerWidth * 0.9 * 0.55;
    //     height = window.innerHeight *0.9 * 0.63;
    // }
    // else {
    //     const boundingRect =  canvasdiv.getBoundingClientRect();
    //     width = boundingRect.width * 0.9;
    //     height = boundingRect.height; 
    // }
    
    
    //const height = document.getElemenstByClassName("outerCanvas")[0].getBoundingClientRect().height;
    // const width = window.innerWidth * 0.9 * 0.55;
    // const height = window.innerHeight *0.9 * 0.63;

    function clear(){
        setToRender(toRender+1);
    }
    
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
            />
    )
}

export default forwardRef(Canvas);  