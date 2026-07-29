import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-white border-t border-gray-200 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Logo e información */}
          <motion.div variants={itemVariants} className="flex flex-col justify-start">
            <h2 className="text-3xl font-bold text-amber-600 mb-5 leading-none">
              Siinaje
            </h2>

            <p className="text-gray-600 leading-relaxed text-left text-sm md:text-base">
              En <strong>Siinaje</strong> nos comprometemos a brindar
              medicamentos y productos para el cuidado de la salud con calidad,
              seguridad y confianza, ofreciendo una atención cercana y un
              servicio responsable para el bienestar de nuestros clientes.
            </p>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div variants={itemVariants} className="flex flex-col justify-start">
            <h3 className="text-3xl font-bold text-gray-900 mb-5 leading-none">
              Enlaces rápidos
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Inicio", path: "/" },
                { name: "Medicamentos", path: "/medicamentos" },
                { name: "Categorías", path: "/categorias" },
                { name: "Contacto", path: "/contacto" },
              ].map((link) => (
                <li key={link.path}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      className="inline-block text-gray-600 hover:text-amber-600 transition-colors text-sm md:text-base"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Redes sociales */}
          <motion.div variants={itemVariants} className="flex flex-col justify-start md:items-end md:text-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-5 leading-none">
              Síguenos
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6 max-w-sm text-sm md:text-base">
              Conoce nuestras promociones, novedades y consejos para el cuidado
              de tu salud a través de nuestras redes sociales.
            </p>

            <div className="flex gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  bg: "bg-blue-600",
                  href: "#",
                  label: "Facebook",
                },
                {
                  icon: <FaInstagram />,
                  bg: "bg-pink-500",
                  href: "#",
                  label: "Instagram",
                },
                {
                  icon: <FaTiktok />,
                  bg: "bg-black",
                  href: "#",
                  label: "TikTok",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-11 h-11 rounded-full ${social.bg} text-white flex items-center justify-center shadow-md`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Barra de copyright inferior */}
      <motion.div
        className="border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-amber-600">Siinaje</span>.
            Todos los derechos reservados.
          </p>

          <p className="text-sm text-gray-500">
            Calidad • Confianza • Bienestar
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;