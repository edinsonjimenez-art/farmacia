import { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaEnvelope, FaTools, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Muestra el modal de "En desarrollo" al intentar iniciar sesión
    setShowModal(true);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gray-50 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
      >
        {/* Encabezado */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Bienvenido de nuevo</h2>
          <p className="text-gray-500 text-sm mt-2">
            Ingresa a tu cuenta de <span className="text-amber-600 font-semibold">Siinaje</span>
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Campo Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Correo Electrónico
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <FaEnvelope />
              </div>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition"
              />
            </div>
          </div>

          {/* Campo Contraseña */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-xs text-amber-600 hover:underline font-medium bg-transparent border-none p-0 cursor-pointer"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <FaLock />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Botón de Iniciar Sesión */}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl text-sm shadow-md transition duration-200 flex items-center justify-center gap-2"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Footer con el botón de Registro */}
        <div className="mt-8 text-center text-xs text-gray-500">
          ¿No tienes una cuenta?{" "}
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="text-amber-600 font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer"
          >
            Regístrate aquí
          </button>
        </div>
      </motion.div>

      {/* MODAL DE "AÚN ESTAMOS TRABAJANDO EN ELLO" */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-gray-100 text-center relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              >
                <FaTimes />
              </button>

              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <FaTools />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ¡Próximamente!
              </h3>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Aún estamos trabajando en esta funcionalidad para brindarte la mejor experiencia.
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 rounded-xl text-sm transition"
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Login;