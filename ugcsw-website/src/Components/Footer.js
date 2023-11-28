import React from 'react';
import '../CSS/Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>University of Ghana</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our History</a></li>
                            <li><a href="#">Mission & Vision</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get Help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>University of Ghana, Legon</li>
                            <li>+233-(0)302-213820</li>
                            <li>pad@ug.edu.gh</li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 University of Ghana | All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
