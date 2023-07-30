import React from "react";
import "./scrollup.css"

const ScrollUp = () => {
        window.addEventListener("scroll", function () {
            const scrollUp = document.querySelector(".scrollup");
            if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
            else scrollUp.classList.remove("show-scroll");
        })
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }
    return (
        <a href="/IshaanNarain/#/#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}


export default ScrollUp
