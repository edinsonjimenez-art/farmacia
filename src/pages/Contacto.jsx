import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, X } from "lucide-react";

function Contacto() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="bg-gray-50 min-h-[85vh] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Pónte en <span className="text-emerald-600">Contacto</span>
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna consulta sobre nuestros medicamentos o servicios? Estamos aquí para ayudarte. Déjanos un mensaje o comunícate con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Información de Contacto */}
          <div className="bg-emerald-700 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              <p className="text-emerald-100 text-sm mb-8 leading-relaxed">
                Atendemos tus dudas sobre pedidos, disponibilidad de fármacos y consultas generales.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600/60 p-3 rounded-xl text-white">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Teléfono / WhatsApp</h3>
                    <p className="text-emerald-100 text-sm">+51 918 914 684</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600/60 p-3 rounded-xl text-white">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Correo Electrónico</h3>
                    <p className="text-emerald-100 text-sm break-all">
                      idelrojasflores695@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600/60 p-3 rounded-xl text-white">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Ubicación</h3>
                    <p className="text-emerald-100 text-sm">Lima, Perú</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600/60 p-3 rounded-xl text-white">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Horario de Atención</h3>
                    <p className="text-emerald-100 text-sm">Aun no programado</p>
                    <p className="text-emerald-100 text-sm">Aun no programado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-emerald-600/50 text-xs text-emerald-200">
              Farmacia Siinaje &copy; Todos los derechos reservados.
            </div>
          </div>

          {/* Formulario de Mensaje */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Carlos chaves"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+51 900 000 000"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Asunto
                  </label>
                  <input
                    type="text"
                    name="asunto"
                    required
                    value={formData.asunto}
                    onChange={handleChange}
                    placeholder="Consulta sobre medicamento"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows="4"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition focus:border-emerald-600 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send size={18} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Sección del Mapa de Lima */}
        <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 px-2 flex items-center gap-2">
            <MapPin size={20} className="text-emerald-600" /> Cobertura en Lima, Perú
          </h3>
          <div className="w-full h-80 rounded-xl overflow-hidden">
            <iframe
              title="Mapa de Lima"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249688.3002636737!2d-77.12786361957237!3d-12.026267600862088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5f619ee3ec7%3A0x1420609be0408542!2sLima!5e0!3m2!1ses!2spe!4v1710000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-gray-100 text-center relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={20} />
            </button>

            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ¡Mensaje Recibido!
            </h3>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Gracias por contactarnos. Te responderemos al correo proporcionado en la brevedad posible.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-xl text-sm transition"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contacto;