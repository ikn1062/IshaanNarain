import React from "react";
import "./prj.css"
import Img1 from "../../../assets/example.jpg"

const Robotirl = () => {
    return (
        <section className="robotirl section">
            <div className="prj__container container grid">
                <div className="prj__content">
                    <a href="https://github.com/" className="prj__title-link" target="_blank">
                        <h1 className="prj__title">TITLE HERE</h1>
                    </a>
                    <p className="prj__description">Insert subtitle here</p>
                    <div className="prj__tags">
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C++</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C++</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C++</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C++</p>
                        </div> 
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C++</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C++</p>
                        </div>  
                    </div>
                    <h3 className="prj__subtitle">Insert subtitle here</h3>
                    <p className="prj__body">Insert Body Text Here</p>
                    
                    <img src={Img1} alt="Large Image" className="prj__img-large" />

                    <div className="prj__text-image container grid">
                        <div className="prj__halftxt">
                            <p className="prj__tags-text">
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            </p> 
                        </div>
                        <div className="prj__halftxt">
                            <p className="prj__tags-text">
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            </p> 
                        </div>
                    </div>
                    <div className="prj__text-image container grid">
                        <div className="prj__halftxt">
                            <p className="prj__tags-text">
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            </p> 
                        </div>
                        <div className="prj__halfimg">
                            <img src={Img1} alt="Large Image"/>
                        </div> 
                    </div>
                    <div className="prj__text-image container grid">
                        <div className="prj__halfimg">
                            <img src={Img1} alt="Large Image" />
                        </div> 
                        <div className="prj__halftxt">
                            <p className="prj__tags-text">
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            Hello 12345 <br/> 
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Robotirl
