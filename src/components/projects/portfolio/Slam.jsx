import React from "react";
import "./prj.css"
import "./slam.css"
import Img1 from "../../../assets/portfolio/landmark.jpg"

const Slam = () => {
    return (
        <section className="robotirl section">
            <div className="prj__container container">
                <div className="prj__content">
                    <a href="https://github.com/ikn1062/turtlebot-slam/" className="prj__title-link" target="_blank">
                        <h1 className="prj__title slam__title">TurtleBot3 EKF-SLAM
                            <i className="bx bx-right-arrow-alt prj__button-icon"></i>
                        </h1>
                    </a>

                    <p className="prj__description">Feature-based Extended Kalman Filter SLAM on a TurtleBot3 using C++ and ROS 2</p>
                    <div className="prj__tags">
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">C++</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">ROS2</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">SLAM</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">ML</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Kalman Filter</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">CMake</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Catch2</p>
                        </div>
                        <div className="prj__tags-content">
                            <p className="prj__tags-text">Armadillo</p>
                        </div>
                    </div>
                    <h3 className="prj__subtitle">Project Overview
                    <br/>
                    <a href="https://github.com/ikn1062/turtlebot-slam/" className="prj__subtitle-link" target="_blank">
                            Github Link {" "}
                            <i class="uil uil-github-alt"></i>
                    </a>
                    </h3>
                    <p className="prj__body">
                    This project involved the creation of a ROS2 C++ package for a Feature-based Extended Kalman Filter Simultaneous Localization and Mapping
                    for a TurtleBot3 from scratch. The SLAM library is made up of 5 sub-packages created from scratch, including: nuturtle_description (used to visualize multiple
                    turtlebots in an RVIZ environment), turtlelib (functions to assist with kinematics of diff drive robots), nusim (simulation environment),
                    nucontrol (control of turtlebots in simulation and real world environments), and nuslam (SLAM integration).
                    <br/>
                    <br/>
                    The video below shows an example of SLAM working in a real-world environment. 
                    <br/>
                    - Robot odometry position estimate (Blue robot)
                    <br/>
                    - Landmark odometry position estimate (Blue cylinders)
                    <br/>
                    - Robot EKF SLAM position estimate (Green robot)
                    <br/>
                    - Landmark EKF SLAM position estimate (Green cylinders)
                    <br/>
                    <br/>
                    Note: I forgot to reset the intial simulated odometry position in Blue. I am currently working on getting a new video.
                    </p>
                    
                    <iframe className="prj__video-main" allowFullScreen
                        src="https://www.youtube.com/embed/eQ56fAfpJGk">
                    </iframe>
                    
                    <h3 className="prj__subtitle">Project Components</h3>

                    <h3 className="prj__subtitle-2">Odometry</h3>

                    <div className="prj__text-image container grid">
                        <div className="prj__halftxt">
                            <p className="prj__tags-text">
                            The Robot Odometry component makes use of the wheel encoder data and the forward kinematics of the TurtleBot3 
                            (in the form of differential drive) to calculate the theoretical location, assuming no slippage has occurred.
                            <br/><br/> 
                            As the rate of wheel encoder data (200hz) is much faster than the rate of LIDAR data (5hz), it can be used
                            to calculate intermediate state estimates. However, due to slippage, the odometry measurements will start to
                            drift from a robot's true locaiton. 
                            </p> 
                        </div>
                        <iframe allowFullScreen className="prj__video-half"
                            src="https://youtube.com/embed/uFGFtILFuvU">
                        </iframe>
                    </div>

                    <h3 className="prj__subtitle-2">Landmark Detection and Data Association</h3>
                    <div className="prj__text-image container grid">
                        <div className="prj__halftxt">
                            <p className="prj__tags-text">
                            The created SLAM algorithm implements landmarks to to position the robot in the real world environment. In this
                            case, the landmarks are represented by cylindrical objects. LIDAR data is represented by a series of data points
                            which tell us how far away an object is and the angle from the front of the robot. 
                            <br/><br/>
                            LIDAR points can be clustered
                            into landmarks using an unsupervised DBSCAN learning algorithm based off it's euclidean distance. To generate 
                            circular landmarks, a best fit circle is defined for a cluster of points using a form of Gaussian process regression.
                            <br/><br/>
                            Finally, new landmarks are associated with previously found landmarks using the covariance of the previous detections
                            with the Mahalanobis distance metric. If a landmark is above a certain distance threshold, it is considered to be 
                            a new landmark.
                            </p> 
                        </div>
                        <div className="prj__halfimg">
                            <img src={Img1} alt="Large Image"/>
                        </div> 
                    </div>

                    <h3 className="prj__subtitle-2">EKF-SLAM</h3>

                    <div className="prj__text-image container grid">
                        <div className="prj__halftxt">
                            <p className="prj__tags-text">
                            Using the Odometry wheel encoder position estimates and the landmark association, a feature-based Extended Kalman Filter SLAM 
                            can be implemented.
                            <br/><br/>
                            The first step in the EKF-SLAM algorithm is prediciton. The prediction step uses the difference in odometry between the 
                            current timestep and the previous timestep, and uses it to predict a new state and landmark covariance. Due to slippage,
                            the odometry will drift from the robot's true location.
                            <br/><br/>
                            The second step resolves this by correcting the position of the robot, by using the landmarks to update the predicited state. 
                            Kalman gains are calculated by the expected location of a circular landmark and the actual location. 
                            </p> 
                        </div>
                        <iframe allowFullScreen className="prj__video-half"
                            src="https://youtube.com/embed/QlarJMluz2w">
                        </iframe>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Slam
