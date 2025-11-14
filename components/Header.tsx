
// "use client";

// import { ChevronDown } from "lucide-react";

// export default function Hero() {
//   const scrollToSection = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-purple-100" />
//         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-900/20 to-pink-500 rounded-full blur-3xl animate-spin-slow" />
//         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 to-pink-500 rounded-full blur-3xl animate-spin-slow" />
//         <div className="absolute inset-0 animate-[spin_45s_linear_infinite]">
//           <div
//             className="absolute inset-0 opacity-[0.03]"
//             style={{
//               backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
//               backgroundSize: "50px 50px",
//             }}
//           />
//         </div>
//       </div>

      
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        
//         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-[1.1] mb-8 text-gray-900">
//           Le montage qui
//           <br />
//           transforme vos vidéos
//           <br />
//           <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
//             en machines à vues
//           </span>
//         </h1>

        
//         <div className="relative w-[1000px] mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-200">
//           <iframe
//             className="absolute inset-0 w-full h-full"
//             src="https://www.youtube.com/embed/TctQH1GJAdw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=TctQH1GJAdw"
//             title="Vidéo de démonstration"
//             allow="autoplay; fullscreen; encrypted-media"
//             allowFullScreen
//           />
//         </div>
        
//         {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
//           <button
//             onClick={() => scrollToSection("offers")}
//             className="group bg-gradient-to-r from-slate-950 to-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
//           >
//             Commencer gratuitement
//             <ArrowDown
//               size={18}
//               className="group-hover:translate-x-1 transition-transform"
//             />
//           </button>

//           <button
//             onClick={() => scrollToSection("portfolio")}
//             className="bg-white text-gray-900 border-2 border-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:border-pink-300 hover:shadow-lg transition-all"
//           >
//             Voir mes projets
//           </button>
//         </div> */}
       
//         <button
//           onClick={() => scrollToSection("about")}
//           className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
//         >
//           <ChevronDown className="text-gray-400" size={32} />
//         </button>
//       </div>

     
//       <style jsx>{`
//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 60s linear infinite;
//         }
//       `}</style>
//     </header>
//   );
// }


"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50 to-purple-100" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-900/20 to-pink-500 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 to-pink-500 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute inset-0 animate-[spin_45s_linear_infinite]">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-24 md:py-32 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 text-gray-900">
          Le montage qui
          <br />
          transforme vos vidéos
          <br />
          <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
            en machines à vues
          </span>
        </h1>

        {/* Vidéo responsive */}
        <div className="relative w-full max-w-[1000px] mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-200">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/TctQH1GJAdw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=TctQH1GJAdw"
            title="Vidéo de démonstration"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
          />
        </div>

        {/* Bouton scroll */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="text-gray-400" size={32} />
        </button>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }

        /* Mobile-specific styles */
        @media (max-width: 640px) {
          /* Titre sur mobile : réduire la taille du texte */
          h1 {
            font-size: 2rem; /* 32px */
            line-height: 1.3;
            margin-bottom: 4rem; /* Plus de marge en bas du titre */
          }

          /* Ajustement de la taille de la vidéo */
          .relative {
            width: 90%; /* Plus petite largeur pour la vidéo */
            max-width: 100%;
            margin-bottom: 2rem; /* Plus d'espace sous la vidéo */
          }

          /* Ajustement de l'icône de défilement */
          button {
            bottom: 8rem; /* Position plus haut pour l'icône de défilement */
          }

          /* Ajustement des éléments de fond (cercles) */
          .absolute {
            width: 400px;
            height: 400px;
          }
        }
      `}</style>
    </header>
  );
}
