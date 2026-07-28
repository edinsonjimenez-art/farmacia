import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Medicamentos from "../pages/Medicamentos";
import Categorias from "../pages/Categorias";
import Carrito from "../pages/Carrito";
import Contacto from "../pages/Contacto";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/medicamentos"
        element={
          <MainLayout>
            <Medicamentos />
          </MainLayout>
        }
      />

      <Route
        path="/categorias"
        element={
          <MainLayout>
            <Categorias />
          </MainLayout>
        }
      />

      <Route
        path="/carrito"
        element={
          <MainLayout>
            <Carrito />
          </MainLayout>
        }
      />

      <Route
        path="/contacto"
        element={
          <MainLayout>
            <Contacto />
          </MainLayout>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;