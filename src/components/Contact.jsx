import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact">
      <section className="contact-section bg-black text-white">
        <div className="flex flex-col lg:flex-row pt-8 px-8 space-y-6">
          <div className="contact-left lg:w-1/2 lg:border-r border-b ">
            <div className="lets-connect w-full p-4">
              <h2 className="title text-center text-blue-900 text-2xl sm:text-3xl lg:text-4xl mb-5 md:mb-10 font-semibold">
                Let&apos;s Connect
              </h2>
              <p className="text-gray-300 lg:text-xl">
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
                    className="text-blue-900 hover:text-gray-500 duration-200"
                  >
                    <FaGithub size={40} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thomas-thonnard-a520b72b5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:text-gray-500 duration-200"
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
        <p className="w-[70%] mx-auto text-center text-sm sm:text-lg md:text-xl lg:text-base text-gray-400 py-8">
          Je suis éligible au{" "}
          <strong className="text-blue-800 underline">plan PFI</strong> du Forem, un
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
