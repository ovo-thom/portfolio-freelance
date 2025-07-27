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
            <h2 className="title-night text-center text-3xl sm:text-3xl lg:text-5xl mb-5 md:mb-10 font-semibold bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>

            <div className="flex items-center mb-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              <h3 className="text-white text-lg font-semibold">
                Qui suis-je ?
              </h3>
            </div>

            <p className="text-gray-300 lg:text-lg leading-relaxed mb-6">
              Développeur web front-end junior passionné par la création
              d&apos;interfaces modernes avec Nextjs, React et Tailwind CSS, je
              suis motivé et prêt à relever de nouveaux défis.
            </p>

            <div className="flex items-center mb-4">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
              <h3 className="text-white text-lg font-semibold">
                Collaborons ensemble
              </h3>
            </div>

            <p className="text-gray-300 lg:text-lg leading-relaxed mb-8">
              Si vous cherchez un collaborateur engagé pour enrichir vos
              projets, n&apos;hésitez pas à me contacter via le formulaire.
              J&apos;ai hâte de contribuer à votre succès tout en développant
              mes compétences.
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

      <div className="bg-white/5 max-w-6xl w-full mx-auto backdrop-blur-sm border border-white/10 rounded-xl p-6 mt-8 mb-0 hover:bg-white/10 transition-all duration-300">
        <div className="flex items-center justify-center mb-4">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
          <h3 className="text-white text-lg font-semibold">
            Plan Formation Insertion (PFI)
          </h3>
        </div>
        <p className="text-center text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          Je suis éligible au{" "}
          <span className="text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded">
            plan PFI
          </span>{" "}
          du Forem, un programme permettant à l&apos;employeur de bénéficier
          d&apos;un soutien financier tout en formant le candidat selon ses
          besoins. Pour plus d&apos;informations, consultez le site du{" "}
          <a
            href="https://www.leforem.be/entreprises/aides-financieres-plan-formation-insertion.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline font-medium transition-colors duration-200"
          >
            Forem
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Contact;
