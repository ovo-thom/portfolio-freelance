import { motion } from 'framer-motion';
import codingnight from '../images/codingnight.avif';

const About = () => {
  return (
    <section id="about" className="about-section w-full h-auto py-9 md:py-20 bg-gray-950  text-white">
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
            <div className="text-base w-[90%] mx-auto md:text-lg lg:text-xl leading-relaxed mb-8">
              <h3 className='text-lg sm:text-xl md:text-2xl mb-2 font-semibold'>Objectif professionnel</h3>
              <p className='text-gray-300 text-base'>
              Développeur web front-end junior spécialisé en React et Tailwind CSS, je suis actuellement à la recherche d’un poste où je pourrai mettre à profit mes compétences tout en continuant à évoluer dans un environnement dynamique.
              </p>
              <hr className="my-4 border-gray-700"/>
              <h3 className='text-lg sm:text-xl md:text-2xl mb-2 font-semibold'>Compétences et formation</h3>
              <p className='text-gray-300 text-base'>
              Diplômé de BeCode, j’ai développé une expertise en front-end grâce à une pédagogie active favorisant l’autonomie et la collaboration. J’ai maîtrisé des technologies comme HTML, CSS, JavaScript, et React, et réalisé un projet de site e-commerce intégrant des fonctionnalités modernes et responsive.
              </p>
              <hr className="my-4 border-gray-700"/>
              <h3 className='text-lg sm:text-xl md:text-2xl mb-2 font-semibold'>Expérience professionnelle</h3>
              <p className='text-gray-300 text-base'>
              Lors de mon stage chez Pixel Drive, j’ai contribué au développement de Progressive Web Apps en utilisant des concepts avancés comme les server components et server actions. J’ai intégré des projets Next.js avec internationalisation et conçu des maquettes responsive. La gestion des versions et le travail collaboratif se faisaient avec Git et GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;



{/* <div className="text-base w-[90%] mx-auto md:text-lg lg:text-xl leading-relaxed text-gray-300 mb-8">
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
            </div> */}