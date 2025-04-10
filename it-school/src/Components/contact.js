import React from 'react';
import ContactHeader from './contactHeader';
import '../Styles/contact.css';
import Footer from '../Components/footer';

function Contact() {
  return (
    <div>
      <ContactHeader />
      {/* <div className="text-center mb-4">
          <h2>Get a Free 30-Minute Consultation</h2>
          <p>Discuss how we can assist you with your business needs.</p>
        </div> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            {/* <h3>Contact Us</h3> */}
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="mb-3">
                <label htmlFor="company" className="form-label">Company Name</label>
                <input type="text" className="form-control" id="company" placeholder="Enter your company name" />
              </div>
              <div className="mb-3">
                <label htmlFor="service" className="form-label">Type of Service Needed</label>
                <select className="form-select" id="service">
                  <option>Administrative</option>
                  <option>Customer Support</option>
                  <option>Social Media</option>
                  <option>Project Management</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>


        <div className="mt-5">
          <h3>Frequently Asked Questions</h3>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq1">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  How do I get started with a virtual assistant?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Getting started is easy! Simply fill out the contact form, and we’ll reach out to schedule your free consultation.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="faq2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  What tasks can a virtual assistant handle for my business?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Virtual assistants can handle a variety of tasks, including administrative support, customer service, social media management, and more.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default Contact;