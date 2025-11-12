"use client";

import { Star, Linkedin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alexis Mirtain",
      role: "Entrepreneur - Concepteur",
      image: "/ale.jpeg",
      linkedin:
        "https://www.linkedin.com/in/fr%C3%A9juste-bgh/details/recommendations/?detailScreenTabIndex=0",
      text: "Fréjuste m'a accompagné sur le montage de mes derniers réels Instagram. Il a su réaliser un montage captivant et attractif en tenant compte de ma demande initiale. Je recommande fortement son travail de qualité !",
    },
    {
      name: "Juliet Legnoui",
      role: "Graphiste & Designer",
      image: "/juli.jpeg",
      linkedin:
        "https://www.linkedin.com/in/fr%C3%A9juste-bgh/details/recommendations/?detailScreenTabIndex=0",
      text: "J'ai travaillé avec Fréjuste sur un projet de montage vidéo. Il a parfaitement compris mes attentes et livré un travail de qualité, dans les délais. Je recommande vivement ses services !",
    },
    {
      name: "Thibault Giraud",
      role: "Content Creator",
      image: "/thib.jpeg",
      linkedin:
        "https://www.linkedin.com/in/fr%C3%A9juste-bgh/details/recommendations/?detailScreenTabIndex=0",
      text: "Super monteur vidéo, je recommande.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ce que disent {" "}
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              mes clients
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez l’expérience de ceux qui ont fait confiance à mes services
            de montage vidéo.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-colors"
              >
                <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-1xl hover:-translate-y-1 transition-all h-full flex flex-col ">
                  <p className="text-gray-700 text-lg text-justify leading-relaxed mb-8 flex-grow">
                    “{t.text}”
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover shadow-lg"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <a
                          href={t.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-gray-900 text-lg hover:text-pink-600 transition-colors"
                        >
                          {t.name}
                        </a>
                        <p className="text-gray-500 hover:text-pink-600 transition-colors">
                          <Linkedin size={18} />
                        </p>
                      </div>
                      <div className="text-gray-500">{t.role}</div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="text-yellow-400 fill-yellow-400"
                        size={20}
                      />
                    ))}
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
