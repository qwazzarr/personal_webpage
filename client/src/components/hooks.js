import axios from 'axios';
import { useRef,useEffect } from 'react';
import canvas from './canvas';

export function useOnDraw(onDraw,color,thickness,toRender) {

    const canvasRef = useRef(null);
    
    const isDrawingRef = useRef(false);

    const hasDrawn = useRef(false);

    const mouseMoveListenerRef = useRef(null);
    const mouseDownListenerRef = useRef(null);
    const mouseUpListenerRef = useRef(null);

    const prevPointRef = useRef(null);

    useEffect(() => {
       console.log("mount");
    
      return () => {
        console.log("unmount");
        if(mouseMoveListenerRef.current){
            window.removeEventListener("mousemove",mouseMoveListenerRef.current);
            window.removeEventListener("mouseup",mouseUpListenerRef.current);
        }
      }


    }, [])

    useEffect( () => {
        console.log("colorischanged");
        window.removeEventListener("mouseup",mouseUpListenerRef.current);
        window.removeEventListener("mousedown",mouseDownListenerRef.current);

    },[color,thickness]);

    useEffect(() => {
      if(!hasDrawn.current) {  
        return;
      }
      hasDrawn.current = false;
      console.log("cleaning up");

      const dataURL = {dataUrl: canvasRef.current.toDataURL()};
      
      //Change with prod

      const headers = {"Access-Control-Allow-Origin":"*"};
      axios.post('http://localhost:5050/draw',dataURL,{headers})
        .then(response => console.log(response));
      const ctx = canvasRef.current.getContext('2d');   
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }, [toRender])
    
    
    function setCanvasRef(ref) {
        if(!ref) return;
        console.log("addinglisteners?"+color);
        if(canvasRef.current) {
            canvasRef.current.removeEventListener("mousedown",mouseDownListenerRef.current);    
        }
        canvasRef.current = ref;
        initMouseMoveListener();
        initMouseDownListener();
        initMouseUpListener();
    }

    function initMouseMoveListener() {
        const mouseMoveListener = (e) => {

            if(isDrawingRef.current) {
                const point = computePointInCanvas(e.clientX,e.clientY);
                const ctx = canvasRef.current.getContext('2d');

                if(onDraw) {
                    console.log("drawing: "+color);
                    hasDrawn.current = true;
                    onDraw(ctx,point,prevPointRef.current,color,thickness);
                }
                prevPointRef.current = point;
                console.log(point);
            }
        }
        if(mouseMoveListenerRef.current) {
            window.removeEventListener("mousemove",mouseMoveListenerRef.current);
        }
        mouseMoveListenerRef.current = mouseMoveListener;
        window.addEventListener("mousemove",mouseMoveListener)
    }

    function initMouseDownListener() {
        if(!canvasRef.current) return;
        const mouseDownListener = (e) => {
            isDrawingRef.current = true;
        }
        mouseDownListenerRef.current = mouseDownListener;
        canvasRef.current.addEventListener("mousedown",mouseDownListener);
    }

    function initMouseUpListener() {
        const mouseUpListener = (e) => {
            isDrawingRef.current = false;
            prevPointRef.current = null;
        }
        mouseUpListenerRef.current = mouseUpListener;
        window.addEventListener("mouseup",mouseUpListener); 
    }
    function computePointInCanvas(clientX,clientY) {

        if(canvasRef.current){
            const boundingRect = canvasRef.current.getBoundingClientRect();
            //Change according to offsetHeight
            return {
                x : clientX - boundingRect.left ,
                y : clientY - boundingRect.top
            }
        } else {
            return null;    
        }
    }

    return setCanvasRef;
}