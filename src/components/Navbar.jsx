import { useState } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center transition-transform duration-300 hover:scale-105"
          >
            <img src={logo} alt="Logo Siinaje" className="h-12 sm:h-16 w-auto object-contain" />
          </Link>

          {/* Menú Escritorio */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-gray-700 font-semibold transition duration-300 hover:text-emerald-600 group text-sm"
              >
                {link.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-center scale-x-0 rounded-full bg-emerald-600 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </nav>

          {/* Buscador Escritorio */}
          <div className="hidden xl:flex items-center w-80">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar medicamentos..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white"
              />
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* Acciones */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Carrito */}
            <Link
              to="/carrito"
              className="relative rounded-full p-2.5 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-600"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white transition-all">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Login Escritorio */}
            <Link
              to="/login"
              className="hidden sm:flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-sm text-white transition duration-300 hover:bg-emerald-700 shadow-sm"
            >
              <User size={18} />
              Iniciar sesión
            </Link>

            {/* Botón Hamburguesa Móvil */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition lg:hidden cursor-pointer"
              aria-label="Abrir menú"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil (Flotante y ordenado) */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl px-6 py-5 space-y-5 animate-in slide-in-from-top-2 duration-200">
          {/* Buscador Móvil */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar medicamentos..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-sm outline-none focus:border-emerald-500 focus:bg-white transition"
            />
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Lista de Navegación */}
          <nav className="flex flex-col space-y-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 rounded-xl text-gray-700 font-semibold hover:bg-emerald-50 hover:text-emerald-600 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Botón Iniciar Sesión en Móvil */}
          <div className="pt-2 border-t border-gray-100">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 py-3 px-5 font-semibold text-white transition hover:bg-emerald-700 w-full shadow-md"
            >
              <User size={18} />
              Iniciar sesión
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;