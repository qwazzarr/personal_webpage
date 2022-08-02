
import React from 'react';
import { useRef,useEffect,useImperativeHandle,forwardRef,useState} from 'react';
import { useOnDraw } from './hooks';
import "../css/canvas.css";
const Canvas = ({color,thickness},ref) => {

    const [toRender,setToRender] = useState(0);
    const setCanvasRef = useOnDraw(onDraw,color,thickness,toRender);

    useImperativeHandle(ref, () => ({
        clear: clear
      }));
    const width = window.innerWidth * 0.9 * 0.55;
    const height = window.innerHeight *0.9 * 0.63;

    // const width = "923.67px";
    // const height = "591.381px";  

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
            class ="canvas"
            />
    )
}

export default forwardRef(Canvas)   ;  