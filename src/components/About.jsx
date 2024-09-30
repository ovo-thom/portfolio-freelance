import React from 'react';
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
            <div className="text-lg md:text-base leading-relaxed text-gray-300 mb-8">
              <p>
                Actuellement en formation chez BeCode, j'ai acquis des compétences solides en développement web front-end grâce à une pédagogie active et des travaux de groupe. Je vous propose ma candidature pour un stage de développeur web front-end de trois mois à partir de septembre.
              </p>
              <hr className="my-4 border-gray-700"/>
              <p>
                Maîtrisant HTML, CSS et JavaScript, je suis particulièrement motivé à renforcer mes compétences en React au sein de votre équipe. Mon parcours de reconversion professionnelle témoigne de ma détermination et de ma capacité à m'adapter rapidement à de nouveaux environnements.
              </p>
              <hr className="my-4 border-gray-700"/>
              <p>
                Chez BeCode, j'ai appris à travailler en équipe et à gérer des projets avec rigueur. Curieux et avide d'apprendre, je cherche constamment de nouveaux défis pour élargir mes compétences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;