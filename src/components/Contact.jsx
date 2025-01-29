import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact">
      <section className="contact-section bg-[#080808] text-gray-400">
        <div className="flex flex-col lg:flex-row pt-8 px-8 space-y-6">
          <div className="contact-left lg:w-1/2 lg:border-r lg:border-r-gray-600 border-b border-b-gray-600 ">
            <div className="lets-connect w-full p-4">
              <h2 className="font-pixelify text-center text-2xl sm:text-3xl lg:text-5xl mb-5 md:mb-10 font-semibold bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-300 lg:text-lg">
                Développeur web front-end junior passionné par la création
                d&apos;interfaces modernes avec React et Tailwind CSS, je suis
                motivé et prêt à relever de nouveaux défis.{" "}
                <span className="block mt-4">
                  {" "}
                  Si vous cherchez un collaborateur engagé pour enrichir vos
                  projets, n&apos;hésitez pas à me contacter via le formulaire.
                  J&apos;ai hâte de contribuer à votre succès tout en
                  développant mes compétences.
                </span>
                <div className="flex space-x-6 justify-center mt-7 md:mt-12">
                  <a
                    href="https://github.com/ovo-thom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-purple-500 duration-200"
                  >
                    <FaGithub size={40} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thomas-thonnard-a520b72b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-purple-500 duration-200"
                  >
                    <FaLinkedin size={40} />
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <ContactForm />
          </div>
        </div>
        <p className="w-[90%] lg:w-[80%] mx-auto text-center text-sm sm:text-base md:text-lg text-gray-400 py-8 lg:py-20">
          Je suis éligible au{" "}
          <strong className="text-blue-500 underline">plan PFI</strong> du Forem, un
          programme permettant à l&apos;employeur de bénéficier d&apos;un
          soutien financier tout en formant le candidat selon ses besoins. Pour
          plus d&apos;informations, consultez le site du{" "}
          <a
            href="https://www.leforem.be/entreprises/aides-financieres-plan-formation-insertion.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-400"
          >
            Forem
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Contact;
