"use client";
import { useState } from "react";

export default function DemandeProjet() {
  const [envoi, setEnvoi] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnvoi(true);

    const form = e.currentTarget;

    const nom = form.nom.value;
    const email = form.email.value;
    const type = form.type_de_projet.value;
    const budget = form.budget.value;
    const message = form.message.value;

    const telephone = "22961633682";

    const texte = `
Nouvelle demande de projet :

👤 Nom : ${nom}
📧 Email : ${email}
📌 Type de projet : ${type}
💰 Budget : ${budget}

📝 Détails :
${message}
`;

    const url = `https://wa.me/${telephone}?text=${encodeURIComponent(texte)}`;

    window.open(url, "_blank");

    setEnvoi(false);
    form.reset();
  };

  return (
    <section className="max-w-3xl mx-auto py-20 px-6">
      <h2 className="text-center text-5xl md:text-6xl font-bold text-gray-900 mb-16">
        Demande{" "}
        <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
          de projet
        </span>
      </h2>

      <p className="text-gray-900 mb-10">
        Parlez-moi de votre projet. Je vous recontacte via WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Nom complet</label>
          <input
            name="nom"
            required
            className="w-full mt-1 rounded-md border border-gray-300 p-3"
            placeholder="Jean Dupont"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Adresse email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 rounded-md border border-gray-300 p-3"
            placeholder="jean@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Type de projet</label>
          <select
            name="type_de_projet"
            required
            className="w-full mt-1 rounded-md border border-gray-300 p-3"
          >
            <option value="">Sélectionnez un type</option>
            <option>Short Form Videos</option>
            <option>Youtube Videos / VSL&apos;s</option>
            <option>Motion Graphics / Explainer Ads / Demo Product</option>
            <option>Autre</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Budget estimé</label>
          <select
            name="budget"
            required
            className="w-full mt-1 rounded-md border border-gray-300 p-3"
          >
            <option value="">Sélectionnez une fourchette</option>
            <option>$500 – $1k</option>
            <option>$1k – $2k</option>
            <option>$2k – $5k</option>
            <option>+$5k</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Détails du projet</label>
          <textarea
            name="message"
            required
            className="w-full mt-1 rounded-md border border-gray-300 p-3 h-32"
            placeholder="Décrivez votre projet..."
          />
        </div>

        <button
          type="submit"
          disabled={envoi}
          className="mt-4 w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
        >
          {envoi ? "Ouverture WhatsApp..." : "Envoyer via WhatsApp"}
        </button>
      </form>
    </section>
  );
}
