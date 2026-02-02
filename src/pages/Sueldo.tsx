import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export default function SumPage() {
  const [sueldoBasico, setSueldoBasico] = useState("");
  const [primas, setPrimas] = useState("");
  const [deducciones, setDeducciones] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  const handleCalcular = () => {
    const basico = parseFloat(sueldoBasico) || 0;
    const primasVal = parseFloat(primas) || 0;
    const deduccionesVal = parseFloat(deducciones) || 0;
    
    const sueldoNeto = basico + primasVal - deduccionesVal;
    setResultado(sueldoNeto);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h2 className="fw-bold mb-4">Calculadora de Sueldo Neto</h2>

        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Sueldo básico"
            value={sueldoBasico}
            onChange={(e) => setSueldoBasico(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Primas"
            value={primas}
            onChange={(e) => setPrimas(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Deducciones"
            value={deducciones}
            onChange={(e) => setDeducciones(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" onClick={handleCalcular}>
          Calcular
        </Button>

        {resultado !== null && (
          <div className="mt-4">
            <h5>Sueldo Neto: <strong>${resultado.toFixed(2)}</strong></h5>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
