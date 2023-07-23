import React from "react";

/* Icons taken from Boxicons */

const Technologies = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Technologies</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Git</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Linux</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Bash</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Unix</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Technologies
