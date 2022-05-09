import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (

        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h2>E-Sports</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home#products">Products</Nav.Link>
                    </Nav>
                    <Nav>
                        {user && <Nav.Link as={Link} to="/manageproducts">Manage Product</Nav.Link>}
                        {user && <Nav.Link as={Link} to="/addproducts">Add Products</Nav.Link>}
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>

                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
};

export default Header;