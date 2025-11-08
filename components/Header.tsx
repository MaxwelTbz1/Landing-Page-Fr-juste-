"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimations";


export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const { ref, isVisible } = useScrollAnimation();

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-purple-100" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-pink-400/30 to-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-pink-200/50 rounded-full px-5 py-2 mb-8 shadow-lg">
          <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse" />
          <span className="text-sm font-medium bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Nouveaux services disponibles
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-gray-900">
          Le montage qui
          <br />
          transforme vos vidéos
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              en machines à vues
            </span>
            <svg
              className="absolute -bottom-4 left-0 w-full"
              height="20"
              viewBox="0 0 400 20"
              fill="none"
            >
              <path
                d="M5 15Q200 5 395 15"
                stroke="url(#gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transformez vos idées en contenus viraux. Des vidéos percutantes qui
          captivent votre audience et boostent votre croissance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button
            onClick={() => scrollToSection("offers")}
            className="group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            Commencer gratuitement
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            onClick={() => scrollToSection("portfolio")}
            className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:border-pink-300 hover:shadow-lg transition-all"
          >
            Voir mes projets
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[
            { value: "20+", label: "Vidéos créées" },
            { value: "30K+", label: "Vues générées" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-gray-400" size={32} />
        </button>
      </div>
    </header>
  );
}
