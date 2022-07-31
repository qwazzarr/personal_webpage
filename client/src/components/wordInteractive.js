
import React, { useState } from 'react';
import '../css/WordInteractive.css';


const WordInteractive = (props) => {

    const text = props.text;

    const content = props.content ;

    const link = props.link;

    const [active , setActive] = useState(false);

    var beamsTop = [];
    var beamsBottom = [];

    for(var i =0; i < 4;i++) {
        beamsTop.push(<div class = {'stripe'+(i+1)}></div>);
        beamsBottom.push(<div class = {'stripe'+(i+4)}></div>);
    }


    return(
        <span class = "interactivediv">
            <div id = {text.split(" ")[0]+"Y"} class = "animbox">
                <div class = 'stripe1'></div>
                <div class = 'dot2'></div>
                <div class = 'dot3'></div>
                <div class = 'stripe4'></div>
                <div id = {text+"X"} class ={`content${active ? "on":"on"}`}>{content}</div>
                
            </div>
            <a href = {link} id = {text} class = {`interactive${active ? "on":"off"}`} onMouseEnter = {() => setActive(true)} onMouseLeave={() => setActive(false)}>{text}</a>
        </span>
    )
}


export default WordInteractive;