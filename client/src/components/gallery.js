import React from "react";
import MovingGallery from "./movingGallery";
import { useState,useEffect } from "react";
import "../css/gallery.css";
import axios from "axios";


const Gallery = () => {

    const [drawings, setdrawings] = useState([]);
    console.log("Gallery rendered, drawings length:"+drawings.length);
    const checkDrawings = async() => {
        axios.get("http://localhost:5050/drawings")
            .then(response => {

                const data = JSON.parse(response.data.dataDrawings);
                if(drawings == undefined) {
                    console.log("Set because undefined");
                    setdrawings(data);
                }
                else {
                    if(drawings.length != data.length) {
                        console.log("Set because other length");
                        setdrawings(data);
                    }
                    else {

                        for(var i = 0;i<data.length;i++) {
                            var element = data[i];
                            var flag = false;
                            for(var j = 0;j<drawings.length;j++) {
                                var element2 = drawings[j];
                                if(element2.value == element.value) {
                                    flag = true;
                                }
                            }
                            if(!flag) {
                                console.log("Set because new elements");
                                setdrawings(data);
                                break;
                            }
                        }
                    }
                }
            })
    };
    useEffect(() => {
        const interval = setInterval(() => {   
            checkDrawings()
        }, 1000);
    
      return () => {
        clearInterval(interval)
        console.log("Gallery unmounted");
      }
    }, [drawings]);
    
    return (
        <div className = "gallery">
            <MovingGallery startW={40} weight = {140} friction = {140} drawings = {drawings}></MovingGallery>
            <MovingGallery startW = {10} weight = {220} friction = {80} drawings = {drawings}></MovingGallery>
            <MovingGallery startW = {20} weight = {200} friction = {100} drawings = {drawings}></MovingGallery>
        </div>
    )
}

export default Gallery;