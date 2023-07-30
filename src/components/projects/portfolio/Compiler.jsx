import React from "react";
import "./prj.css"
import "./compiler.css"

const Compiler = () => {
    return (
        <section className="robotirl section">
            <div className="prj__container container grid">
                <div className="prj__content">
                    <a href="https://github.com/ikn1062/" className="prj__title-link" target="_blank">
                        <h1 className="prj__title compiler__title">Compiler Construction
                            <i className="bx bx-right-arrow-alt prj__button-icon"></i>
                        </h1>
                    </a>

                    <p className="prj__description">Developing interpreters and compilers</p>
                    <div className="prj__tags">
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C++</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">GDB</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">SQL</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Programming Languages</p>
                        </div>
                    </div>
                    <h3 className="prj__subtitle">Project Overview</h3>
                    <p className="prj__body">
                    Learning how to create interpreters and compilers with the end goal of creating a source-to-source compiler from 
                    SQL to relational algebra. I am currently working through notes in <a href="https://craftinginterpreters.com/" className="prj__body-link" target="_blank">Crafting Interpreters</a> and <a href="https://www.cs.princeton.edu/~appel/modern/c/" className="prj__body-link" target="_blank">Modern Compiler Implementation in C</a>.
                    <br/>
                    <br/>
                    - Updated 30/07/2023
                    </p>

                </div>
            </div>
        </section>
    )
}

export default Compiler
