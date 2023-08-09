import React from "react";
import "./prj.css"
import "./memory.css"

const Memory = () => {
    return (
        <section className="robotirl section">
            <div className="prj__container container">
                <div className="prj__content">
                    <a href="https://github.com/ikn1062/" className="prj__title-link" target="_blank">
                        <h1 className="prj__title memory__title">Linux Custom Memory Management
                            <i className="bx bx-right-arrow-alt prj__button-icon"></i>
                        </h1>
                    </a>

                    <p className="prj__description">Developing a custom Linux kernel module to manage user's memory @ <a href="http://www.presciencelab.org/" className="prj__description-link" target="_blank">Prescience Lab</a></p>
                    <div className="prj__tags">
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">ASM (x86)</p>
                        </div>   
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">KGDB</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">OS dev</p>
                        </div> 
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">QEMU</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Ftrace</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">KProbe</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Make</p>
                        </div>
                    </div>
                    <h3 className="prj__subtitle">Project Overview <br/>
                        <a href="https://github.com/ikn1062/" className="prj__subtitle-link" target="_blank">
                            Github Link {" "}
                            <i class="uil uil-github-alt"></i>
                        </a>
                    </h3>
                    <p className="prj__body">
                    Over the past four months, I've dedicated my efforts to developing a customized memory management kernel 
                    module for Linux as part of ongoing research at the Prescience Lab. This project aims to grant users 
                    greater control over their memory, leading to improved performance for High Performance Computing and 
                    Database applications. Unfortunately, I can't share my current work as it's still in progress and will be 
                    included in a future paper submission.
                    <br/>
                    <br/>
                    During this project, I've gained expertise in Linux OS, kernel module development, debugging with KGDB 
                    (Notes: <a href="https://ikn1062.notion.site/Setting-up-a-GDB-Debugger-for-Ubuntu-running-on-QEMU-KVM-1b6eb8a3f5034ecabde644e56983eb71?pvs=4" className="prj__body-link" target="_blank">here</a>), 
                    and everything memory (virtually).
                    <br/>
                    <br/>
                    - Updated 30/07/2023
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Memory
