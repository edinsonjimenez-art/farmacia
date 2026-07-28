import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/medicamentos", label: "Medicamentos" },
  { to: "/categorias", label: "Categorías" },
  { to: "/contacto", label: "Contacto" },
];

function Navbar() {
  const [cartCount] = useState(0);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-emerald-700 via-emerald-600 to-green-600 shadow-lg border-b border-[#E7D8AE]/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-10 h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Menú */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative px-4 py-2 text-[15px] font-semibold text-white/90 hover:text-[#F3E9CB] transition-all duration-300"
            >
              {link.label}

              <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] bg-gradient-to-r from-[#E7D8AE] to-[#C9A857] scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-4">

          {/* Carrito */}
          <Link
            to="/carrito"
            className="relative flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Carrito"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39A2 2 0 0 0 9.68 16h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>

            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#C9A857] text-emerald-900 text-[10px] font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-[#FAF4E3] text-emerald-800 font-semibold border border-[#E2D1A0] hover:bg-[#F1E4BE] transition-all duration-300 shadow-md"
          >
            Iniciar sesión
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;