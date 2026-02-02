import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function RBCardGrid() {
  return (
    <Container className="py-4">

      <Row className="g-3">
        {['Usuarios', 'Cálculo de Sueldos', 'Registro Rápido' ].map((n) => (
          <Col key={n} md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{n}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}