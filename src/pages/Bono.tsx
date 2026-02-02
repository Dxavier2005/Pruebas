import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

export default function MultiplyPage() {
  const [sueldoDiario, setSueldoDiario] = useState("");
  const [dias, setDias] = useState("5");
  const [resultado, setResultado] = useState<number | null>(null);

  const handleCalcular = () => {
    const sueldo = parseFloat(sueldoDiario) || 0;
    const diasNum = parseInt(dias) || 0;
    
    const bono = sueldo * diasNum;
    setResultado(bono);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h2 className="fw-bold mb-4">Bono Vacacional</h2>

        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Sueldo diario"
            value={sueldoDiario}
            onChange={(e) => setSueldoDiario(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Select 
            value={dias}
            onChange={(e) => setDias(e.target.value)}
          >
            <option value="5">5 días</option>
            <option value="10">10 días</option>
            <option value="15">15 días</option>
            <option value="20">20 días</option>
            <option value="30">30 días</option>
          </Form.Select>
        </Form.Group>

        <Button variant="success" onClick={handleCalcular}>
          Calcular
        </Button>

        {resultado !== null && (
          <div className="mt-4">
            <h5>Bono Vacacional: <strong>${resultado.toFixed(2)}</strong></h5>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
