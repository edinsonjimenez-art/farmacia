import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2 } from "lucide-react";

function Carrito() {
  const { cart, removeFromCart, totalItems, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
          <ShoppingCart size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-6">Agrega medicamentos desde el catálogo.</p>
        <Link
          to="/medicamentos"
          className="bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-amber-700 transition"
        >
          Ir a Medicamentos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Carrito de Compras <span className="text-amber-600">({totalItems})</span>
      </h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-xl border border-gray-100"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                <p className="text-amber-600 font-bold text-sm">
                  S/ {item.price.toFixed(2)} c/u
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-bold text-gray-900 text-lg">
                S/ {(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400 hover:text-red-600 transition"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}

        {/* Sección de Total */}
        <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">Total a pagar:</span>
          <span className="text-3xl font-bold text-amber-600">
            S/ {totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Carrito;