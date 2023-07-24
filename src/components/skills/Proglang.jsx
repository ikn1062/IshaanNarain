import React from "react";

/* Icons taken from Boxicons */

const Proglang = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Programming Languages</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">C++</h3>
                        <span className="skills__level">STL, MPI, Eigen, Catch2</span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">C</h3>
                        <span className="skills__level">kernel.h</span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">ASM(x86)</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Python3</h3>
                        <span className="skills__level">PyTorch, Numpy, sklearn, Matplotlib, OpenCV</span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">Matlab</h3>
                        <span className="skills__level">Simulink</span>
                    </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>

                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Proglang
