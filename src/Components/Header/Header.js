import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/brand_logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/">
                <Navbar.Brand>
                    <img style={{ width: 60 }} src={logo} alt="" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{ justifyContent: 'flex-end' }}>
                <Nav className="nav-links">
                    <Link className="single-nav-link" to="/home">
                        Home
                    </Link>
                    <Link className="single-nav-link" to="/services">
                        Services
                    </Link>

                    <Link to="/about">
                        <Button className="mr-3" variant="primary">
                            About
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button className="mr-3" variant="success">
                            Contact
                        </Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
