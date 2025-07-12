import Typewriter from "typewriter-effect";
import owl from "../assets/owl.jpg";
import owlWebp from "../assets/owl.webp";
import plumehero from "../images/plume-hero.webp";
import plumeheroJpg from "../images/plume-hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white h-screen flex flex-col md:flex-row items-center justify-center md:justify-between"
    >
      <div className="absolute inset-0 z-0 hue-rotate">
        <picture>
          <source srcSet={plumehero} type="image/webp" />
          <img
            src={plumeheroJpg}
            alt="Plume Hero Background"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      <div className="relative w-full flex flex-col md:flex-row md:h-[35%] items-center justify-evenly md:pl-12 p-4">
        <div className="absolute inset-0 md:bg-black md:opacity-70"></div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left sm:mt-10 md:mt-0 mb-8 md:mb-0 z-10">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 md:mb-8 font-semibold">
            Bonjour, je suis{" "}
            <Typewriter
              options={{
                strings: ["Thomas"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl">
            Développeur Web Front-End Junior
          </p>
        </div>

        <div className="relative z-30 flex justify-center items-center md:mt-0 mt-6">
          <picture>
            <source srcSet={owlWebp} type="image/webp" />
            <img
              src={owl}
              alt="Profile"
              className="rounded-full object-cover border shadow-lg w-32 z-20 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-64 xl:h-64"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
