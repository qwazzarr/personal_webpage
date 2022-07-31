import React from "react";

import "../css/projects.css";
import Paint2 from "./paint2";
import Skills from "./skills";

const DrawingPage = (props) => {


    return <div className="drawingPage">
        <Skills></Skills>
        <Paint2></Paint2>
    </div>
}

export default DrawingPage;