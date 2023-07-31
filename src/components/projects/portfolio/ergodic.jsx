import React from "react";
import "./prj.css"
import "./ergodic.css"
import Img1 from "../../../assets/portfolio/fourier.jpg"

const Ergodic = () => {
    return (
        <section className="robotirl section">
            <div className="prj__container container">
                <div className="prj__content">
                    <a href="https://github.com/ikn1062/roboti-irl/" className="prj__title-link" target="_blank">
                        <h1 className="prj__title slam__title">Statistical RL in Robotics
                            <i className="bx bx-right-arrow-alt prj__button-icon"></i>
                        </h1>
                    </a>

                    <p className="prj__description">Feature-based Extended Kalman Filter SLAM on a TurtleBot3 using C++ and ROS 2</p>
                    <div className="prj__tags">
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C++</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">ROS2</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">RL</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Non-linear Control</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Dynamics</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Signal Analysis</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Statistical Learning</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Optimization</p>
                        </div>
                    </div>
                    <h3 className="prj__subtitle">Project Overview</h3>
                    <p className="prj__body">
                    The idea behind this project is that traditional robotic task learning methods like reinforcement learning take too much time and resources
                    converge to a good control method for a simple task. Whereas, control methods need too much information about a system and require hypertuning
                    of control gains.
                    <br/><br/>
                    The idea behind this project is to create a ROS2 (Robot-OS) C++ package for model-free reinforcement learning of a task control problem
                    for any dynamic robotic system. The current version of the project allows a system to learn what to do and what not to do from previous
                    positive and negative demonstrations. The example below shows this working for an underactuated (rank of control vector is smaller than dimension of state vector variables)
                    cartpole system, where the goal is to swing up the pole above the cart. The learning model successfully learns how to swing up the cartpole. 
                    <br/>
                    <br/>
                    This algorithm works by employing the idea of <a href="https://arxiv.org/abs/2103.17098" className="prj__body-link" target="_blank">Ergodic Imitation</a>, 
                    where a sample of demonstrations (both positive and negative) are converted into a normalized gaussian around the state space by combining the trajectory
                    signals into their fourier basis. The sample gaussian space has areas of high positivity, which the control algorithm optimizes over. The current control
                    algorithm implemented uses iLQR targeting a final state after a given time horizon with costs on control and state vectors. 
                    <br/>
                    <br/>
                    I'm currently working on integrating Koopman Operators into this project, to allow for true model-free learning. The use of Koopman operators allows for 
                    a dynamic system model to be inferred from information gained about the model. 
                    <br/>
                    <br/>
                    Link to the Github here: <a href="https://github.com/ikn1062/roboti-irl/" className="prj__body-link" target="_blank">LINK</a>. 
                    </p>
                    
                    <h3 className="prj__subtitle">Project Demonstrations</h3>

                    <div className="prj__text-image container grid">
                        <div>
                            <h3 className="prj__subtitle-2">Ergodic Control</h3>
                            <iframe className="prj__video-half" allowFullScreen
                                src="https://www.youtube.com/embed/QWhWvpcZHBM">
                            </iframe>
                        </div>
                        <div>
                            <h3 className="prj__subtitle-2">Simple Control</h3>
                            <iframe allowFullScreen className="prj__video-half"
                                src="https://youtube.com/embed/6-PlLRr4JFw">
                            </iframe>
                        </div>
                    </div>

                    <h3 className="prj__subtitle-2">Ergodic Metric</h3>
                    <img src={Img1} alt="Large Image" className="prj__img-large" />
                    
                </div>
            </div>
        </section>
    )
}

export default Ergodic
