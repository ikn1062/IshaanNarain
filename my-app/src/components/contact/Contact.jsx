import React from "react";
import "./contact.css"

const Contact = () => {
    return (
    <section id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
            </div>

            <div className="contact__info">
                <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>

                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">user@gmail.com</span>

                    <a href="mailto:exampleemail@gmail.com.com" className="contact__button">Shoot an email!
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>

                <div className="contact__card">
                    <i className="bx bx-phone-call contact__card-icon"></i>

                    <h3 className="contact__card-title">Phone</h3>
                    <span className="contact__card-data">331-254-9003</span>

                </div>

                <div className="contact__card">
                     <i className="bx bxl-linkedin contact__card-icon"></i>

                    <h3 className="contact__card-title">LinkedIn</h3>
                    <span className="contact__card-data">Ishaan Narain</span>

                    <a href="https://www.linkedin.com" className="contact__button">Connect with me!
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    )
}


export default Contact
