import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import ZupayIcon from "./assets/img/Zupay.svg"


export const Navb = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand ><img src={ZupayIcon} style={{width:"30%"}} alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#XYZ">XYZ</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#ABC">More ABC</Nav.Link>
              <Nav.Link eventKey={2} href="#ZuPay">
                ZuPay
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navb;