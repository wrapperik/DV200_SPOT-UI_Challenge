import React from 'react';
import '../Styles/aboutUs.css';

const WhyChooseUs = () => {
    return(
       <div className="why-choose-us-container">
        <h1>Why Choose Us?</h1>
        <div className="why-choose-us-card-container">

        <div className="why-card">
                <img src="/Assets/certification.svg" alt="Certification Icon" className="feature-icon" />
                <div className="feature-card-content">
                    <h5>Professional and skilled VAs ready to assist you.</h5>
                </div>
            </div>

            <div className="why-card">
                <img src="/Assets/certification.svg" alt="Certification Icon" className="feature-icon" />
                <div className="feature-card-content">
                    <h5>Flexible service plans based on client needs.</h5>
                </div>
            </div>

            <div className="why-card">
                <img src="/Assets/certification.svg" alt="Certification Icon" className="feature-icon" />
                <div className="feature-card-content">
                    <h5>Transparent pricing with no hidden fees.</h5>
                </div>
            </div>

            </div>
       </div>
    );
}

export default WhyChooseUs;