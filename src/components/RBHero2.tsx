import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

export default function RBHero() {
  return (
    <section className="py-5 bg-light border-bottom">
      <Container>        
        <p className="text-secondary mb-4">Bienvenido al sistema de usuarios y nómina.</p>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
        </Stack>
      </Container>
      <Container>        
        <p className="text-secondary mb-4">Recuerda completar todos los campos antes de calcular.</p>
        <Stack direction="horizontal" gap={2} className="flex-wrap">
        </Stack>
      </Container>
    </section>
  );
}


