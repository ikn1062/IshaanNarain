import React from "react";
import "./prj.css"
import "./wand.css"
import Img1 from "../../../assets/portfolio/wandctrls.jpg"
import Img2 from "../../../assets/portfolio/wandlayout.jpg"

const Wand = () => {
    return (
        <section className="robotirl section">
            <div className="prj__container container">
                <div className="prj__content">
                    <a href="https://www.mccormick.northwestern.edu/news/articles/2022/06/design-studio-students-show-off-high-performance-robots/" className="prj__title-link" target="_blank">
                        <h1 className="prj__title wand__title">Haptic VR Wand
                            <i className="bx bx-right-arrow-alt prj__button-icon"></i>
                        </h1>
                    </a>

                    <p className="prj__description">A Haptic Robot designed to interact with objects in Virtual Reality</p>
                    <div className="prj__tags">
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Embedded C</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">AR/VR</p>
                        </div>   
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Arduino</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Matlab</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Mechatronics</p>
                        </div> 
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Control</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Dynamics</p>
                        </div>
                    </div>
                    <h3 className="prj__subtitle">Project Overview</h3>
                    <p className="prj__body">
                    Project manager and controls/electronics lead of the Haptic VR Wand team. Created a wearable device composed of a handheld
                    wand controller (the wand), an ergonomic device that attaches to the body (the brace), and a two- or three 
                    degree-of-freedom robotic mechanism connecting the wand to the brace (the robot). 
                    The robot produces forces relative to the brace at a single point on the wand outside the user's hand.
                    <br/>
                    <br/>
                    This point (the cursor) serves as the interaction point in a virtual environment, and is located conveniently 
                    to permit a wide range of interactions such as drawing on a whiteboard, striking a drum, or picking up an object.
                    </p>
                    
                    <iframe className="prj__video-main" allowFullScreen
                        src="https://www.youtube.com/embed/i6scs-oscvs">
                    </iframe>

                    <h3 className="prj__subtitle">Controls and Embedded C</h3>
                    <div className="prj__text-image container grid">
                        <div className="prj__halftxt">
                            <p className="prj__tags-text">
                            The goal of the embedded programming and controls was to create exert a force on the VR Controller when the user
                            was in contact with an object in the VR environment. The entire control loop successfully ran at 1000hz.
                            <br/>
                            <br/>
                            Information about the user position (given by the headset) and the controller position was sent 
                            from Unity to a microcontroller via UART. A distance metric can be estimated from the closest object using 
                            forward kinematics, and if the distance was less than 0, a calculated torque was sent to the 3 motors. 
                            Moreover, errors in positions from Unity were corrected by motor encoder readings.
                            </p> 
                        </div>
                        <iframe allowFullScreen className="prj__video-half"
                            src="https://youtube.com/embed/KRQoTR1Gi30">
                        </iframe>
                    </div>

                    <img src={Img1} alt="Large Image" className="prj__img-large" />

                    <h3 className="prj__subtitle">Electronic Design</h3>

                    <div className="prj__text-image container grid">
                        <div className="prj__halftxt">
                            <p className="prj__tags-text">
                            The goal of the electronic design / mechatronics portion was to enable all communication between the 
                            host computer, microcontrollers, and the motor controller via UART, as well as provide enough power
                            for all devices and sensors on board.
                            <br/>
                            <br/>
                            The main power supply was rated at 24V 60A, supplying enough power to create 10N of force on the end-effector
                            via the 2 ODrive motor controllers. The ODrive motor controllers served as a central hub to sent torque commands
                            and receive encoder commands via UART. 
                            </p> 
                        </div> 
                        <div className="prj__halfimg">
                            <img src={Img2} alt="Large Image"/>
                        </div> 
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Wand
