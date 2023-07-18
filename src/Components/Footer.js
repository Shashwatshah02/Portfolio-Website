import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import logo from '../assets/img/Shashwat Logo.png'

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
export default function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-items-center'>
                <Col sm={6} className='text-sm-start'>
                    <img src={logo} alt="Logo" style={{width : '400px', height: '240px'}}/>
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                    <a href="https://www.linkedin.com/in/shashwat-shah-391abb204/"><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/Shashwatshah02"><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/shashwatshah02/"><img src={navIcon3} alt="" /></a>
                    </div>
                    <p>CopyRight @ 2023. Shashwat Shah (All Rights Reserved)</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
