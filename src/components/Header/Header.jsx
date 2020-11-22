import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = (props) => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>Ryan Garza</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/portfolio">
                                <Nav.Link>Portfolio</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                            <Nav.Link href="https://drive.google.com/file/d/17X8VpFT-gMVh2KuuQ4WFPoS1DXScLquS/view?usp=sharing" target="_blank">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header