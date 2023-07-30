import React from "react";
import "./prj.css"
import "./osdev.css"

const OSdev = () => {
    return (
        <section className="robotirl section">
            <div className="prj__container container">
                <div className="prj__content">
                    <a href="https://github.com/ikn1062/ishaanOS" className="prj__title-link" target="_blank">
                        <h1 className="prj__title os__title">Operating System Development
                            <i className="bx bx-right-arrow-alt prj__button-icon"></i>
                        </h1>
                    </a>

                    <p className="prj__description">Learning how to develop an ARM64 Operating System using <a href="https://wiki.osdev.org/Main_Page" className="prj__description-link" target="_blank">OSdev Wiki</a></p>
                    <div className="prj__tags">
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">ASM</p>
                        </div>   
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">GCC</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">GDB</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Operating Systems</p>
                        </div> 
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Compiler</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Linux</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">QEMU</p>
                        </div>
                    </div>
                    <h3 className="prj__subtitle">Project Overview</h3>
                    <p className="prj__body">
                    Learning how to develop a mini operating system for the ARM64 Computer Architecture using the OSdev wiki. I currently
                    have a simple skeleton of the OS created and will be posting updates on my development path here.
                    <br/>
                    <br/>
                    - Updated 30/07/2023
                    </p>

                </div>
            </div>
        </section>
    )
}

export default OSdev
