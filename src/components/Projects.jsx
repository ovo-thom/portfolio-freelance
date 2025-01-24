import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import craftifyHome from '../images/craftify-home.png';
import headphones from '../images/Headphones.png';
import sofa from '../images/Sofa.png';
import lifestyle from '../images/lifestyle.png';

import { EffectCube, Pagination } from 'swiper/modules';

export default function Projects() {
  return (
    <section id="projects" className="project w-full h-auto flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-5">
        <h1 className="title text-center text-blue-900 text-2xl sm:text-3xl lg:text-4xl mb-5 font-semibold">My Projects</h1>
        <div className="project-description text-xl">

          <div className="py-3 mb-4 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">Craftify</h3>
            <p className="mb-4 text-gray-300 text-base">Un site de e-commerce réalisé en équipe, utilisant React et Vite pour le développement front-end. Le projet met en avant des fonctionnalités avancées telles que la gestion de panier, les filtres de produits, etc.</p>
            <a href="https://craftify-project.myportfolio.com/" target="_blank" className='text-slate-600 hover:text-slate-50 duration-300'>Portfolio du projet</a>
          </div>

          <div className="py-3 mb-4 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">LifeStyle Fitness</h3>
            <p className="mb-4 text-gray-300 text-base">LifeStyle Fitness est une page réalisée à partir d&apos;une maquette Figma, développée avec Next.js et Tailwind CSS, responsive sur desktop et mobile. Un formulaire a également été intégré pour permettre aux utilisateurs d&apos;obtenir un pass gratuit.</p>
          </div>

          <div className="py-3 mb-4 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">Headphones</h3>
            <p className="mb-4 text-gray-300 text-base">Un site web de présentation de casques audio, créé en utilisant HTML, CSS, et JavaScript. Le design est moderne et épuré, avec une attention particulière portée à l&apos;expérience utilisateur et à la réactivité.</p>
          </div>

          <div className="py-3 mb-4 rounded-lg">
            <p className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">Sofa4Rent</p>
            <p className="mb-4 text-gray-300 text-base">Un site de location de sofas, développé avec HTML et CSS. Il se distingue par son interface utilisateur conviviale et ses fonctionnalités intuitives permettant une navigation facile et rapide.</p>
          </div>

        </div>
      </div>

      {/* Slider des images */}
      <div className="w-full lg:w-1/2 p-5 flex flex-col justify-center items-center relative">
        
        {/* Flèche animée */}
        <div className="arrow animate-bounce text-2xl mb-5">
          ↓ Swipe pour voir plus ↓
        </div>

        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] max-w-[70%] md:max-w-[70%] lg:max-w-[70%]"
        >
          <SwiperSlide className="flex justify-center items-center w-full h-full">
            <img src={craftifyHome} alt="Craftify Home" className="object-cover w-full h-full" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full h-full">
            <img src={lifestyle} alt="lifestyle" className="object-cover w-full h-full" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full h-full">
            <img src={headphones} alt="Headphones" className="object-cover w-full h-full" />
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center w-full h-full">
            <img src={sofa} alt="Sofa4Rent" className="object-cover w-full h-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}



