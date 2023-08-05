import React from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavThread() {
  return (
    <div>
         <Navbar expand="lg" className="navthread">
      <Container className='navthread'>
        <Navbar.Brand href="#home"><Link to='/' >Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/studentsdetails">Student Details</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavThread