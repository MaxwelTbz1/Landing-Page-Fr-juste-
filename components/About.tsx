"use client";

import { motion, useAnimation } from "framer-motion";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimations";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  const controls = useAnimation();

  if (isVisible) {
    controls.start("visible");
  }

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Créateur de contenus{" "}
          <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
            viraux
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-16 leading-relaxed text-justify">
          Depuis plus de trois ans, <strong>notre studio</strong> accompagne
          marques et créateurs dans la production de contenus vidéo conçus pour
          performer. Spécialisés dans les formats courts et longs dédiés aux
          réseaux sociaux, nous produisons des vidéos qui captent l’attention
          immédiatement et maximisent la rétention. Chaque projet est pensé pour
          l’impact, la cohérence de marque et la performance. Notre mission :{" "}
          <strong>transformer vos idées en vidéos engageantes,</strong> qui
          stratégiques et prêtes à <strong>devenir virales. </strong>
        </p>

        <motion.div
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.25 } },
            hidden: {},
          }}
        >
          {[
            { value: "20+", label: "Vidéos créées" },
            { value: "30K+", label: "Vues générées" },
            { value: "98%", label: "Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center animation-stagger"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-purple-700 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-950 font-bold uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
