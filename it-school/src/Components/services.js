import React from 'react';
import ServicesHeader from './servicesHeader';
import services from '../Styles/services.css';
import Footer from '../Components/footer';

function Services() {
  return (
    <div>
      <ServicesHeader />
      <div className="services-content">
        <h2>Our Services</h2>
        <div className="service-category">
          <h3>Administrative Support</h3>
          <p>Calendar management, travel planning, document creation, and data entry.</p>
        </div>
        <div className="service-category">
          <h3>Customer Service Support</h3>
          <p>Handling customer inquiries, support ticket management, phone call assistance, and live chat support.</p>
        </div>
        <div className="service-category">
          <h3>Social Media Management</h3>
          <p>Creating and scheduling posts, managing engagement, and developing growth strategies for platforms like Instagram, LinkedIn, and Facebook.</p>
        </div>
        <div className="service-category">
          <h3>Project Management</h3>
          <p>Task tracking, deadline management, and team coordination through tools like Asana and Trello.</p>
        </div>
        <div className="service-category">
          <h3>Specialized Support</h3>
          <p>Bookkeeping, CRM management, event planning, and market research.</p>
        </div>
        <div className="cta-button">
          <button onClick={() => window.location.href = '/contact'}>Book a Consultation</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;