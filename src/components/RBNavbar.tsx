import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function RBNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-secondary">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi App Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav" />
        <Navbar.Collapse id="nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>
            <Nav.Link as={Link} to="/sueldo">Sueldo</Nav.Link>
            <Nav.Link as={Link} to="/bono">Bono</Nav.Link>
            <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}