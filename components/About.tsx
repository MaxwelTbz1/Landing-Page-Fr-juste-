"use client";

import { Zap, TrendingUp, Star } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimations";


export default function About() {

  const { ref, isVisible } = useScrollAnimation();

  const features = [
    { icon: Zap, title: "Montage rapide", desc: "Livraison en 24-48h" },
    { icon: TrendingUp, title: "ROI garanti", desc: "Résultats mesurables" },
    { icon: Star, title: "Qualité premium", desc: "Travail soigné" },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block text-xl font-semibold text-pink-700 mb-4 tracking-wide uppercase">
            À propos
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Créateur de contenus{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              viraux
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Monteur vidéo passionné, spécialisé dans la création de formats
            courts percutants. Mon objectif : transformer vos idées en vidéos
            qui attirent, retiennent et convertissent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
