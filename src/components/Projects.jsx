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
      <h1 className="font-pixelify text-center text-2xl sm:text-3xl lg:text-5xl mt-10 font-semibold bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
        My Projects
      </h1>
      <div className="w-full flex flex-col lg:flex-row">
        <div className="project-description text-xl lg:w-1/2 px-5">
          <div className="py-3 mb-4 rounded-lg">
            <p className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">
              Popcorn Movie
            </p>
            <p className="mb-4 text-gray-300 text-base">
              <strong className="text-blue-600">PopCorn Movie :</strong> est une
              application web moderne de découverte de films, développée avec
              Next.js et stylisée via Tailwind CSS. Elle s&apos;appuie sur
              l&apos;API de TMDb (The Movie Database) pour récupérer en temps
              réel les derniers films à l&apos;affiche, les tendances du moment,
              et les résultats de recherche personnalisés.
            </p>
            <Link
              to="/projects/3"
              className="text-slate-600 hover:text-slate-50 duration-300"
            >
              Voir le projet en détail
            </Link>
          </div>
          <div className="py-3 mb-4 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">
              Craftify
            </h2>
            <p className="mb-4 text-gray-300 text-base">
              Un site de e-commerce réalisé en équipe, utilisant React et Vite
              pour le développement front-end. Le projet met en avant des
              fonctionnalités avancées telles que la gestion de panier, les
              filtres de produits, etc.
            </p>
            <a
              href="https://craftify-project.myportfolio.com/"
              target="_blank"
              className="text-slate-600 hover:text-slate-50 duration-300"
            >
              Portfolio du projet
            </a>
          </div>

          <div className="py-3 mb-4 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">
              LifeStyle Fitness
            </h2>
            <p className="mb-4 text-gray-300 text-base">
              LifeStyle Fitness est une page réalisée à partir d&apos;une
              maquette Figma, développée avec Next.js et Tailwind CSS,
              responsive sur desktop et mobile. Un formulaire a également été
              intégré pour permettre aux utilisateurs d&apos;obtenir un pass
              gratuit.
            </p>
          </div>

          <div className="py-3 mb-4 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">
              Headphones
            </h2>
            <p className="mb-4 text-gray-300 text-base">
              Une maquette de site de présentation de casques audio, réalisée en
              HTML et CSS, avec un peu de JavaScript pour une navbar dynamique
              offrant une meilleure expérience utilisateur.
            </p>
          </div>
        </div>

        {/* Slider des images */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative">
          {/* Flèche animée */}
          <div className="text-[#D7D74F] animate-bounce text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mb-5">
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
            className="w-full h-[60vh] sm:h-[70vh] sm:w-4/5 md:h-[80vh] md:w-1/2 lg:w-[80%]"
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
          className="text-transparent bg-clip-text bg-gradient-to-r border border-gray-900 px-4 py-1 rounded-full from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] hover:brightness-125 duration-300 text-base sm:text-lg lg:text-xl font-semibold"
        >
          Voir plus de projets
        </Link>
      </div>
    </section>
  );
}
