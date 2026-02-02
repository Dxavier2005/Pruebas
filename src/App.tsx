import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RBNavbar from "./components/RBNavbar";
import RBFooter from "./components/RBFooter";
import HomeRB from "./pages/Home";
import Registro from "./pages/Registro";
import Sueldo from "./pages/Sueldo";
import Usuarios from "./pages/Usuarios";
import Bono from "./pages/Bono";


export default function App() {
  return (
    <BrowserRouter>
      <RBNavbar />

      <Routes>
        <Route path="/" element={<HomeRB />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/sueldo" element={<Sueldo />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/bono" element={<Bono />} />
      </Routes>

      <RBFooter />
    </BrowserRouter>
  );
}
  

