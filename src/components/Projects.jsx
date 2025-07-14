import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import homepage from "../assets/popcornmovie/homepage_popcornmovie.png";
import craftifyHome from "../images/craftify-home.png";
import headphones from "../images/Headphones.png";
import lifestyle from "../images/lifestyle.png";

import { EffectCube, Pagination } from "swiper/modules";

export default function Projects() {
  return (
    <section id="projects" className="project w-full">
      <h2 className="title-night text-center text-3xl sm:text-3xl lg:text-5xl sm:my-10 font-semibold bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent leading-relaxed py-2">
        My Projects
      </h2>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="project-description text-xl lg:w-1/2 px-5">
          <div className="py-3 mb-4 rounded-lg">
            <p className="text-xl sm:text-2xl font-semibold mb-2 text-white">
              Popcorn Movie
            </p>
            <p className="mb-4 text-gray-100 text-base">
              <span className="italic font-light text-blue-600 ">
                PopCorn Movie :
              </span>{" "}
              est une application web moderne de découverte de films, développée
              avec Next.js et stylisée via Tailwind CSS. Elle s&apos;appuie sur
              l&apos;API de TMDb (The Movie Database) pour récupérer en temps
              réel les derniers films à l&apos;affiche, les tendances du moment,
              et les résultats de recherche personnalisés.
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
              Craftify
            </h2>
            <p className="mb-4 text-gray-100 text-base">
              <span className="italic font-light text-blue-600 ">
                Craftify :
              </span>{" "}
              est un site de e-commerce réalisé en équipe, utilisant React et
              Vite pour le développement front-end. Le projet met en avant des
              fonctionnalités avancées telles que la gestion de panier, les
              filtres de produits, etc.
            </p>
            <a
              href="https://craftify-project.myportfolio.com/"
              target="_blank"
              className="text-gray-200 hover:text-white duration-300 border border-gray-600 hover:border-gray-400 px-3 py-1 rounded-md text-sm"
            >
              → Portfolio du projet
            </a>
          </div>

          <div className="py-3 mb-4 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
              LifeStyle Fitness
            </h2>
            <p className="mb-4 text-gray-100 text-base">
              <span className="italic font-light text-blue-600 ">
                LifeStyle fitness
              </span>{" "}
              est une page réalisée à partir d&apos;une maquette Figma,
              développée avec Next.js et Tailwind CSS, responsive sur desktop et
              mobile. Un formulaire a également été intégré pour permettre aux
              utilisateurs d&apos;obtenir un pass gratuit.
            </p>
          </div>

          <div className="py-3 mb-4 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
              Headphones
            </h2>
            <p className="mb-4 text-gray-100 text-base">
              Une maquette de site de présentation de casques audio, réalisée en
              HTML et CSS, avec un peu de JavaScript pour une navbar dynamique
              offrant une meilleure expérience utilisateur.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative">
          <div className="text-[#e1e143] animate-bounce text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mb-5 font-semibold">
            ↓ Swipe pour voir plus ↓
          </div>

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
            className="w-full h-[60vh] sm:h-[70vh] sm:w-4/5 md:h-[90vh] md:w-1/2 lg:w-[80%]"
          >
            <SwiperSlide className="flex justify-center items-center w-full h-full">
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={homepage}
                  alt="PopcornMovie"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center items-center w-full h-full">
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={craftifyHome}
                  alt="Craftify Home"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center w-full h-full">
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={lifestyle}
                  alt="Lifestyle"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex justify-center items-center w-full h-full">
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src={headphones}
                  alt="Headphones"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </SwiperSlide>
          </Swiper>
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
    </section>
  );
}
