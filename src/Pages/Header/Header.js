import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Carosel from './Carosel/Carosel';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar className='p-3 ' fixed='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container className='w-50 mx-auto '>
                    <Navbar.Brand className="for-nav" href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >

                            <Navbar.Brand className="for-nav" href="#About">About</Navbar.Brand>

                            <Navbar.Brand className="for-nav" href="#skill">Skills</Navbar.Brand>

                            <Navbar.Brand className="for-nav" href="#service">Service</Navbar.Brand>
                            <Navbar.Brand className="for-nav" href="#protfolio">Portfolio</Navbar.Brand>
                            <Navbar.Brand className="for-nav" href="#contact">Contract</Navbar.Brand>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;