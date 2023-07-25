import React from "react";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ishaan Narain</h1>

                {/* <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects-id" className="footer__link">Projects</a>
                    </li>
                </ul> */}

                <div className="footer__social">
                    <a href="https://github.com/ikn1062" className="footer__social-link" target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/ishaan-k-narain/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="mailto:ishaannarain2022@u.northwestern.edu" className="footer__social-link" target="_blank">
                        <i class="bx bx-envelope"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Ishaan Narain. Aspiring Software Engineer.
                </span>
            </div>
        </footer>
    )
}


export default Footer
