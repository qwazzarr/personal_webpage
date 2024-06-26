
import React from "react";
import screens from "../assets/textComponents";

import "../css/projects.css";




const ProjectsItem = (props) => {

    const type = screens['screens']['projects'][props.type];
    
    console.log(type)
    
    
    return (
        <div class = "projectItem">
            <div id = {type['photo']} className="projectItemDivPhoto"><img src = {require(`../assets/${type['photo']}`)} class = "projectItemPhoto"></img>  </div>
            <div class = "projectItemText">{type["text"]}</div>
        </div>
    )
}


export default ProjectsItem;