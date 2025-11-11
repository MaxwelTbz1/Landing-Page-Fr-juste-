"use client";

import { Mail, Phone, MapPin, User, MessageCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimations";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 bg-gradient-to-br from-zinc-900 to-purple-700 text-white overflow-hidden"
    >
      
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <span className="inline-block text-xl font-semibold uppercase tracking-widest text-pink-100 mb-4">
          Contact
        </span>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Prêt à booster votre contenu ?
        </h2>

        <p className="text-lg md:text-xl text-pink-100 mb-16 max-w-2xl mx-auto">
          Parlons de votre projet et créons ensemble des vidéos qui marquent votre audience.
        </p>

        {/* --- Cartes infos --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ContactCard
            icon={<MapPin size={26} />}
            title="Adresse"
            value="Cotonou, Bénin"
          />
          <ContactCard
            icon={<User size={26} />}
            title="Freelance"
            value="Disponible immédiatement"
          />
          <ContactCard
            icon={<Mail size={26} />}
            title="Email"
            value="bghfrejus@gmail.com"
            href="mailto:bghfrejus@gmail.com"
          />
          <ContactCard
            icon={<Phone size={26} />}
            title="Téléphone"
            value="+229 01 61 63 36 82"
            href="tel:+2290161633682"
          />
        </div>

        {/* --- Boutons de contact --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:bghfrejus@gmail.com"
            className="group flex items-center justify-center gap-3 bg-white text-pink-700 font-semibold text-lg px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl transition-all"
          >
            <Mail size={20} />
            bghfrejus@gmail.com
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="https://wa.me/2290161633682"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 border-2 border-white/60 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-pink-700 hover:shadow-lg transition-all"
          >
            <MessageCircle size={20} />
            Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* --- Composant individuel pour les cartes --- */
function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all">
      <div className="mb-4 text-white">{icon}</div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-pink-100">{value}</p>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:scale-[1.02] transition-transform">
      {content}
    </a>
  ) : (
    content
  );
}
