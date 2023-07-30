import React from "react";
import "./prj.css"
import "./nusolar.css"

const NUsolar = () => {
    return (
        <section className="robotirl section">
            <div className="prj__container container">
                <div className="prj__content">
                    <a href="https://nusolar.org/" className="prj__title-link" target="_blank">
                        <h1 className="prj__title solar__title">NU Solar Car Team
                            <i className="bx bx-right-arrow-alt prj__button-icon"></i>
                        </h1>
                    </a>

                    <p className="prj__description">Previous Project Manager and Lead Mechanical Engineer at <a href="https://nusolar.org/" className="prj__description-link" target="_blank">NUsolar</a></p>
                    <div className="prj__tags">
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Project Management</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Mechanical Design</p>
                        </div>   
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Matlab Simulink</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Welding</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Soldering / Crimping</p>
                        </div> 
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Oscilloscope</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Material Design</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">SolidWorks</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">CAN</p>
                        </div>
                    </div>
                    <h3 className="prj__subtitle">Project Overview</h3>
                    <p className="prj__body">
                    From the start of my Freshman year to the end of my Junior year at Northwestern University, I was part of the NUsolar team.
                    I became the lead mechanical engineer towards the end of my Sophmore year and the project manager of the 40-member team at 
                    the start of my Junior year. During my time at NUsolar, I was responsible for the design and manufacture of upgraded parts 
                    for the 7th generation solar car, the design of the 8th generation solar car, mentoring and teaching new members, 
                    and communicaiton with the University offices and team sponsors.
                    <br/>
                    <br/>
                    Over the years I spent working at NUsolar, I developed technical engineering skills in Mechanical design, Eletrical design, and 
                    manufacturing, including CAD/CAM (SolidWorks and Siemens NX), tolerencing, Matlab Simulink for vehicle dynamics, material structural
                    analysis, PCB design, soldering/wiring, programming (CAN bus), and welding. I also developed communicaiton and leadership skills by teaching new members
                    engineering skills, as well as project planning and delegation.
                    </p>

                    <iframe className="prj__video-main" allowFullScreen
                        src="https://youtube.com/embed/egbfMn1tpg0">
                    </iframe>
                    
                </div>
            </div>
        </section>
    )
}

export default NUsolar
