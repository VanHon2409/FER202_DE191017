import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="#home">🎬 MovieManager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#movies">Movies</Nav.Link>
                    </Nav>
                    {user && (
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className="me-3">
                                Signed in as: <span className="text-info">{user.fullName} ({user.role})</span>
                            </Navbar.Text>
                            <Button variant="outline-danger" size="sm" onClick={logout}>Logout</Button>
                        </Navbar.Collapse>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
