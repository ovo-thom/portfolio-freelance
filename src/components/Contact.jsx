import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-section bg-gradient-to-br from-gray-950 via-slate-950 to-black text-gray-400"
    >
      <div className="flex flex-col max-w-6xl mx-auto lg:flex-row pt-8 px-8 space-y-6 lg:space-y-0 lg:space-x-8 lg:items-stretch">
        <div className="contact-left lg:w-1/2">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
            <h2 className="font-sora text-center text-3xl sm:text-3xl lg:text-4xl mb-5 md:mb-10 font-semibold bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
              Travaillons ensemble sur votre projet web
            </h2>

            <div className="flex items-center mb-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              <h3 className="text-white text-lg font-semibold">
                Besoin de booster votre activité ?
              </h3>
            </div>

            <p className="text-gray-300 lg:text-lg leading-relaxed mb-6">
              J’accompagne entrepreneurs et indépendants dans la création de
              sites vitrines modernes, performants et sur-mesure avec React,
              Next.js et Tailwind CSS. Mon approche est centrée sur l’expérience
              utilisateur, le design et l’efficacité.
            </p>

            <div className="flex items-center mb-4">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
              <h3 className="text-white text-lg font-semibold">
                Discutons de votre projet
              </h3>
            </div>

            <p className="text-gray-300 lg:text-lg leading-relaxed mb-8">
              Vous souhaitez collaborer ou avez une idée en tête ? Contactez-moi
              via le formulaire ou sur LinkedIn. Je vous répondrai rapidement
              pour échanger sur vos besoins et vous proposer la meilleure
              solution digitale.
            </p>

            <div className="flex items-center justify-center space-x-6 mt-auto">
              <a
                href="https://github.com/ovo-thom"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-blue-400 hover:text-blue-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-thonnard-a520b72b5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-blue-400 hover:text-blue-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
