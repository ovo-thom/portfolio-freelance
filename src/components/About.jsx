import { motion } from "framer-motion";
import codingnight from "../images/codingnight.avif";

const About = () => {
  return (
    <section
      id="about"
      className="about-section w-full h-auto pt-9 md:pt-14 bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white sm:pl-10"
    >
      <div className="w-full px-2">
        <h2 className="title-night text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
          About me
        </h2>

        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className="relative"
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut" }}
          >
            <div className="relative">
              <img
                src={codingnight}
                alt="About me"
                className="rounded-full mx-auto h-56 sm:h-64 md:h-72 w-auto shadow-2xl lg:h-96 lg:min-w-72 border-2 border-white/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
            </div>
          </motion.div>

          <div className="md:w-full w-full p-4 md:py-12">
            <div className="text-base w-[90%] mx-auto md:text-lg lg:text-xl leading-relaxed mb-8 space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Objectif professionnel
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Développeur web front-end junior spécialisé en React, Nextjs
                  et Tailwind CSS,{" "}
                  <span className="text-blue-400 font-medium bg-blue-400/10 px-2 py-1 rounded">
                    je suis actuellement à la recherche d&apos;un poste
                  </span>{" "}
                  où je pourrai mettre à profit mes compétences tout en
                  continuant à évoluer dans un environnement dynamique.
                  Enthousiaste à l&apos;idée de rejoindre une équipe dynamique,
                  j&apos;ai à cœur de partager mes idées, d&apos;apprendre de
                  mes collègues et de contribuer à une atmosphère de travail
                  positive.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Compétences et formation
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Diplômé de BeCode, j&apos;ai développé une expertise en
                  front-end grâce à une pédagogie active favorisant
                  l&apos;autonomie et la collaboration. J&apos;ai maîtrisé des
                  technologies comme HTML, CSS, JavaScript ainsi que React, et
                  réalisé un projet de site e-commerce intégrant des
                  fonctionnalités modernes et responsive.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Expérience professionnelle
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Lors de mon stage chez Pixel Drive, j&apos;ai contribué au
                  développement de Progressive Web Apps en utilisant des
                  concepts avancés comme les server components et server
                  actions. J&apos;ai intégré des projets Next.js avec
                  internationalisation et conçu des maquettes responsive. La
                  gestion des versions et le travail collaboratif se faisaient
                  avec Git et GitHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
