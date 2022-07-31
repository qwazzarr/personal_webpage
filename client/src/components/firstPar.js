import React from 'react';

import MyName from "./myName";
import MyPhoto from './myPhoto';

import "../css/firstPar.css";



const FirstPar  = () => {

    return (
        <div class = "frontPar">
            <MyPhoto/>
            <MyName/>
        </div>
    )
}

export default FirstPar;