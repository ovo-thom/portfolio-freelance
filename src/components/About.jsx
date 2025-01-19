import { motion } from 'framer-motion';
import codingnight from '../images/codingnight.avif';

const About = () => {
  return (
    <section id="about" className="about-section w-full h-auto py-20 bg-black text-white">
      <div className="w-full px-2">
        <h2 className="title text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">À propos de moi</h2>
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className=""
            initial={{ x: '-100%', opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1.3, ease: 'easeOut' }} 
          >
            <img
              src={codingnight}
              alt="About me"
              className="rounded-full mx-auto w-[90%] h-72 shadow-lg lg:min-h-96 lg:min-w-72"
            />
          </motion.div>
          <div className="md:w-full w-full p-4">
            <div className="text-base w-[90%] mx-auto md:text-lg lg:text-xl leading-relaxed text-gray-300 mb-8">
              <p>
              Diplômé de BeCode, j&apos;ai acquis des compétences en développement web front-end, notamment en React, Next.js, Tailwind CSS et TypeScript. Lors de mon stage chez Pixel Drive, j&apos;ai travaillé sur des Progressive Web Apps et utilisé des concepts avancés comme les server components et server actions.
              </p>
              <hr className="my-4 border-gray-700"/>
              <p>
              J&apos;ai intégré des projets avec Next.js, en utilisant son système d&apos;internationalisation et en créant des maquettes desktop et mobile. Nous avons collaboré efficacement en équipe en utilisant Git et GitHub pour gérer les versions et travailler sur des projets communs.
              </p>
              <hr className="my-4 border-gray-700"/>
              <p>
              Actuellement à la recherche d&apos;un poste de développeur web front-end junior spécialisé en React et Tailwind CSS, je souhaite mettre à profit mes compétences et continuer à progresser dans un environnement dynamique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;