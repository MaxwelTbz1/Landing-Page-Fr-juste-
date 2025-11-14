"use client";

import { Check } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Offers() {
  const phoneNumber = "22961633682";

  const plans = [
    {
      name: "Starter",
      price: "49€",
      color: "from-slate-500 to-purple-700", 
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
      color: "from-slate-600 to-purple-700", 
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
      color: "from-slate-600 to-purple-700", 
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

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (inView && !hasPlayed) {
      controls.start("visible");
      setHasPlayed(true); 
    }
  }, [inView, hasPlayed, controls]);

  return (
    <section
      id="offers"
      className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Des services adaptés à{" "}
            <span className="bg-gradient-to-r from-slate-950 to-purple-800 bg-clip-text text-transparent">
              vos besoins
            </span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="grid lg:grid-cols-3 gap-10"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
            hidden: {},
          }}
        >
          {plans.map((plan, i) => {
            const message = encodeURIComponent(
              `Bonjour, je suis intéressé par l'offre ${plan.name}.`
            );
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className={`relative bg-white rounded-3xl p-12 border-2 transition-all duration-500 ${
                  plan.popular
                    ? "border-indigo-400 shadow-2xl scale-105"
                    : "border-gray-200 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-900 to-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Plus populaire
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-6xl font-extrabold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-lg">/projet</span>
                  </div>
                </div>

                <ul className="space-y-5 mb-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                      >
                        <Check className="text-white" size={16} />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center bg-gradient-to-r ${plan.color} text-white py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-[1.03] transition-all`}
                >
                  Choisir {plan.name}
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
