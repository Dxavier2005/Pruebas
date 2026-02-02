import { Paper, Typography } from "@mui/material";

export default function AboutPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Registrar Usuario
      </Typography>

      <Typography color="text.secondary">
        Nombre :
      </Typography>

      <Typography sx={{ mt: 2 }}>
        Edad :
      </Typography>
    </Paper>
  );
}