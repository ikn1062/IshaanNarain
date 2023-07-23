import React, { useState, useEffect } from "react"
import { ProjectsData, ProjectsNav } from "./Data"
import ProjectItems from "./ProjectItems"

const ProjectList = () => {
        const [item, setItem] = useState({ name: "All" });
        const [projects, setProjects] = useState([]);
        const [active, setActive] = useState(0);

        useEffect(() => {
            if(item.name === "All") {

                setProjects(ProjectsData);
            } else {
                const newProjects = ProjectsData.filter((project) => {
                    return project.category.indexOf(item.name) !== -1;
                    // return project.category === item.name;
                });
                setProjects(newProjects);
            }
        },
        [item]);

        const handleClick = (e, index) => {
            setItem({name: e.target.textContent});
            setActive(index);
        };
    return (
        <div>
            <div className="projectlist__filters">
                {ProjectsNav.map((item, index) => {
                    return (
                        <span onClick={(e) => {
                                handleClick(e, index);
                            }} 
                            className={`${active === index ? "active-project" : ""} projectlist__item`}
                                key={index}>
                                {item.name}
                        </span>
                    )
                })}
            </div>

            <div className="projectlist__container container grid">
                {projects.map((item) => {
                    return <ProjectItems item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default ProjectList