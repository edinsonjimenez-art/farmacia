import { useState } from "react";
import { FaWhatsapp, FaTimes, FaRobot } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Configura tu número (con código de país sin +) y tu mensaje
  const phoneNumber = "918914684"; // Reemplaza por tu número real
  const defaultMessage = "¡Hola! Necesito información sobre un medicamento.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Ventana de chat del Asistente */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden text-gray-800"
          >
            {/* Cabecera del Asistente */}
            <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                    <FaRobot />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Asistente Siinaje</h4>
                  <p className="text-xs text-emerald-100">En línea • Responde al instante</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Cerrar chat"
              >
                <FaTimes />
              </button>
            </div>

            {/* Cuerpo del Mensaje */}
            <div className="p-4 bg-emerald-50/50 space-y-3">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs leading-relaxed text-gray-700 border border-gray-100">
                👋 ¡Hola! Soy tu asistente de <strong>Farmacia Siinaje</strong>. ¿En qué te podemos ayudar hoy?
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <FaWhatsapp className="text-base" /> Iniciar chat en WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante Principal */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-colors focus:outline-none"
        aria-label="Asistente de WhatsApp"
      >
        {isOpen ? (
          <FaTimes className="w-7 h-7" />
        ) : (
          <>
            <FaWhatsapp className="w-8 h-8" />
            {/* Indicador de notificación badge */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
}

export default WhatsAppButton;