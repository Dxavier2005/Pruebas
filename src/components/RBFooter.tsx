import React from "react";
import Container from "react-bootstrap/Container";

export default function RBFooter() {
  return (
    <footer className="py-4 bg-dark text-light">
      <Container className="d-flex flex-wrap justify-content-between align-items-center gap-2">
        <small className="text-secondary">© {new Date().getFullYear()} Mi App de Prueba</small>
        <div className="d-flex gap-2"></div>
      </Container>
    </footer>
  );
}