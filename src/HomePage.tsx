import { Paper, Typography, TextField } from "@mui/material";

export default function HomePage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h4" fontWeight={900} gutterBottom>
        Bienvenido A Mi App !👋
      </Typography>

      <Typography color="text.secondary">
        Aplicación de ejemplo usando Bootstrap que simula un frontend para migrar a React + Ant Design.
      </Typography>

      

    </Paper>
    
  );
  
}