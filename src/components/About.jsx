import { motion } from "framer-motion";
import codingnight from "../images/codingnight.avif";

const About = () => {
  return (
    <section
      id="about"
      className="about-section w-full h-auto pt-9 md:pt-14 bg-[#080808] text-white"
    >
      <div className="w-full px-2">
        <h2 className="font-pixelify text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
          About me
        </h2>

        <div className="flex flex-col lg:flex-row items-center">
          <motion.div
            className=""
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            style={{ marginLeft: "50px" }}
          >
            <img
              src={codingnight}
              alt="About me"
              className="rounded-full mx-auto w-[90%] h-72 shadow-lg lg:min-h-96 lg:min-w-72"
            />
          </motion.div>
          <div className="md:w-full w-full p-4">
            <div className="text-base w-[80%] mx-auto md:text-lg lg:text-xl leading-relaxed mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl mb-2 font-semibold text-gray-100">
                Objectif professionnel
              </h3>
              <p className="text-gray-300 text-base">
                Développeur web front-end junior spécialisé en React et Tailwind
                CSS,{" "}
                <span className="underline">
                  {" "}
                  je suis actuellement à la recherche d&apos;un poste{" "}
                </span>{" "}
                où je pourrai mettre à profit mes compétences tout en continuant
                à évoluer dans un environnement dynamique.
              </p>
              <hr className="my-4 border-gray-700" />
              <h3 className="text-lg sm:text-xl md:text-2xl mb-2 font-semibold text-gray-100">
                Compétences et formation
              </h3>
              <p className="text-gray-300 text-base">
                Diplômé de BeCode, j&apos;ai développé une expertise en
                front-end grâce à une pédagogie active favorisant
                l&apos;autonomie et la collaboration. J&apos;ai maîtrisé des
                technologies comme HTML, CSS, JavaScript, et React, et réalisé
                un projet de site e-commerce intégrant des fonctionnalités
                modernes et responsive.
              </p>
              <hr className="my-4 border-gray-700" />
              <h3 className="text-lg sm:text-xl md:text-2xl mb-2 font-semibold text-gray-100">
                Expérience professionnelle
              </h3>
              <p className="text-gray-300 text-base">
                Lors de mon stage chez Pixel Drive, j&apos;ai contribué au
                développement de Progressive Web Apps en utilisant des concepts
                avancés comme les server components et server actions. J&apos;ai
                intégré des projets Next.js avec internationalisation et conçu
                des maquettes responsive. La gestion des versions et le travail
                collaboratif se faisaient avec Git et GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
