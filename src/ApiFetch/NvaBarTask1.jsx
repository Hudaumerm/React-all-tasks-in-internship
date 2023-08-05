import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NvaBarTask1() {
  return (
    <div>
         <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to='/Dresses'>Dress</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/items'>Product</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/men">Men's Clothing</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               <Link to="/jwelery">Jwelery</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="electro">Electronics</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               <Link to="/womens">Women's Clothing</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NvaBarTask1