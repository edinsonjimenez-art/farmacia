import { useState, useEffect } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight, Search, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

// Importación de imágenes locales
import paracetamolImg from "../assets/pastillas/paracetamol1.jpg";
import ibuprofenoImg from "../assets/pastillas/iboprofeno.jpg";
import vitaminaCImg from "../assets/pastillas/vitamina c.jpg";
import alcoholImg from "../assets/pastillas/Alcohol.jpg";

// Datos para el Carrusel
const carouselSlides = [
  {
    id: 1,
    title: "Cuida tu salud esta temporada",
    subtitle: "Descuentos en Analgésicos y Vitaminas",
    image: paracetamolImg,
    badge: "Oferta Especial",
  },
  {
    id: 2,
    title: "Refuerza tus defensas",
    subtitle: "Suplementos y Vitamina C de alta pureza",
    image: vitaminaCImg,
    badge: "Destacado",
  },
  {
    id: 3,
    title: "Botiquín y Desinfección",
    subtitle: "Alcohol de 96° y antisépticos con entrega rápida",
    image: alcoholImg,
    badge: "Esenciales",
  },
];

// Lista General de Medicamentos
const allProducts = [
  {
    id: 1,
    name: "Paracetamol 500 mg",
    category: "Analgésicos",
    description: "Analgésico y antipirético para aliviar dolor y fiebre.",
    price: 8.90,
    image: paracetamolImg,
  },
  {
    id: 2,
    name: "Ibuprofeno 400 mg",
    category: "Analgésicos",
    description: "Alivia dolores inflamatorios, dolores de cabeza y musculares.",
    price: 12.50,
    image: ibuprofenoImg,
  },
  {
    id: 3,
    name: "Vitamina C 1000 mg",
    category: "Vitaminas",
    description: "Efectivo antioxidante que refuerza el sistema inmunológico.",
    price: 24.90,
    image: vitaminaCImg,
  },
  {
    id: 4,
    name: "Alcohol Medicinal 96°",
    category: "Cuidado Personal",
    description: "Solución antiséptica ideal para desinfección de la piel y heridas.",
    price: 7.50,
    image: alcoholImg,
  },
];

const categories = ["Todos", "Analgésicos", "Vitaminas", "Cuidado Personal"];

function Medicamentos() {
  const { addToCart } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [addedItem, setAddedItem] = useState(null);

  // Cambio automático del carrusel cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  // Filtrado por categoría y término de búsqueda
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* --- SECCIÓN 1: CARRUSEL DE IMÁGENES --- */}
        <section className="relative overflow-hidden rounded-3xl bg-emerald-900 text-white shadow-xl h-[340px] sm:h-[400px]">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-between p-8 sm:p-12 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="max-w-md z-20 space-y-4">
                <span className="inline-block bg-emerald-500/30 text-emerald-300 border border-emerald-400/30 text-xs px-3 py-1 rounded-full font-semibold">
                  {slide.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  {slide.title}
                </h2>
                <p className="text-emerald-100 text-sm sm:text-base">
                  {slide.subtitle}
                </p>
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-transparent z-10"></div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}

          {/* Controles del Carrusel */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full backdrop-blur-md transition cursor-pointer"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full backdrop-blur-md transition cursor-pointer"
          >
            <ChevronRight size={22} />
          </button>

          {/* Indicadores en Puntos (Dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {carouselSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentSlide ? "w-8 bg-emerald-400" : "w-2.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </section>

        {/* --- SECCIÓN 2: BUSCADOR Y FILTROS POR CATEGORÍA --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          {/* Categorías */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Caja de Búsqueda */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Buscar medicamento..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-600"
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* --- SECCIÓN 3: GRILLA DE PRODUCTOS --- */}
        <section>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-500 font-medium">No se encontraron medicamentos.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-xl transition duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-52 w-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md">
                        {product.category}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-bold text-gray-800 text-base mb-1">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block">Precio</span>
                      <span className="text-lg font-bold text-emerald-600">
                        S/ {product.price.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition cursor-pointer active:scale-95 ${
                        addedItem === product.id
                          ? "bg-emerald-800 text-white"
                          : "bg-emerald-600 hover:bg-emerald-700 text-white"
                      }`}
                    >
                      {addedItem === product.id ? (
                        <>
                          <Check size={16} /> Agregado
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={16} /> Agregar
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}

export default Medicamentos;