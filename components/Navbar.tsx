"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "/public/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", id: "accueil" },
    { label: "Portfolio", id: "portfolio" },
    { label: "À propos", id: "about" },
    { label: "Offres", id: "offers" },
    // { label: "", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Section introuvable: #${id}`);
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
          className="flex items-center gap-3 cursor-pointer w-full lg:w-auto justify-center lg:justify-start"
          onClick={() => scrollToSection("accueil")}
        >
            <div className="relative w-[100px] h-[100px] overflow-visible">
              <Image
                src={logo}
                alt="Logo Frejust B."
                fill
                className="object-contain scale-150 -translate-y-1"
              />
            </div>
        </div>

        <ul className="hidden lg:flex gap-10 text-1xl font-bold">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors hover:text-pink-600 ${
                  scrolled ? "text-black" : "text-black/90"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollToSection("contact")}
          className="hidden lg:block bg-gradient-to-r from-zinc-500 to-purple-600 text-white px-7 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
