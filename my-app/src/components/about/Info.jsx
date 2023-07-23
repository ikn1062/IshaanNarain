import React from "react";

/* Icons taken from Boxicons */

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-award'></i>
                <h3 className="about__title">Experience</h3>
                    <span className="about__subtitle">4 years student</span>
            </div>
            <div className="about__box">
                <i class='bx bx-briefcase' ></i>
                <h3 className="about__title">Completed</h3>
                    <span className="about__subtitle">1 Project</span>
            </div>
            <div className="about__box">
                <i class='bx bx-bug-alt'></i>
                <h3 className="about__title">Hotel</h3>
                    <span className="about__subtitle">Trivago</span>
            </div>
        </div>
    )
}

export default Info
