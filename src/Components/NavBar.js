import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {useState, useEffect} from 'react'
import logo from '../assets/img/Shashwat Logo.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export default function NavBar() {

    const [active, setActive] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(()=>{
        const OnScroll = ()=>{
            if(window.scrollY>50){ // If the scroll is more than the height of 50
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", OnScroll);
        return ()=>{
            window.removeEventListener("scroll", OnScroll);
        }
    }, [])

    const activeLink = (value) =>{
        setActive(value);
    }

  return (
    <Navbar className={scrolled ? 'scrolled':''} expand="md">
    <Container>
      <Navbar.Brand href="#home" className='me-auto'>
        <img src={logo} alt="Logo" style={{width : '200px', height: '120px'}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
    
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className={active === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=>{activeLink('home')}}>Home</Nav.Link>
          <Nav.Link href="#skills" className={active === 'skills' ? 'active navbar-link':'navbar-link'} onClick={()=>{activeLink('skills')}}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={active === 'projects' ? 'active navbar-link':'navbar-link'} onClick={()=>{activeLink('projects')}}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
            </div>
        
        <button className="vvd"  onClick = {()=>{
            document.getElementById('connect').scrollIntoView();
        }}>
            <span>Lets Connect</span>
        </button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
