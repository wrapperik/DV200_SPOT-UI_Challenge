import React from 'react';
import '../Styles/keyFeatures.css';

const KeyFeatures = () => {
    return (
        <div className="key-features">

            {/* feature 1 */}
            <div className="feature-card">
                <img src="/Assets/certification.svg" alt="Certification Icon" className="feature-icon" />
                <div className="feature-card-content">
                    <h5>Industry-Recognized Certifications</h5>
                    <p>Gain certifications in A+, ICDL, and Project Management.</p>
                </div>
            </div>

            {/* feature 2 */}
            <div className="feature-card">
                <img src="/Assets/instructors.svg" alt="Instructors Icon" className="feature-icon" />
                <div className="feature-card-content">
                    <h5>Experienced Instructors</h5>
                    <p>Learn from IT experts with years of industry experience.</p>
                </div>
            </div>

            {/* feature 3 */}
            <div className="feature-card">
                <img src="/Assets/hands-on.svg" alt="Hands-on Learning Icon" className="feature-icon" />
                <div className="feature-card-content">
                    <h5>Hands-on Learning</h5>
                    <p>Project-based learning approach to ensure practical application of skills.</p>
                </div>
            </div>

            {/* feature 4 */}
            <div className="feature-card">
                <img src="/Assets/flexible-schedule.svg" alt="Flexible Schedule Icon" className="feature-icon" />
                <div className="feature-card-content">
                    <h5>Flexible Schedule</h5>
                    <p>Online courses designed to fit your schedule.</p>
                </div>
            </div>

        </div>
    );
};

export default KeyFeatures;