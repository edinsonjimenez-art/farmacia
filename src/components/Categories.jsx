import {
  Pill,
  HeartPulse,
  Baby,
  ShieldPlus,
  Sparkles,
  Stethoscope,
} from "lucide-react";

const categories = [
  {
    title: "Medicamentos",
    icon: Pill,
    description: "Medicamentos con garantía y calidad.",
  },
  {
    title: "Vitaminas",
    icon: HeartPulse,
    description: "Suplementos para fortalecer tu salud.",
  },
  {
    title: "Cuidado Infantil",
    icon: Baby,
    description: "Productos para el cuidado del bebé.",
  },
  {
    title: "Higiene Personal",
    icon: Sparkles,
    description: "Todo para tu cuidado diario.",
  },
  {
    title: "Primeros Auxilios",
    icon: ShieldPlus,
    description: "Artículos para emergencias y curaciones.",
  },
  {
    title: "Equipos Médicos",
    icon: Stethoscope,
    description: "Equipos para el monitoreo de tu salud.",
  },
];

function Categories() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-3xl font-bold text-gray-800">
            Nuestras Categorías
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Explora nuestra selección de productos para el cuidado de tu salud y
            la de tu familia.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 transition group-hover:bg-emerald-600">

                  <Icon
                    size={34}
                    className="text-emerald-600 transition group-hover:text-white"
                  />

                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-7">
                  {category.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Categories;