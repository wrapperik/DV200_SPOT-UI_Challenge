import React from 'react';
import '../Styles/homeHeader.css';

const AboutHeader = () => {
    return (
        <div className="header">
            <video autoPlay loop muted className="header-video">
                <source src="/Assets/headerVid2.mp4" type="video/mp4"/>
            </video>
            <div className="header-content">
                <h1>Learn more <strong>About Us</strong></h1>
                <p>Our mission is to help businesses and entrepreneurs streamline their operations by providing reliable, flexible, and efficient virtual assistant services.</p>
            </div>
        </div>
    );
};

export default AboutHeader;