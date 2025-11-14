// "use client";

// import { Zap, TrendingUp, Star } from "lucide-react";
// import Image from "next/image";
// import { useScrollAnimation } from "@/app/hooks/useScrollAnimations";
// import photo from "/public/photo.png";

// export default function About() {
//   const { ref, isVisible } = useScrollAnimation();

//   const features = [
//     { icon: Zap, title: "Montage rapide", desc: "Livraison en 24-48h" },
//     {
//       icon: TrendingUp,
//       title: "Contenu performant",
//       desc: "Optimisé pour la rétention et la viralité",
//     },
//     {
//       icon: Star,
//       title: "Qualité premium",
//       desc: "Storytelling percutant et finitions soignées",
//     },
//   ];

//   return (
//     <section id="about" className="py-32 px-6 bg-white">
//       <div
//         ref={ref}
//         className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <div>
//           <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//             Créateur de contenus{" "}
//             <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
//               viraux
//             </span>
//           </h2>

//           <p className="text-lg md:text-xl text-gray-600 text-justify mb-10 leading-relaxed">
//             Je suis un <strong>monteur vidéo passionné</strong> spécialisé dans
//             la création de <strong>contenus courts et longs</strong> pour
//             YouTube, TikTok, Instagram et les publicités en ligne. Mon objectif
//             est de <strong>transformer vos idées en vidéos captivantes</strong>{" "}
//             qui racontent une histoire, renforcent votre image et génèrent de
//             vrais résultats. Que ce soit un <strong>short viral</strong>, une{" "}
//             <strong>vidéo YouTube complète</strong> ou une{" "}
//             <strong>campagne publicitaire</strong>, chaque projet est conçu pour
//             marquer les esprits.
//           </p>

//           <div className="grid sm:grid-cols-3 gap-6">
//             {/* {features.map((item, i) => (
//               <div
//                 key={i}
//                 className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all"
//               >
//                 <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
//                   <item.icon className="text-white" size={22} />
//                 </div>

//                 <h3 className="text-lg font-semibold text-gray-900 mb-1">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{item.desc}</p>
//               </div>
//             ))} */}

//           </div>
//         </div>

//         <div className="relative flex justify-center">
//           <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-purple-500/30 blur-3xl rounded-full scale-125"></div>
//           <div className="relative rounded-3xl overflow-hidden shadow-2xl w-[420px] h-[540px] hover:scale-105 transition-transform duration-500">
//             <Image
//               src={photo}
//               alt="Photo de profil"
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, 50vw"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
          Je suis un <strong>monteur vidéo</strong> spécialisé dans les contenus
          courts et longs destinés aux réseaux sociaux. Mon objectif est simple
          : <strong>transformer vos idées en vidéos impactantes</strong> qui
          captent l'attention dès la première seconde. Chaque projet est pensé
          pour la <strong>rétention</strong>, la <strong>viralité</strong> et la{" "}
          <strong>performance</strong>.
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
