import React from "react";
import "./projects.css"
import ProjectList from "./ProjectList";

const Projects = () => {
    return (
        <section className="project section" id="projects-id">
            <h2 className="section__title">Technical Projects</h2>
            <span className="section__subtitle">A flavour of Math and CS</span>

            <ProjectList />
        </section>
    )
}

export default Projects