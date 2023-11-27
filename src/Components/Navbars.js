import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { ArrowRightCircle } from "react-bootstrap-icons";


export const  MyNavbar = () => {
    const [activeLink , setActiveLink] = useState('home');
  const [scrolled , setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if ( window.scrollY > 50){
        setScrolled (true);
      } else {
        setScrolled (false);
      }
    }

    window.addEventListener('scroll' , onScroll);

    return () => window.removeEventListener('scroll' ,onScroll );
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container className='trait'>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggle-icon'><FaBars className='text-white'/></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav"  >
          <Nav className="me-auto d-flex  ms mt-5 nav_1 mb-3">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Accueil</Nav.Link>
            <Nav.Link href="#presentation" className={activeLink === 'presentation' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('presentation')}>Presentation</Nav.Link>
            <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}