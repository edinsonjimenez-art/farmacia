import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative">

      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />

      {/* Botón Flotante de WhatsApp visible en todas las páginas */}
      <WhatsAppButton />

    </div>
  );
}

export default MainLayout;