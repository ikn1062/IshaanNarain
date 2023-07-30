import React from "react";
import "./skills.css";
import Proglang from "./Proglang";
import Technologies from "./Technologies";

/* Icons taken from Boxicons */

const Skills = () => {
    return (
        <section className="skills section" id="/#skills">
            <h2 className="section__title skills__title-start">Skills</h2>
            {/* <span className="section__subtitle">What I can do</span> */}

            <div className="skills__container container grid">
                <Proglang />
                <Technologies />
            </div>
        </section>
    )
}

export default Skills
