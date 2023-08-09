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
                    During my time at Northwestern University from Freshman to Senior year, I played an active role in the NUsolar team. 
                    Starting as a mechanical/electrical engineer in my Freshamn year, becoming the lead mechanical engineer my Sophmore year,
                    and the project manager of a 40-member team in my Junior year, I encountered and tackled many unique engineering and leadership challenges.
                    <br/>
                    <br/>
                    At NUsolar, I was responsible for upgrading components for the 7th generation solar car, designing the 8th generation solar car, mentoring newcomers, 
                    and liaising with both university offices and team sponsors. Over these years, I honed practical engineering skills in Mechanical and Electrical design, 
                    as well as manufacturing techniques, spanning CAD/CAM (SolidWorks and Siemens NX), tolerancing, Matlab Simulink, material structural analysis, 
                    PCB design, soldering/wiring, programming (CAN bus), and welding.
                    <br/>
                    <br/>
                    In addition to my engineering contributions, I had to opportunity to mentor new members through learning and applying new engineering and manufacturing 
                    concepts. This involved crafting leducational programs and workshops to gain technical skills, while creating networking opportunities with firms like 
                    Molex and SpaceX. I also learned more about leadership in a technical environment, including communication and presentation techniques with team members
                    and sponsors, project planning, and task delegation.
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
