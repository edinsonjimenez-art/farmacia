import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Paracetamol 500 mg",
    description: "Analgésico y antipirético.",
    price: 8.90, // Numérico para operar en el carrito
    priceLabel: "S/ 8.90",
    image: "src/assets/pastillas/paracetamol1.jpg",
  },
  {
    id: 2,
    name: "Ibuprofeno 400 mg",
    description: "Alivia dolor e inflamación.",
    price: 12.50,
    priceLabel: "S/ 12.50",
    image: "src/assets/pastillas/iboprofeno.jpg",
  },
  {
    id: 3,
    name: "Vitamina C",
    description: "Refuerza el sistema inmunológico.",
    price: 24.90,
    priceLabel: "S/ 24.90",
    image: "src/assets/pastillas/vitamina c.jpg",
  },
  {
    id: 4,
    name: "Alcohol 96%",
    description: "Desinfección y limpieza.",
    price: 7.50,
    priceLabel: "S/ 7.50",
    image: "src/assets/pastillas/Alcohol.jpg",
  },
];

function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800">
            Medicamentos Destacados
          </h2>

          <p className="mt-4 text-gray-500">
            Descubre algunos de nuestros productos más solicitados.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                <span className="text-xl font-bold text-emerald-600">
                  {product.priceLabel}
                </span>

                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700 active:scale-95 cursor-pointer"
                >
                  <ShoppingCart size={18} />
                  Agregar
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;