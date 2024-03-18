"use client";
import Link from "next/link";
import Image from "next/image"
import ThemeSwitch from "@/app/ThemeSwitch";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";

const Navi = () => {
  return (
    <Navbar expand="lg" className="bg-danger">
    <Container>
      <ThemeSwitch/>
      <Navbar.Brand href="#home">BRF Röda Briljant</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navi