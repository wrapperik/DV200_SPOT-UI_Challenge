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
                        <p>John is a visionary leader with over 10 years of experience in managing virtual assistant teams. His expertise lies in strategic planning and business development.</p>
                    </div>
                </div>

                <div className="team-card">
                    <img src="/Assets/person2.jpg" alt="Team Member 2" className="team-member-image" />
                    <div className="team-card-content">
                        <h5>Sky Summer</h5>
                        <p>Head Developer</p>
                        <p>Sky specializes in administrative tools and automation, ensuring seamless workflows for clients. With 8 years of experience, she excels in creating efficient systems.</p>
                    </div>
                </div>

                <div className="team-card">
                    <img src="/Assets/person3.jpg" alt="Team Member 3" className="team-member-image" />
                    <div className="team-card-content">
                        <h5>Peter Doe</h5>
                        <p>Assistant Manager</p>
                        <p>Peter is an expert in customer service and marketing strategies. With over 5 years of experience, he ensures client satisfaction and effective brand communication.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MeetOurTeam;