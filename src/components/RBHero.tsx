import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function RBHero() {
  return (
    <section className="py-5 bg-light border-bottom">
      <Container>
        <h1 className="display-6 fw-bold mb-2">Bienvenido a Mi App!</h1>
        <p className="text-secondary mb-4">Aplicación de ejemplo usando Bootstrap que 
                                           simula un frontend 
                                           para migrar a React + Ant Design.</p>

        <Stack direction="horizontal" gap={2} className="flex-wrap">
        </Stack>
      </Container>
    </section>
  );
}