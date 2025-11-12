"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "/public/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/60 backdrop-blur-sm border-b border-white/20 shadow-md py-1"
          : "bg-white/10 backdrop-blur-lg border-b border-white/10 py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-[80px]">
       
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("accueil")}
        >
          <a href="#" className="block">
            <div className="relative w-[120px] h-[120px] overflow-visible">
              <Image
                src={logo}
                alt="Logo Frejust B."
                fill
                className="object-contain scale-150 -translate-y-2"
              />
            </div>
          </a>
        </div>

        {/* Menu desktop */}
        <ul className="hidden lg:flex gap-10 text-base font-medium">
          {["Accueil", "À propos", "Portfolio", "Offres", "Contact"].map(
            (item, i) => (
              <li key={i}>
                <button
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace("à ", ""))
                  }
                  className={`transition-colors hover:text-pink-600 ${
                    scrolled ? "text-black" : "text-black/90"
                  }`}
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Bouton CTA desktop */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block bg-gradient-to-r from-zinc-500 to-purple-600 text-white px-7 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
        >
          Commencer
        </button>

        {/* Bouton menu mobile */}
        <button
          className={`lg:hidden transition-colors ${
            scrolled ? "text-gray-900" : "text-black"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 right-6 left-6 bg-white rounded-3xl shadow-2xl p-8 animate-in">
            <ul className="space-y-4">
              {["Accueil", "À propos", "Offres", "Portfolio", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <button
                      onClick={() =>
                        scrollToSection(item.toLowerCase().replace("à ", ""))
                      }
                      className="w-full text-left text-lg font-medium text-gray-800 hover:text-pink-600 transition-colors py-2"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
