"use client";

import { Check } from "lucide-react";

export default function Offers() {
  const plans = [
    {
      name: "Starter",
      price: "49€",
      color: "from-pink-500 to-pink-600",
      features: [
        "Montage de Shorts (jusqu'à 60s)",
        "Sous-titres animés",
        "Musique & effets sonores",
        "Transitions dynamiques",
        "Livraison en 48h",
        "2 révisions incluses",
      ],
    },
    {
      name: "Pro",
      price: "149€",
      color: "from-purple-500 to-purple-600",
      popular: true,
      features: [
        "Édition YouTube complète",
        "Intro & outro personnalisées",
        "Color grading professionnel",
        "Miniature YouTube",
        "Optimisation SEO",
        "Livraison en 72h",
        "Révisions illimitées",
      ],
    },
    {
      name: "Premium",
      price: "299€",
      color: "from-rose-500 to-rose-600",
      features: [
        "Pack créateur complet",
        "Branding personnalisé",
        "Motion design avancé",
        "Support prioritaire 24/7",
        "Stratégie de contenu",
        "Analyse de performance",
        "Livraison express",
      ],
    },
  ];

  return (
    <section
      id="offers"
      className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block text-xl font-semibold text-pink-600 mb-4 tracking-wide uppercase">
            Mes offres
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Des services adaptés à{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              vos besoins
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? "border-purple-300 shadow-xl scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Plus populaire
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-500">/projet</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                    >
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all`}
              >
                Choisir {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
