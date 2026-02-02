import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import UsersPage from "./UsersPage";
import SueldoPage from "./SueldoPage";
import BonoPage from "./BonoPage";
import RegisterPage from "./RegisterPage";
import NotFoundPage from "./NotFoundPage";

const linkBtnSx = {
  color: "white",
  textTransform: "none",
  borderRadius: 2,
  px: 2,
  "&.active": { bgcolor: "rgba(255,255,255,.12)" },
};

export default function App() {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#343a40" }}>
        <Toolbar sx={{ gap: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, mr: 2 }}>
            Mi App Bootstrap
          </Typography>

          <Button component={NavLink} to="/" end sx={linkBtnSx}>
            Home
          </Button>
          <Button component={NavLink} to="/Usuarios" sx={linkBtnSx}>
            Usuarios
          </Button>
          <Button component={NavLink} to="/sueldo" sx={linkBtnSx}>
            Sueldo
          </Button>
          <Button component={NavLink} to="/bono" sx={linkBtnSx}>
            Bono
          </Button>
          <Button component={NavLink} to="/registro" sx={linkBtnSx}>
            Registro
          </Button>

          <Box sx={{ flex: 1 }} />
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/usuarios" element={<UsersPage />} />
          <Route path="/sueldo" element={<SueldoPage />} />
          <Route path="/bono" element={<BonoPage />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </>
  );
}