import React from "react";

import ProjectsItem from "./projectsItem";

import "../css/projects.css"

const ProjectsList = () => {


    return (
        <div>
        <div class = "headline">Projects</div>
        <div class = "projectsList">
            <ProjectsItem type = "unipays"/>
            <ProjectsItem type = "messenger"/>
            <ProjectsItem type = "pokemon"/>
            <ProjectsItem type = "junction"/>
        </div>
        </div>
    );  
}


export default ProjectsList;    