import React from 'react';
import './Footer.css';
import logo from '../../images/brand_logo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="section footer-classic context-dark bg-image py-4 pl-5" style={{ background: ' #343A40' }}>
            <div className="container">
                <div className="row row-30">
                    <div className="col-md-4 col-xl-5">
                        <div className="pr-xl-4">
                            <Link className="brand pt-3 pb-3" to="/">
                                <img className="brand-logo-light" src={logo} alt="" width="140" height="37" />
                            </Link>
                            <p>We are an award-winning creative school</p>
                            <p className="rights">
                                <span>©  </span>
                                <span className="copyright-year">{new Date().getFullYear()}</span>
                                <span>. </span>
                                <span>All Rights Reserved.</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Contacts</h5>
                        <dl className="contact-list">
                            <dt>Address:</dt>
                            <dd>Dhaka, Bangladesh</dd>
                        </dl>
                        <dl className="contact-list">
                            <dt>email:</dt>
                            <dd>
                                <a href="mailto:#">myschool@gmail.com</a>
                            </dd>
                        </dl>
                        <dl className="contact-list">
                            <dt>phones:</dt>
                            <dd>+88387983783</dd>
                        </dl>
                    </div>
                    <div className="col-md-4 col-xl-3">
                        <h5>Links</h5>
                        <ul className="nav-list">
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Awards</a>
                            </li>
                            <li>
                                <a href="/">Contacts</a>
                            </li>
                            <li>
                                <a href="/">Our Success</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
