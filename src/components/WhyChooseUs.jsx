import {
  ShieldCheck,
  Truck,
  BadgeCheck,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Productos certificados",
    description:
      "Trabajamos con medicamentos y productos de salud de calidad garantizada.",
  },
  {
    icon: Truck,
    title: "Entrega rápida",
    description:
      "Realizamos entregas de manera segura y en el menor tiempo posible.",
  },
  {
    icon: BadgeCheck,
    title: "Calidad garantizada",
    description:
      "Ofrecemos productos originales de laboratorios reconocidos.",
  },
  {
    icon: Headset,
    title: "Atención personalizada",
    description:
      "Nuestro equipo está disponible para resolver tus consultas.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-3xl font-bold text-gray-800">
            ¿Por qué elegirnos?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Nos comprometemos a brindar productos de calidad y una atención
            confiable para cuidar de tu bienestar y el de tu familia.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <Icon
                    size={32}
                    className="text-emerald-600"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-500 leading-7">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;