import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <h2>E-sports</h2>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="home">Home</Nav.Link>
                                <Nav.Link href="home#services">Services</Nav.Link>
                                <Nav.Link href="home#experts">Experts</Nav.Link>
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            {/* <Nav>
                                <Nav.Link as={Link} to="about">About</Nav.Link>
                                {user &&
                                    <Nav>
                                        <Nav.Link as={Link} to="/addservices">Add services</Nav.Link>
                                        <Nav.Link as={Link} to="/manageservices">Manage Service</Nav.Link>
                                        <Nav.Link as={Link} to="/order">Order</Nav.Link>
                                    </Nav>
                                }
                                {
                                    user ?
                                        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                        :
                                        <Nav.Link as={Link} to="login">
                                            Login
                                        </Nav.Link>}
                            </Nav> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;