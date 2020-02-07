import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap';

function Header({ title }) {
    return (
        <>
            <Navbar bg="primary" expand="lg" className="navbar navbar-expand-lg navbar-dark bg-primary" sticky="top">
                <LinkContainer to="/">
                    <Navbar.Brand> { title } </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="User" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/profile">Profile</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/recipes">My recipes</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>Login</NavDropdown.Item>
                        </NavDropdown>
                        <LinkContainer to="/home" activeClassName="active">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/recipes" activeClassName="active">
                            <Nav.Link>Recipes</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/register" activeClassName="active">
                            <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about" activeClassName="active">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Header