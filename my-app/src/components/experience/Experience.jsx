import React from "react";
import "./experience.css"
import { useState } from "react";

const Experience = () => {
    const [toggleState, setToggleState] = useState(2);

    const toggleTab = (index) => {
        setToggleState(index);
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
                            <h3 className="experience__title">Title here</h3>
                            <span className="experience__subtitle"> subtitle here</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Date here
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
                            <h3 className="experience__title">Title here 2</h3>
                            <span className="experience__subtitle"> subtitle here 2</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Date here 2
                            </div>
                        </div>

                    </div>

                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">Title here</h3>
                            <span className="experience__subtitle"> subtitle here</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Date here
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
                            <h3 className="experience__title">Title here 2</h3>
                            <span className="experience__subtitle"> subtitle here 2</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Date here 2
                            </div>
                        </div>

                    </div>
                </div>

                <div className={toggleState === 2 ? "experience__content experience__content-active" : "experience__content"}>
                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">Title here - 2ndtab</h3>
                            <span className="experience__subtitle"> subtitle here</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Date here
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
                            <h3 className="experience__title">Title here 2</h3>
                            <span className="experience__subtitle"> subtitle here 2</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Date here 2
                            </div>
                        </div>

                    </div>

                    <div className="experience__data">
                        <div>
                            <h3 className="experience__title">Title here</h3>
                            <span className="experience__subtitle"> subtitle here</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Date here
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
                            <h3 className="experience__title">Title here 2</h3>
                            <span className="experience__subtitle"> subtitle here 2</span>
                            <div className="experience__calendar">
                                <i className="uil uil-calendar-alt"></i> Date here 2
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




/*

*/