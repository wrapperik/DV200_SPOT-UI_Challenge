import React from 'react';
import '../Styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h4>Codeversity</h4>
                    <p>Empowering your IT career with intensive, career-focused bootcamps.</p>
                </div>
                <div className="footer-center">
                    <h5>Quick Links</h5>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h5>Contact Us</h5>
                    <p>Email: info@codeversity.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Codeversity. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;