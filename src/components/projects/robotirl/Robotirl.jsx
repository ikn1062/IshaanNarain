import React from "react";
import "./robotirl.css"
import Img1 from "../../../assets/example.jpg"

const Robotirl = () => {
    return (
        <section className="robotirl section">
            <div className="robotirl__container container grid">
                <div className="robotirl__content">
                    <a href="https://github.com/" className="robotirl__title-link" target="_blank">
                        <h1 className="robotirl__title">TITLE HERE</h1>
                    </a>
                    <p className="robotirl__description">Insert subtitle here</p>
                    <div className="robotirl__tags">
                        <div className="robotirl__tags-content">
                            <p className="robotirl__tags-text">C++</p>
                        </div>
                        <div className="robotirl__tags-content">
                            <p className="robotirl__tags-text">C++</p>
                        </div>
                        <div className="robotirl__tags-content">
                            <p className="robotirl__tags-text">C++</p>
                        </div>
                        <div className="robotirl__tags-content">
                            <p className="robotirl__tags-text">C++</p>
                        </div> 
                        <div className="robotirl__tags-content">
                            <p className="robotirl__tags-text">C++</p>
                        </div>
                        <div className="robotirl__tags-content">
                            <p className="robotirl__tags-text">C++</p>
                        </div>  
                    </div>
                    <h3 className="robotirl__subtitle">Insert subtitle here</h3>
                    <p className="robotirl_body">Insert Body Text Here</p>
                    
                    <img src={Img1} alt="Large Image" className="robotirl__img-large" />

                    <div className="robotirl__text-image container grid">
                        <div className="roboitirl__halftxt">
                            <p className="robotirl__tags-text">
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
                        <div className="roboitirl__halftxt">
                            <p className="robotirl__tags-text">
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
                    <div className="robotirl__text-image container grid">
                        <div className="roboitirl__halftxt">
                            <p className="robotirl__tags-text">
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
                        <div className="robotirl__halfimg">
                            <img src={Img1} alt="Large Image"/>
                        </div> 
                    </div>
                    <div className="robotirl__text-image container grid">
                        <div className="robotirl__halfimg">
                            <img src={Img1} alt="Large Image" />
                        </div> 
                        <div className="roboitirl__halftxt">
                            <p className="robotirl__tags-text">
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
