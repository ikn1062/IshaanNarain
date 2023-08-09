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
                    <h3 className="prj__subtitle">Project Overview
                    <br/>
                    <a href="https://github.com/ikn1062/roboti-irl/" className="prj__subtitle-link" target="_blank">
                            Github Link {" "}
                            <i class="uil uil-github-alt"></i>
                    </a>
                    </h3>
                    <p className="prj__body">
                    This project addresses the challenges of time-consuming and resource-intensive robotic task learning methods, 
                    such as reinforcement learning, which struggle to time-efficiently achieve effective control. Meanwhile, traditional 
                    control methods demand extensive system information and meticulous tuning of control gains.
                    <br/><br/>
                    To tackle these issues, the project's core concept involves creating a ROS2 (Robot-OS) C++ package for model-free statistical
                    reinforcement learning within dynamic robotic systems. The current version of the project enables systems 
                    to learn what to do and what not to do from previous positive and negative demonstrations. An example 
                    below shows this working for an underactuated (rank of control vector is smaller than dimension of state 
                    vector variables) cartpole system, where the learning model successfully learns how to swing up the cartpole.
                    <br/>
                    <br/>
                    The approach employs <a href="https://arxiv.org/abs/2103.17098" className="prj__body-link" target="_blank">Ergodic Imitation</a>,
                    where demonstrations (both positive and negative) are converted into a normalized Gaussian distribution within 
                    the state space using a Fourier basis transformation of time-based trajectory signals. The algorithm then 
                    optimizes control based on areas of high positivity in this distribution. The current control mechanism, 
                    employing iLQR, targets a desired final state within a specified time horizon while considering costs on control 
                    and state vectors.
                    <br/>
                    <br/>
                    Expanding the project's scope, I am in the process of integrating Koopman Operators to facilitate true model-free learning. 
                    Incorporating Koopman operators enables the deduction of a dynamic system model from acquired information, enhancing the 
                    versatility and efficiency of the learning process.
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
