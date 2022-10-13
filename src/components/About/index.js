import React from 'react';
import aboutImage from "../../assets/images/LinkedIn.JPG"
const About = () => {
    return (
        <div id="about-me" className="about">
            <div className="about-me">
                <h3>A little about me:</h3>
                <p>MERN Full-Stack Web Developer with strong background in management and leadership. Awarded University
                    of Utah Coding Bootcamp Certificate following competent demonstration of skills via numerous
                    mobile-first web applications developed both personally and as a valuable team contributor.
                    Application of Object Oriented Programming concepts to modulate development and simplify code.</p>
            </div>
            <div>
                <img src={aboutImage} alt="Clayton Andersen" />
            </div>
        </div>
    )
}

export default About