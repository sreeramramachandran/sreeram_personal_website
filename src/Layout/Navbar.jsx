import React from 'react'
import './Nav.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
      <div className="Navbarpage">
        <Navbar
          variant="dark"
          expand="auto"
          fixed="top"
          className="navbar-start"
        >
          <Container className="nav-container">
            {/* <Navbar.Brand href="/">Home</Navbar.Brand> */}
            

              <Nav className="me-auto">
                <Link to="/" className='nav-features'>
                  <i class="fa-solid fa-house "></i>
                  
                </Link>
                <Link to="/work" className='nav-features'>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  
                </Link>
                <Link to="/about"className='nav-features'>
                  <i class="fa-solid fa-user"></i>
                 
                </Link>
                <Link to="/contact" className='nav-features'>
                  <i class="fa-solid fa-phone"></i>
                  
                </Link>
              </Nav>
              
            
          </Container>
        </Navbar>
      </div>

      <Outlet />
    </div>
  )
}

export default Navigation
