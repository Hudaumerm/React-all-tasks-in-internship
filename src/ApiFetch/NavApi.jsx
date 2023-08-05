import React from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavApi() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/card'> Card</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/table'>Table</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavApi