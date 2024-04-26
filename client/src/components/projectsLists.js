import React from "react";

import ProjectsItem from "./projectsItem";

import "../css/projects.css"
import MovingGallery from "./movingGallery";

const ProjectsList = () => {


    return (
        <div>
        <div class = "headline">Experience</div>
        <div class = "projectsList">
            <ProjectsItem type = "citiBank"/>
            <ProjectsItem type = "guessai"/>
            <ProjectsItem type = "unipays"/>
            <ProjectsItem type = "messenger"/>
            <ProjectsItem type = "pokemon"/>
            <ProjectsItem type = "junction"/>
            <ProjectsItem type = "motionTailor"/>
        </div>
        </div>
    );  
}


export default ProjectsList;    