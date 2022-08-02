import React from "react";
import {useState,useRef} from "react";
import "../css/pulseButton.css";
import "../css/projects.css";
import "../css/activeButton.css";
import Canvas from "./canvas";
import ReactSlider from "react-slider";


const Paint2 = () => {

    const [isClicked, setIsClicked] = useState(false);

    const [color, setColor] = useState("#ffffff");

    const canvasRef = useRef(null);

    const [thickness,setThickness] = useState("5");

    const handleClick = () => {
        setIsClicked(true);
    };
    
    return <div className="paint">
                <div class = {isClicked ? "artist":"outerCanvasOff"}>For your inner artist</div>
                <div class={isClicked ? "pulse-clicked":'container'} id ="pnt">
                    <button class={isClicked ? "pulse-clicked":"pulse-button"} onClick = {handleClick}>Let's draw!</button>
                </div>
                <div className={isClicked ? "outerCanvas":"outerCanvasOff"}>
                    <Canvas ref={canvasRef} color={color} thickness={thickness}></Canvas>
                    <div class = 'slidD'>
                        <button class = "white" onClick={() => {
                            setColor("#ffffff");
                        }}></button>
                        <button class = "black" onClick={ () => {   
                            setColor("#000000");
                        }}></button>
                        <ReactSlider min={2} max={25} defaultValue = {5} orientation={"vertical"} className="slider" thumbClassName="thumb" trackClassName="track"
                        onAfterChange={ (a,b) => {
                            setThickness(a);
                            console.log("thickness: "+a);
                        }}/>
                        <div className="thickImg"><img src={require("../assets/thickness.png")}></img></div>
                    </div>
                    
                </div>
                <div className={isClicked ?"save":"outerCanvasOff"} onClick = {()=> {canvasRef.current.clear()}}>Draw this!</div>
            </div>
}

export default Paint2;