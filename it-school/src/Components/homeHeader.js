import React from 'react';
import '../Styles/homeHeader.css';

const HomeHeader = () => {
    return (
        <div className="header">
            <video autoPlay loop muted className="header-video">
                <source src="/Assets/headerVid.mp4" type="video/mp4" />
            </video>
            <div className="header-content">
                <h1>Kickstart Your <strong>IT Career</strong> with Our 4-Month Bootcamps</h1>
                <p>Master essential IT skills with our intensive, career-focused courses in A+, Python, React, ICDL, Java, and Project Management.</p>
                <button>Learn More</button>
            </div>
        </div>
    );
};

export default HomeHeader;