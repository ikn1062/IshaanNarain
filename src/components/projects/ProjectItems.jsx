import React from "react"
import { ProjectsData, ProjectsNav } from "./Data"

const ProjectItems = ({item}) => {
    return (
        <a href={item.link} className="project__card-link" target="_blank">
        <div className="project__card" key={item.id} >
            <img src={item.image} alt='' className="project__img"></img>
            <img src={item.image2} alt='' className="project__img_2"></img>
            <h3 className="project__title">{item.title}</h3>
            <span className="project__tags">{'Used: ' + item.tags}</span>
            <a href={item.link} className="project__button" target="_blank">View Project
                <i className="bx bx-right-arrow-alt project__button-icon"></i>
            </a>
        </div>
        </a>
    )
}

export default ProjectItems