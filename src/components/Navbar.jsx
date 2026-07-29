import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/medicamentos", label: "Medicamentos" },
  { to: "/categorias", label: "Categorías" },
  { to: "/contacto", label: "Contacto" },
];

function Navbar() {
  // Obtenemos el contador total dinámico desde el Carrito
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto"
            />
          </Link>

          {/* Menú */}
          <nav className="hidden lg:flex items-center gap-8">

            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-gray-700 font-medium transition duration-300 hover:text-emerald-600 group"
              >
                {link.label}

                <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-center scale-x-0 rounded-full bg-emerald-600 transition-transform duration-300 group-hover:scale-x-100"></span>

              </Link>
            ))}

          </nav>

          {/* Buscador */}
          <div className="hidden xl:flex items-center w-80">

            <div className="relative w-full">

              <input
                type="text"
                placeholder="Buscar medicamentos..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
              />

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

            </div>

          </div>

          {/* Acciones */}
          <div className="flex items-center gap-4">

            {/* Carrito */}
            <Link
              to="/carrito"
              className="relative rounded-full p-2.5 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              <ShoppingCart size={23} />

              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white transition-all scale-100">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 font-medium text-white transition duration-300 hover:bg-emerald-700"
            >
              <User size={18} />
              Iniciar sesión
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;