import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Capa oscura */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/65"></div>

        {/* Contenido */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="-mt-16 max-w-3xl text-center text-white">

            {/* Título */}
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Cuidamos de tu salud
              <span className="block mt-2 text-emerald-400">
                con calidad y confianza
              </span>
            </h1>

            {/* Descripción */}
            <p className="mx-auto mt-8 max-w-2xl text-base md:text-lg leading-8 text-gray-200">
              Ofrecemos medicamentos, vitaminas y productos para el cuidado de
              la salud con altos estándares de calidad, atención profesional y
              un servicio confiable pensado para el bienestar de toda la
              familia.
            </p>

            {/* Botones */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <Link
                to="/medicamentos"
                className="rounded-lg bg-emerald-600 px-8 py-3 text-base font-semibold shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:scale-105"
              >
                Ver medicamentos
              </Link>

              <Link
                to="/contacto"
                className="rounded-lg border border-white/80 px-8 py-3 text-base font-semibold transition-all duration-300 hover:bg-white hover:text-emerald-700"
              >
                Contáctanos
              </Link>

            </div>

          </div>
        </div>

        {/* Flecha */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 opacity-80"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Categorías */}
      <Categories />

      {/* Productos destacados */}
      <FeaturedProducts />
      <WhyChooseUs />
    </>
  );
}

export default Home;