import { motion } from "framer-motion";
import codingnight from "../images/codingnight.avif";

const About = () => {
  return (
    <section
      id="about"
      className="about-section w-full h-auto pt-9 md:pt-14 bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white sm:pl-10"
    >
      <div className="w-full px-2 max-w-6xl mx-auto">
        <h2 className="font-sora text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
          À propos
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
                  À propos de moi
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Développeur web freelance spécialisé en React, Next.js et
                  Tailwind CSS, j’accompagne les entrepreneurs, PME et
                  indépendants dans la création de sites web modernes,
                  performants et sur-mesure. Passionné par l’UI/UX, je mets un
                  point d’honneur à concevoir des interfaces intuitives et
                  attractives.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Mes services
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Je réalise des sites vitrines professionnels, optimisés pour
                  le référencement et adaptés à tous les supports (responsive
                  design).
                  <br />
                  <span className="text-purple-400 font-medium bg-purple-400/10 px-2 py-1 rounded">
                    Technologies principales :
                  </span>{" "}
                  React, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript.
                  <br />
                  Je peux également intervenir sur la refonte de sites
                  existants, l’optimisation des performances et l’intégration de
                  maquettes Figma.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-lg sm:text-xl md:text-2xl mb-4 font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Pourquoi créer un site vitrine ?
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Un site vitrine est la première vitrine digitale de votre
                  activité. Il permet de :<br />
                  – Présenter vos services et votre expertise
                  <br />
                  – Gagner en visibilité et crédibilité
                  <br />
                  – Attirer de nouveaux clients grâce à un design professionnel
                  <br />
                  – Être accessible 24/7 sur tous les appareils
                  <br />
                  <br />
                  Investir dans un site vitrine, c’est investir dans la
                  croissance de votre activité.
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
