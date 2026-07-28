import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

function Home() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="-mt-36 max-w-3xl px-6 text-center text-white">

          {/* Texto superior */}
          <span className="text-sm uppercase tracking-[8px] text-emerald-300 font-medium">
             Cuidando tu salud cada día
          </span>

          {/* Título */}
          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-6xl">
            Tu salud,
            <span className="block text-emerald-400">
              nuestra prioridad
            </span>
          </h1>

          {/* Descripción */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-200">
            En <strong>Sünaje</strong> encontrarás medicamentos, vitaminas y
            productos para el cuidado de tu salud, con atención profesional,
            calidad garantizada y precios accesibles para toda tu familia.
          </p>

          {/* Botones */}
          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              to="/medicamentos"
              className="rounded-full bg-emerald-600 px-9 py-4 text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700"
            >
              Ver medicamentos
            </Link>

            <Link
              to="/contacto"
              className="rounded-full border border-white px-9 py-4 text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-emerald-700"
            >
              Contáctanos
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;