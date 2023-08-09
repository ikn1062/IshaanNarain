import React from "react";
import "./experience.css"
import { useState } from "react";

const Experience = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [toggleStateExp, setToggleStateExp] = useState(0);

    const toggleTabExp = (index) => {
        setToggleStateExp(index);
    }
    return (
    <section id="/#experience">
        <h2 className="section__title experience__title-start">Experience</h2>
        {/* <span className="section__subtitle">My Personal Journey</span> */}

        <div className="experience__container container">
            <div className="experience__tabs">
                <div className={toggleState === 1 ? "experience__button experience__active button--flex" : "experience__button button--flex"}
                    onClick={() => toggleTab(1)}
                >
                    Education
                    <i className="uil uil-graduation-cap experience__icon"></i> 
                </div>

                <div className={toggleState === 2 ? "experience__button experience__active button--flex" : "experience__button button--flex"}
                    onClick={() => toggleTab(2)}
                >
                    Experience
                    <i className="uil uil-briefcase-alt experience__icon"></i>
                </div>
            </div>

            <div className="experience__sections">
                <div className={toggleState === 1 ? "experience__content experience__content-active" : "experience__content"}>
                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">Northwestern University</h3>
                            <span className="experience__subtitle"> MS in Computer Science</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Jun 2022 - Jun 2023
                            </div>
                        </div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>
                    </div>

                    <div className="experience__data">
                        <div></div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div>
                            <h3 className="experience__title">Northwestern University</h3>
                            <span className="experience__subtitle">BS in Mechanical Engineering</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Sep 2018 - Jun 2022
                            </div>
                        </div>

                    </div>

                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">King George V School HK</h3>
                            <span className="experience__subtitle">IB Diploma</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Aug 2011 - Jun 2018
                            </div>
                        </div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 2 ? "experience__content experience__content-active" : "experience__content"}>
                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">Northwestern University Prescience Lab</h3>
                            <span className="experience__subtitle">Graduate Systems Researcher</span>
                            <span className="exp__button" onClick={() => toggleTabExp(1)}>View More
                                <i className="uil uil-arrow-right exp__button-icon"></i>
                            </span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Mar 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div className={toggleStateExp === 1 ? "exp__modal active-modal" : "exp__modal"}>
                            <div className="exp__modal-content">
                                <i onClick={() => toggleTabExp(0)} className="uil uil-times exp__modal-close"></i>

                                <h3 className="exp__modal-title">Northwestern University Prescience Lab</h3>
                                <p className="exp__modal-description">Graduate Systems Researcher</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Prototyping custom memory management Linux kernel module with theoretical 300% acceleration of databases</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Resolving module memory issues with Kernel Probes, FTrace, and Kernel GDB</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Porting kernel modules in C from Linux 3.x to 5.19 and testing on Ubuntu QEMU </p>
                                    </li>
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Developing numeric and fuzzing tools to evaluate accuracy of floating-point arithmetic in chaotic systems with C++20, OpenMP, and CUDA</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="experience__data">
                        <div></div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div>
                            <h3 className="experience__title">Northwestern <br/> Center For Robotics</h3>
                            <span className="experience__subtitle">Independent Researcher</span>
                            <span className="exp__button" onClick={() => toggleTabExp(2)}>View More
                                <i className="uil uil-arrow-right exp__button-icon"></i>
                            </span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Dec 2023 - Present
                            </div>
                        </div>

                        <div className={toggleStateExp === 2 ? "exp__modal active-modal" : "exp__modal"}>
                            <div className="exp__modal-content">
                                <i onClick={() => toggleTabExp(0)} className="uil uil-times exp__modal-close"></i>

                                <h3 className="exp__modal-title">NU Center For Robotics</h3>
                                <p className="exp__modal-description">Independent Researcher</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Creating data-driven reinforcement learning C++ package with receding horizon iLQR control for robotics using ergodic theory</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Validated demonstration-learning algorithm with 8 positive and 6 negative sample gaussians in ROS2 ignition-gazebo Cart Pole simulation</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Programmed generalized dynamics and control interface using Jacobian linearization of state with C++20 template class</p>
                                    </li>
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Derived mathematics for optimal control via gradient descent by solving Riccati equations from derivative of objective function</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">NU Center For Deep Learning</h3>
                            <span className="experience__subtitle">Machine Learning & MLOps Researcher @ DELOS</span>
                            <span className="exp__button" onClick={() => toggleTabExp(3)}>View More
                                <i className="uil uil-arrow-right exp__button-icon"></i>
                            </span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Sep 2022 - Mar 2023
                            </div>
                        </div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div className={toggleStateExp === 3 ? "exp__modal active-modal" : "exp__modal"}>
                            <div className="exp__modal-content">
                                <i onClick={() => toggleTabExp(0)} className="uil uil-times exp__modal-close"></i>

                                <h3 className="exp__modal-title">NU Center For Deep Learning</h3>
                                <p className="exp__modal-description">Machine Learning & MLOps Researcher</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Programmed and presented automated statistical stress-testing-module for Artificial Neural Networks to Allstate, TransUnion, and NVIDIA</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Developed stateless full-stack app to monitor of over 20 ML KPIs, leveraging TensorFlow, MongoDB, Docker, and Kubernetes </p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Decreased retraining time by 24% by dynamically re-optimizing weights using online Multi-Arm Bandit memory replay algorithm </p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Maintained robust code through 100% documentation, try-except error handling, git version control, and pull request reviews </p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="experience__data">
                        <div></div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div>
                            <h3 className="experience__title">Tesla <br/> Electrical Systems</h3>
                            <span className="experience__subtitle">Software/Firmware Engineering Intern</span>
                            <span className="exp__button" onClick={() => toggleTabExp(4)}>View More
                                <i className="uil uil-arrow-right exp__button-icon"></i>
                            </span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Sep 2022 - Dec 2022
                            </div>
                        </div>

                        <div className={toggleStateExp === 4 ? "exp__modal active-modal" : "exp__modal"}>
                            <div className="exp__modal-content">
                                <i onClick={() => toggleTabExp(0)} className="uil uil-times exp__modal-close"></i>

                                <h3 className="exp__modal-title">Tesla - Electrical Systems</h3>
                                <p className="exp__modal-description">Software/Firmware Engineering Intern</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Developed and deployed software and firmware for 16 vehicle display variants by engineering and debugging features in C</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Expanded coverage and scalability of testing framework for 300 firmware tests by refactoring 10,000 lines of legacy Python code</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Resolved 3 display consumer issues by analyzing device registers on I2C and compiling 1000-hour data with multithreaded scripts</p>
                                    </li>
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Increased thermal cycling testing capacity by 400% by debugging custom display development firmware using logic analyzers</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">InfernoGuard (NU Startup) </h3>
                            <span className="experience__subtitle">Firmware / Machine Learning Engineer </span>
                            <span className="exp__button" onClick={() => toggleTabExp(5)}>View More
                                <i className="uil uil-arrow-right exp__button-icon"></i>
                            </span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Jun 2022 - Sep 2022
                            </div>
                        </div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>

                        <div className={toggleStateExp === 5 ? "exp__modal active-modal" : "exp__modal"}>
                            <div className="exp__modal-content">
                                <i onClick={() => toggleTabExp(0)} className="uil uil-times exp__modal-close"></i>

                                <h3 className="exp__modal-title">InfernoGuard (NU Startup)</h3>
                                <p className="exp__modal-description">Firmware / Machine Learning Engineer</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Spearheaded fire risk classifier and machine learning pipeline for 18 geo-features, achieving 97% accuracy with gradient-boosting tree algorithm</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Automated pipeline to fetch and clean 700GB of image data to classify risk of properties using REST APIs, NumPy, and Pandas </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="experience__data">
                        <div></div>

                        <div>
                            <span className="experience__rounder"></span>
                            <span className="experience__line"></span>
                        </div>
                        <div>
                            <h3 className="experience__title">Tesla <br/> Battery Manufacturing </h3>
                            <span className="experience__subtitle">Technical Program Manager Intern</span>
                            <span className="exp__button" onClick={() => toggleTabExp(6)}>View More
                                <i className="uil uil-arrow-right exp__button-icon"></i>
                            </span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Jun 2021 - Dec 2021
                            </div>
                        </div>

                        <div className={toggleStateExp === 6 ? "exp__modal active-modal" : "exp__modal"}>
                            <div className="exp__modal-content">
                                <i onClick={() => toggleTabExp(0)} className="uil uil-times exp__modal-close"></i>

                                <h3 className="exp__modal-title">Tesla - Battery Manufacturing</h3>
                                <p className="exp__modal-description">Technical Program Manager Intern</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Managed installation, commission, and 0-600 ramp of $65MM 47-station manufacturing line for global vehicle battery pack product </p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Grew production capacity from 0 to 600 vehicles per week by identifying manufacturing equipment issues with SQL data analysis</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Launched $1MM R&D line within 4 weeks by creating project plan and coordinating execution between team of 26 engineers</p>
                                    </li>
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">Facilitated daily morning and evening meetings to track, prioritize, and drive actions of manufacturing, design, and NPI teams</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}


export default Experience
