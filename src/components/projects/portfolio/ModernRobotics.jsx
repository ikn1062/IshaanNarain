import React from "react";
import "./prj.css"
import "./modernrobotics.css"
import Img1 from "../../../assets/portfolio/overshoot.jpg"
import Img2 from "../../../assets/portfolio/newTask.jpg"

const ModernR = () => {
    return (
        <section className="robotirl section">
            <div className="prj__container container grid">
                <div className="prj__content">
                    <a href="https://github.com/ikn1062/ME449-Modern-Robotics/tree/main" className="prj__title-link" target="_blank">
                        <h1 className="prj__title mr__title">Robot Trajectory Planning and Control
                            <i className="bx bx-right-arrow-alt prj__button-icon"></i>
                        </h1>
                    </a>
                    <p className="prj__description">Kuka Youbot Motion Planning Simulation and Control</p>
                    <div className="prj__tags">
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Python</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">NumPy</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Matplotlib</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Control</p>
                        </div> 
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">CopelliaSim</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Robot Manipulation</p>
                        </div>  
                    </div>
                    <h3 className="prj__subtitle">Project Overview</h3>
                    <p className="prj__body">
                    Created a Python package which plans a trajectory for the end-effector of the Kuka Youbot mobile omnidirectional
                    robot with a manipulator. The goal of this project was to pick and place a small object from an initial location
                    to a desired specified location, implementing inverse kinematics and PI feedback control. The trajectory was 
                    simulated in a CoppeliaSim environment. 
                    </p>
                    
                    <iframe width="720" height="480" className="prj__video-main" allowFullScreen
                        src="https://youtube.com/embed/e5av3XeAHtw">
                    </iframe>

                    <h3 className="prj__subtitle">Trajectory Generation</h3>
                    <p className="prj__body">
                    The input of the trajectory generation algorithm was the starting and desired end location of the object. From this,
                    a completed trajectory was broken up into 8 segments, representing various tasks. Each trajectory segment was computed 
                    using the Python Modern Robotics code library.
                    <br/>
                    <br/>
                    1. Move the Youbot from the start position to a "Standoff" position (grippers at a 45 degree angle relative to the ground) with the end effector above the cube.
                    <br/>
                    2. Move the gripper end effector to a grasp position.
                    <br/>
                    3. Actuate the gripper to grasp the object.
                    <br/>
                    4. Move the Gripper back to the "Standoff" positon.
                    <br/>
                    5. Move the Youbot to the "Standoff" position above the desired object location.
                    <br/>
                    6. Move the gripper end effector to the final location of the object.
                    <br/>
                    7. Actuate the gripper to release the object.
                    <br/>
                    8. Move the Gripper back to the "Standoff" positon.
                    <br/>
                    </p>


                    <h3 className="prj__subtitle">Motion and Feedback Control</h3>
                    <p className="prj__body">
                    Once the trajectory generation algorithm was implemented, a feedback PI controller was implemented. The error of the
                    trjaectory was calculated between the actual end effector position and the desired end effector position, where
                    a new end effector twist would be calculated using the PI controller. Using inverse kinematics, the controls of the 
                    wheels and Youbot arm joints was calculated as well.

                    <br/>
                    <br/>
                    For this project, three different simulation trajectories were tested. The 'best' trajectory (shown above), 
                    an 'overshoot' trajectory, and a 'new task' trajectory.
                    </p>

                    <h3 className="prj__subtitle-2">Overshoot Trajectory</h3>

                    <div className="prj__text-image container grid">
                        <div className="prj__halfimg">
                            <img src={Img1} alt="Large Image"/>
                        </div> 
                        <iframe width="480" height="360" allowFullScreen
                            src="https://youtube.com/embed/XbUbHDFP81k">
                        </iframe>
                    </div>

                    <h3 className="prj__subtitle-2">New Task Trajectory</h3>
                    <div className="prj__text-image container grid">
                        <div className="prj__halfimg">
                            <img src={Img2} alt="Large Image"/>
                        </div> 
                        <iframe width="480" height="360" allowFullScreen
                            src="https://youtube.com/embed/jEHLQUxEQ1A">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModernR
