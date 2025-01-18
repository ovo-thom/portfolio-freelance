import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section w-full h-auto p-8 sm:p-12 md:p-16 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="title text-4xl font-bold text-center mb-10 text-white">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/3 w-full p-4"
            initial={{ x: '-100%', opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 1.3, ease: 'easeOut' }} 
          >
            <img
              src='https://img.freepik.com/photos-gratuite/experts-cybersecurite-travaillant-appareils-technologiques-lumieres-au-neon_23-2151645654.jpg?t=st=1723808433~exp=1723812033~hmac=522ed41a0ade5ae2c0d55bb8be010c1ad611c95f124a645806e1fa1e314011b0&w=360'
              alt="About me"
              className="rounded-full shadow-lg w-full h-auto"
            />
          </motion.div>
          <div className="md:w-2/3 w-full p-4">
            <div className="text-base md:text-2xl leading-relaxed text-gray-300 mb-8">
              <p>
              Diplômé de BeCode, j'ai acquis des compétences en développement web front-end, notamment en React, Next.js, Tailwind CSS et TypeScript. Lors de mon stage chez Pixel Drive, j'ai travaillé sur des Progressive Web Apps et utilisé des concepts avancés comme les server components et server actions.
              </p>
              <hr className="my-4 border-gray-700"/>
              <p>
              J'ai intégré des projets avec Next.js, en utilisant son système d'internationalisation et en créant des maquettes desktop et mobile. Nous avons collaboré efficacement en équipe en utilisant Git et GitHub pour gérer les versions et travailler sur des projets communs.
              </p>
              <hr className="my-4 border-gray-700"/>
              <p>
              Actuellement à la recherche d'un poste de développeur web front-end junior spécialisé en React et Tailwind CSS, je souhaite mettre à profit mes compétences et continuer à progresser dans un environnement dynamique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;