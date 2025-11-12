"use client";

import { Play, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const projects = [
    {
      title: "Short Marcus Youtube",
      videoId: "WmhZC2WcTIg",
      description:
        "Dans ce projet, j’ai transformé des rushs de podcast en une expérience visuelle et sonore percutante. Chaque plan, chaque illustration et chaque effet sonore ont été minutieusement travaillés pour amplifier l’impact narratif. L’objectif ? Donner vie aux échanges à travers un storytelling fluide et immersif.",
    },
    {
      title: "Présentation d'Application (Friym)",
      videoId: "sHPm1HSulVI",
      description:
        "Un montage dynamique combinant cadrages soignés, illustrations et sound design pour valoriser le produit et capter l’attention dès les premières secondes. Chaque transition et effet sonore ont été pensés pour offrir une expérience immersive et percutante.",
    },
    {
      title: "YouTube Short Yomi Denzel",
      videoId: "9R1jp1CpL1A",
      description:
        "Dans ce projet personnel, j'ai converti un extrait de podcast en une vidéo captivante en ajoutant un montage dynamique, des illustrations et un sound design immersif. L'objectif ? Créer une histoire visuelle et engager l'audience du début à la fin",
    },
    {
      title: "Montage & Premiers pas avec l'application Friym – Tutoriel 100% !",
      videoId: "TctQH1GJAdw",
      description:
        "Dans cette vidéo, je vous montre comment utiliser l’application Friym, mais pas n’importe comment : tous les écrans ont été recréés de A à Z sous After Effects ! 🎨 Pourquoi c’est unique ? Aucun fichier Figma reçu, tout a été redessiné manuellement à partir de captures d’écran. Un travail de précision pour reproduire l’interface fidèlement (et avec style !). 100% fait maison – parce que la passion n’a pas de limites !",
    },
    { 
      title: "Présentation & Promo produit",
      videoId: "MUuKRltFYM0",
      description:
        "Pour ce projet perso, j’ai filmé un pote en train de conduire et transformé ces images en une pub immersive et stylisée. J’ai joué avec le montage, les effets ralentis et un sound design percutant pour donner une vibe cinématographique.",
    },
    {
      title: "Types de Personnes - Nature",
      videoId: "jUb6Ol4xkpA",
      description:
        "Dans ce projet perso, j’ai illustré de manière visuelle et animée la différence entre deux types de personnes : les riches et les pauvres. À travers une animation fluide et un sound design immersif, j’ai cherché à donner du relief à cette idée et à captiver l’audience.",
    },
    {
      title: "Animation Inspirée de Matt Gray",
      videoId: "5SJ2L8eOAGw",
      description:
        "Pour ce projet perso, j’ai recréé une illustration inspirée d’une vidéo de Matt Gray, en y ajoutant une animation fluide et un sound design immersif. L’idée était d’expérimenter et de perfectionner mes compétences en motion design tout en rendant hommage à son style.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-32 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Mes{" "}
            <span className="bg-gradient-to-r from-slate-950 to-purple-600 bg-clip-text text-transparent">
              réalisations
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Voici un aperçu de mes créations : des vidéos qui captent
            l’attention, racontent une histoire et génèrent des résultats.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <VideoCard
              key={i}
              project={p}
              onClick={() => setSelectedVideo(p.videoId)}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                className="relative bg-black rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl aspect-video md:aspect-video md:max-h-[80vh]"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />

                <button
                  className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-md transition"
                  onClick={() => setSelectedVideo(null)}
                >
                  <X size={22} />
                </button>
              </motion.div>

              <style jsx>{`
                @media (max-width: 768px) {
                  .fixed > div {
                    width: 100%;
                    height: 100%;
                    max-width: none;
                    border-radius: 0;
                    aspect-ratio: auto;
                  }
                  iframe {
                    height: 100%;
                  }
                  button {
                    top: 1rem;
                    right: 1rem;
                  }
                }
              `}</style>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  videoId: string;
  description: string;
}

function VideoCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 bg-white flex flex-col"
    >
      <div className="relative aspect-video w-full">
        <Image
          src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-slate-900 to-purple-600 flex items-center justify-center shadow-lg">
            <Play className="text-white" size={28} />
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
      </div>
    </div>
  );
}
