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

                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/portfolio">
                                <Nav.Link>Portfolio</Nav.Link>
                            </LinkContainer>

                            <Nav.Link href="https://github.com/rgarzadev" target="_blank">Github</Nav.Link>

                            <Nav.Link href="#contact">Contact</Nav.Link>

                            <Nav.Link href="https://drive.google.com/file/d/1WLZX93bEUIhtgyu0pKaXIVRoDiiZuJdi/view?usp=sharing" target="_blank">Resume</Nav.Link>
                            
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
