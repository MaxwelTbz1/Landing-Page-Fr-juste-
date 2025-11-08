"use client";

import { Star, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const projects = [
    {
      title: "Short Marcus Youtube",
      views: "1K vues",
      videoId: "WmhZC2WcTIg",
      description:
        "Dans ce projet, j’ai transformé des rushs de podcast en une expérience visuelle et sonore percutante. Chaque plan, chaque illustration et chaque effet sonore ont été minutieusement travaillés pour amplifier l’impact narratif. L’objectif ? Donner vie aux échanges à travers un storytelling fluide et immersif.",
    },
    {
      title: "Présentation d'Application (Friym)",
      views: "3K vues",
      videoId: "sHPm1HSulVI",
      description:
        "Un montage dynamique combinant cadrages soignés, illustrations et sound design pour valoriser le produit et capter l’attention dès les premières secondes. Chaque transition et effet sonore ont été pensés pour offrir une expérience immersive et percutante",
    },
    {
      title: "YouTube Short Yomi Denzel",
      views: "2K vues",
      videoId: "9R1jp1CpL1A",
      description:
        "Dans ce projet personnel, j'ai converti un extrait de podcast en une vidéo captivante en ajoutant un montage dynamique, des illustrations et un sound design immersif. L'objectif ? Créer une histoire visuelle et engager l'audience du début à la fin.",
    },
    {
      title: "Montage interview créatif",
      views: "1K vues",
      videoId: "xvFZjo5PgG0",
      description:
        "Une interview rythmée, sublimée par un montage qui met en valeur la personnalité de l’invité.",
    },
    {
      title: "Présentation & Promo produit",
      views: "1K vues",
      videoId: "MUuKRltFYM0",
      description:
        "Pour ce projet perso, j’ai recréé une illustration inspirée d’une vidéo de Matt Gray, en y ajoutant une animation fluide et un sound design immersif. L’idée était d’expérimenter et de perfectionner mes compétences en motion design tout en rendant hommage à son style.",
    },
    {
      title: "Types de Personnes - Nature",
      views: "1K vues",
      videoId: "jUb6Ol4xkpA",
      description:
        "Dans ce projet perso, j’ai illustré de manière visuelle et animée la différence entre deux types de personnes : les riches et les pauvres. À travers une animation fluide et un sound design immersif, j’ai cherché à donner du relief à cette idée et à captiver l’audience.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-32 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xl font-semibold text-pink-600 mb-4 tracking-wide uppercase">
            Portfolio
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Mes{" "}
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              réalisations
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Voici un aperçu de mes créations : des vidéos qui captent
            l’attention, racontent une histoire et génèrent des résultats.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <VideoCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Composant individuel ---- */
function VideoCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 bg-white flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Vidéo ou image */}
      <div className="relative aspect-video w-full">
        {!hovered ? (
          <>
            <Image
              src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Play className="text-white" size={28} />
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&rel=0`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </div>

      {/* Contenu texte */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex items-center gap-2 text-sm text-gray-500 mt-auto">
          <Star size={14} className="text-yellow-400" />
          {project.views}
        </div>
      </div>
    </div>
  );
}
