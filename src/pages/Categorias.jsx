import { useState } from "react";
import { ShoppingCart, Check, Pill, Stethoscope, HeartPulse, Sparkles, ShieldAlert, Baby } from "lucide-react";
import { useCart } from "../context/CartContext";

// Importación de las imágenes locales
import paracetamolImg from "../assets/pastillas/paracetamol1.jpg";
import ibuprofenoImg from "../assets/pastillas/iboprofeno.jpg";
import vitaminaCImg from "../assets/pastillas/vitamina c.jpg";
import alcoholImg from "../assets/pastillas/Alcohol.jpg";

// Lista de Categorías con íconos e información
const categoryList = [
  {
    id: "analgesicos",
    name: "Analgésicos",
    description: "Alivio del dolor, fiebre e inflamación",
    icon: Pill,
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    id: "vitaminas",
    name: "Vitaminas y Suplementos",
    description: "Refuerzo inmunológico y energía diaria",
    icon: Sparkles,
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    id: "cuidado-personal",
    name: "Cuidado Personal",
    description: "Desinfección, higiene y botiquín",
    icon: ShieldAlert,
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    id: "salud-cardiovascular",
    name: "Salud Cardiovascular",
    description: "Control de presión y bienestar cardíaco",
    icon: HeartPulse,
    color: "bg-red-50 text-red-600 border-red-200",
  },
  {
    id: "pediatria",
    name: "Pediatría",
    description: "Medicamentos y cuidado infantil",
    icon: Baby,
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    id: "equipo-medico",
    name: "Equipo Médico",
    description: "Termómetros, tensiómetros y más",
    icon: Stethoscope,
    color: "bg-cyan-50 text-cyan-600 border-cyan-200",
  },
];

// Productos asociados por categoría
const allProducts = [
  {
    id: 1,
    name: "Paracetamol 500 mg",
    categoryId: "analgesicos",
    categoryName: "Analgésicos",
    description: "Analgésico y antipirético para aliviar dolor y fiebre.",
    price: 8.90,
    image: paracetamolImg,
  },
  {
    id: 2,
    name: "Ibuprofeno 400 mg",
    categoryId: "analgesicos",
    categoryName: "Analgésicos",
    description: "Alivia dolores inflamatorios, de cabeza y musculares.",
    price: 12.50,
    image: ibuprofenoImg,
  },
  {
    id: 3,
    name: "Vitamina C 1000 mg",
    categoryId: "vitaminas",
    categoryName: "Vitaminas y Suplementos",
    description: "Efectivo antioxidante que refuerza el sistema inmunológico.",
    price: 24.90,
    image: vitaminaCImg,
  },
  {
    id: 4,
    name: "Alcohol Medicinal 96°",
    categoryId: "cuidado-personal",
    categoryName: "Cuidado Personal",
    description: "Solución antiséptica ideal para desinfección de la piel.",
    price: 7.50,
    image: alcoholImg,
  },
];

function Categorias() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [addedItem, setAddedItem] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  // Filtrado de productos por categoría elegida
  const filteredProducts =
    selectedCategory === "todas"
      ? allProducts
      : allProducts.filter((p) => p.categoryId === selectedCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Categorías de <span className="text-emerald-600">Productos</span>
          </h1>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Explora nuestro catálogo organizado por especialidades farmacéuticas para encontrar rápidamente lo que necesitas.
          </p>
        </div>

        {/* Grilla de Tarjetas de Categorías */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryList.map((cat) => {
            const IconComponent = cat.icon;
            const isSelected = selectedCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() =>
                  setSelectedCategory(isSelected ? "todas" : cat.id)
                }
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                  isSelected
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-lg scale-[1.02]"
                    : "bg-white hover:border-emerald-500 hover:shadow-md border-gray-100"
                }`}
              >
                <div
                  className={`p-3.5 rounded-xl border ${
                    isSelected
                      ? "bg-white/20 text-white border-transparent"
                      : cat.color
                  }`}
                >
                  <IconComponent size={26} />
                </div>

                <div>
                  <h3
                    className={`font-bold text-lg ${
                      isSelected ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {cat.name}
                  </h3>
                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      isSelected ? "text-emerald-100" : "text-gray-500"
                    }`}
                  >
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Barra de estado del filtro */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-4">
          <h2 className="text-xl font-bold text-gray-800">
            {selectedCategory === "todas"
              ? "Todos los Productos Disponibles"
              : `Medicamentos en "${
                  categoryList.find((c) => c.id === selectedCategory)?.name
                }"`}
          </h2>

          {selectedCategory !== "todas" && (
            <button
              onClick={() => setSelectedCategory("todas")}
              className="text-xs font-semibold text-emerald-600 hover:underline cursor-pointer"
            >
              Ver todas las categorías
            </button>
          )}
        </div>

        {/* Grilla de Productos Filtrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-500 font-medium">
                Próximamente agregaremos más medicamentos a esta categoría.
              </p>
            </div>
          ) : (
            filteredProducts.map((product) => (
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
                      {product.categoryName}
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
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Categorias;