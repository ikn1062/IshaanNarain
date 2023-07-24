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
    <section>
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="experience__container container">
            <div className="experience__tabs">
                <div className={toggleState === 1 ? "experience__button experience__active button--flex" : "experience__button button--flex"}
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap experience__icon"></i> 
                    Education
                </div>

                <div className={toggleState === 2 ? "experience__button experience__active button--flex" : "experience__button button--flex"}
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt experience__icon"></i>
                    Experience
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

                                <h3 className="exp__modal-title">Title 1 Condensed</h3>
                                <p className="exp__modal-description">So a quick description goes here</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
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

                                <h3 className="exp__modal-title">Title 1 Condensed</h3>
                                <p className="exp__modal-description">So a quick description goes here</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">NU Center For Deep Learning</h3>
                            <span className="experience__subtitle">Machine Learning & MLOps Researcher</span>
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

                                <h3 className="exp__modal-title">Title 1 Condensed</h3>
                                <p className="exp__modal-description">So a quick description goes here</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
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

                        <div className={toggleStateExp === 3 ? "exp__modal active-modal" : "exp__modal"}>
                            <div className="exp__modal-content">
                                <i onClick={() => toggleTabExp(0)} className="uil uil-times exp__modal-close"></i>

                                <h3 className="exp__modal-title">Title 1 Condensed</h3>
                                <p className="exp__modal-description">So a quick description goes here</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">InfernoGuard (Startup) </h3>
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

                                <h3 className="exp__modal-title">Title 1 Condensed</h3>
                                <p className="exp__modal-description">So a quick description goes here</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
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

                                <h3 className="exp__modal-title">Title 6 Condensed</h3>
                                <p className="exp__modal-description">So a quick description goes here</p>

                                <ul className="exp__modal-exp grid">
                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
                                    </li>

                                    <li className="exp__modal-exp">
                                        <i className="uil uil-check-circle exp__modal-icon"></i>
                                        <p className="exp__modal-info">A paragraph goes here</p>
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
