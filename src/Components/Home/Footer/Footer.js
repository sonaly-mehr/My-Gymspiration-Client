import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container">
                <div className="footer-top">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="single-footer">
                            <h6>Fitzeous Theme</h6>
                            <p>Fitzeous WordPress theme is <br />specially designed for Fitness, Gym <br />and other related businesses.</p>
                        </div>
                    </div>
                    <div className="col-md-2 col-12">
                        <div className="single-footer">
                            <h6>Quick Links</h6>
                            <ul>
                                <li>-About Us</li>
                                <li>-News & Tips</li>
                                <li>-Events</li>
                                <li>-Coachers</li>
                                <li>-Healthy Food</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                    <div className="single-footer">
                            <h6>Our Services</h6>
                            <ul>
                                <li>-Balance Body Mind</li>
                                <li>-Nutrition Plan</li>
                                <li>-Fitness & Performance</li>
                                <li>-Weight Loss Program</li>
                                <li>-Cardio Excercise</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-3 col-12">
                    <div className="single-footer">
                            <h6>Get in Touch</h6>
                            <ul>
                                <p>54B, Tailstoi Town 5238 MT, La <br/>city, IA 522364</p>
                                <p>+012912183811</p>
                                <p>example@example.com</p>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                </div>

                <div className="footer-bottom">
                    <div>
                    <p> Fitzeous © 2021 All Rights Reserved.</p>
                    </div>
                    <div>
                    <p className="p-right">Developed by bolvo.com.</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;