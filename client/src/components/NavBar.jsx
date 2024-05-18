import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function NavBar() {

    const location = useLocation();
    const pathSegment = location.pathname.split('/')?.[1];

    return (
        <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">HowToAbroad</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link active={pathSegment == ''} href="/">Home</Nav.Link>
                        <Nav.Link active={pathSegment == 'courses'} href="/courses">Search Course</Nav.Link>
                        <Nav.Link active={pathSegment == 'portal'} href="/portal">Portal</Nav.Link>
                        <Nav.Link active={pathSegment == 'login'} href="/login">Login</Nav.Link>
                    </Nav>

                    <Nav className="ms-auto">
                        <Navbar.Text>
                            Assignee - Anshul Sasan
                        </Navbar.Text>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;