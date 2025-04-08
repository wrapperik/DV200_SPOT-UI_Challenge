import React from 'react';
import '../Styles/aboutUs.css';

const MeetOurTeam = () => {
    return (
        <div>
            <h1>Meet Our Team</h1>

            <div className="team-card-container">

                <div className="team-card">
                    <img src="/Assets/person1.jpg" alt="Team Member 1" className="team-member-image" />
                    <div className="team-card-content">
                        <h5>John Patrick</h5>
                        <p>CEO & Founder</p>
                        <p>John is a seasoned entrepreneur with over 10 years of experience in the industry.</p>
                    </div>
                </div>

                <div className="team-card">
                    <img src="/Assets/person2.jpg" alt="Team Member 1" className="team-member-image" />
                    <div className="team-card-content">
                        <h5>Sky Summer</h5>
                        <p>Head Developer</p>
                        <p>Sky is an expert developer with over 8 years of experience in the industry.</p>
                    </div>
                </div>

                <div className="team-card">
                    <img src="/Assets/person3.jpg" alt="Team Member 1" className="team-member-image" />
                    <div className="team-card-content">
                        <h5>Peter Doe</h5>
                        <p>Assistant Manager</p>
                        <p>Peter is a seasoned developer with over 5 years of experience in the industry.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MeetOurTeam;