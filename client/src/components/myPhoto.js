import React from 'react';

import faceImage from '../assets/mainPhoto.png';

import "../css/firstPar.css";


const MyPhoto = (props) => {


    return (
        <div id = "faceimage">
           <img src = {require('../assets/mainPhoto.png')}></img>
        </div>
    )
}


export default MyPhoto; 