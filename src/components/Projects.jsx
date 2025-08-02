import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import homepage from "../assets/popcornmovie/homepage_popcornmovie.png";
import headphones from "../images/Headphones.png";
import lifestyle from "../images/lifestyle.png";
import doml from "../assets/doml/templateDoml.png"

import { EffectCube, Pagination } from "swiper/modules";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <>
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={modalImg}
            alt="Agrandie"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl border-4 border-white"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold bg-black/60 rounded-full px-3 py-1 hover:bg-black/80 transition"
            onClick={closeModal}
            aria-label="Fermer la modale"
          >
            ×
          </button>
        </div>
      )}

      <section id="projects" className="project w-full">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="title-night text-center text-3xl sm:text-3xl lg:text-5xl sm:my-10 font-semibold bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent leading-relaxed py-2">
            My Projects
          </h2>
          <div className="w-full flex flex-col md:items-center lg:flex-row">
            <div className="project-description text-xl lg:w-1/2 px-5">
              <div className="py-3 mb-4 rounded-lg">
                <p className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                  Popcorn Movie
                </p>
                <p className="mb-4 text-gray-100 text-base">
                  <span className="italic font-light text-blue-600 ">
                    PopCorn Movie :
                  </span>{" "}
                  Une application web moderne de découverte de films, développée
                  avec Next.js et stylisée via Tailwind CSS. Elle s&apos;appuie
                  sur l&apos;API de TMDb (The Movie Database) pour récupérer en
                  temps réel les derniers films à l&apos;affiche, les tendances
                  du moment, et les résultats de recherche personnalisés.
                </p>
                <Link
                  to="/projects/3"
                  className="text-gray-200 hover:text-white duration-300 border border-gray-600 hover:border-gray-400 px-3 py-1 rounded-md text-sm"
                >
                  → Voir le projet en détail
                </Link>
              </div>
              <div className="py-3 mb-4 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                  Doml
                </h2>
                <p className="mb-4 text-gray-100 text-base">
                  <span className="italic font-light text-blue-600 ">
                    Doml :
                  </span>{" "}
                  Doml est un site vitrine moderne développé avec Next.js et Tailwind CSS, conçu pour mettre en avant une expérience utilisateur soignée et professionnelle. Le projet se distingue par un design fidèle à la maquette Figma d’origine, une interface responsive adaptée aux écrans mobile et desktop, et l’utilisation de composants réutilisables pour une structure de code claire et évolutive.
                </p>
                <Link
                  to="/projects/5"
                  className="text-gray-200 hover:text-white duration-300 border border-gray-600 hover:border-gray-400 px-3 py-1 rounded-md text-sm"
                >
                  → Voir le projet en détail
                </Link>
              </div>

              <div className="py-3 mb-4 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                  LifeStyle Fitness
                </h2>
                <p className="mb-4 text-gray-100 text-base">
                  <span className="italic font-light text-blue-600 ">
                    LifeStyle fitness :
                  </span>{" "}
                  Réalisation d’une page web à partir d’une maquette Figma pour
                  LifeStyle Fitness, une chaîne de salles de sport reconnue. Le
                  projet a été développé avec Next.js et Tailwind CSS, en
                  version responsive pour desktop et mobile. Un formulaire a
                  également été intégré pour permettre aux utilisateurs
                  d’obtenir un pass gratuit.
                </p>
              </div>

              <div className="py-3 mb-4 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                  Headphones
                </h2>
                <p className="mb-4 text-gray-100 text-base">
                  <span className="italic font-light text-blue-600 ">
                    Headphones :
                  </span>{" "}
                  Reproduction d’un site vitrine de casques audio à partir d’une
                  maquette, réalisée en HTML et CSS, avec un peu de JavaScript
                  pour une navbar dynamique offrant une meilleure expérience
                  utilisateur.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-1 flex-col justify-center items-center relative">
              <div className="text-[#e1e143] animate-bounce text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mb-5 font-semibold">
                ↓ Swipe pour voir plus ↓
              </div>

              <div className="w-full aspect-square mx-auto flex items-center justify-center max-h-[60vh] sm:max-h-[80vh]">
                <Swiper
                  effect={"cube"}
                  grabCursor={true}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={true}
                  modules={[EffectCube, Pagination]}
                  className="w-full h-full sm:w-4/5 md:w-1/2 lg:w-[80%]"
                >
                  <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                      <img
                        src={homepage}
                        alt="PopcornMovie"
                        className="w-full h-full object-cover object-top cursor-pointer"
                        onClick={() => openModal(homepage)}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                      <img
                        src={doml}
                        alt="Craftify Home"
                        className="w-full h-full object-cover object-top cursor-pointer"
                        onClick={() => openModal(doml)}
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                      <img
                        src={lifestyle}
                        alt="Lifestyle"
                        className="w-full h-full object-cover object-top cursor-pointer"
                        onClick={() => openModal(lifestyle)}
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="flex justify-center items-center w-full h-full">
                    <div className="w-full h-full flex justify-center items-center">
                      <img
                        src={headphones}
                        alt="Headphones"
                        className="w-full h-full object-cover object-top cursor-pointer"
                        onClick={() => openModal(headphones)}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="text-center text-base md:text-xl my-5">
            <Link
              to="/projects"
              className="inline-block bg-gray-800/20 backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/30 hover:border-gray-500/50 px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 transform shadow-xl shadow-gray-500/20"
            >
              Voir plus de projets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
