import React from "react";

import "../css/projects.css";
import WordInteractive from "./wordInteractive";

const Skills = (props) => {


    return <div className = "skills">
        <span className="iuse">i use</span>
        <ul className = 'slist'>
            <li>Java
                <ul>
                    <li>SpringBoot + Jpa</li>
                </ul>
            </li>
            <li>Docker</li>
            <li>Css/ <WordInteractive text ="ReactJs" content ="This website uses React too!" link = ''/> / NextJs</li>

            <li><WordInteractive text ="NodeJs" content = "It helps to save your drawings ->"/></li>

            
            <li>Swift UI, Xcode</li>
            <li>SQL</li>
            <li>Python
                <ul>
                    <li>Data analysis</li>
                    <li>Pandas/Numpy</li>
                    <li>Jupyter</li>
                    <li>Deep interest in ML</li>
                </ul>
            </li>
            <li>CI/CD</li>
            <li>Jira/Confluence/Bitbucket</li>
            <li>Agile experience</li>
        </ul>
    </div>;

}


export default Skills;