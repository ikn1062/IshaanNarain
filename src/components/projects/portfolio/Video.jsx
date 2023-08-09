import React from "react";
import "./prj.css"
import "./video.css"
import Img1 from "../../../assets/portfolio/zoom.jpg"

const Video = () => {
    return (
        <section className="robotirl section">
            <div className="prj__container container">
                <div className="prj__content">
                    <a href="https://github.com/ikn1062/video_analysis" className="prj__title-link" target="_blank">
                        <h1 className="prj__title video__title">Zoom/Owl Video Data App
                            <i className="bx bx-right-arrow-alt prj__button-icon"></i>
                        </h1>
                    </a>

                    <p className="prj__description">A Python Application to analyze speaker data from Zoom / Owl recorded videos</p>
                    <div className="prj__tags">
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Python</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">OpenCV</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">OCR</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">MediaPipe</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Bash</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Slurm</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Multiprocess</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">SciKit</p>
                        </div>
                    </div>
                    <h3 className="prj__subtitle">Project Overview
                    <br/>
                    <a href="https://github.com/ikn1062/video_analysis" className="prj__subtitle-link" target="_blank">
                            Github Link {" "}
                            <i class="uil uil-github-alt"></i>
                    </a>
                    </h3>
                    <p className="prj__body">
                    Developed a data analysis tool utilizing Python's OpenCV, Mediapipe, and audio identification, 
                    facilitating comprehensive Zoom/Owl video analysis for the Applied Mathematics department. 
                    This tool efficiently extracts and aligns essential information – names, faces, audio, and images – 
                    for accurate speaker identification at each time interval. To address challenges like obfuscated 
                    features (e.g., masked individuals), k-means clustering was employed, correlating data from video 
                    frames to speakers. To enhance efficiency, the project leveraged the University Slurm computing cluster, 
                    incorporating Multiprocessing for simultaneous video analysis and multithreading to optimize read/write 
                    I/O operations.
                    </p>

                    <iframe className="prj__video-main" allowFullScreen
                        src="https://youtube.com/embed/QuUNvb6QhP8">
                    </iframe>

                    <h3 className="prj__subtitle">Data Analysis Process and Detection Ratio</h3>

                    <div className="prj__text-image container grid">
                        <div className="prj__halftxt">
                            <p className="prj__tags-text">
                            The current process for analyzing zoom videos is as follows. 1) Corner match and crop video to speaker view frame, 
                            2) collect data for each frame, 3) analyze frame data and output as a csv.
                            <br/>
                            <br/>
                            - Name Matching (Pytesseract) - 83.4% Detection
                            <br/>
                            - Face Classification (dlib)                  - 92.5% Detection
                            <br/>
                            - Image Vector Detection (l2-norm)            - 91.9% Detection
                            <br/>
                            - Audio Classification (Pyannote)             - 40.3% Detection
                            </p> 
                        </div> 
                        <div className="prj__halfimg">
                            <img src={Img1} alt="Large Image"/>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video
