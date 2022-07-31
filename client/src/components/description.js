import React from 'react'

import json from "../assets/textComponents.js";




import "../css/firstPar.css";
const Description = () => {

    

    return (
        <div id = "description">
            {json['screens']['description']}
        </div>
    )
}

export default Description;