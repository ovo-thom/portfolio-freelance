import owl from "../assets/owl.jpg";
import owlWebp from "../assets/owl.webp";
import DecryptedText from "../components/DecryptedText";
import CosmicBackground from "../components/CosmicBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white h-screen flex flex-col md:flex-row items-center justify-center md:justify-between"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black">
        <CosmicBackground starDensity={180} shootingStarFrequency={0.003} />
      </div>

      <div className="relative w-full flex flex-col md:flex-row md:h-[35%] items-center justify-evenly md:pl-12 p-4">
        <div className="absolute inset-0 md:bg-black md:opacity-60"></div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left sm:mt-10 md:mt-0 mb-8 md:mb-0 z-10">
          <h1 className="text-2xl text-white sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 md:mb-8 font-semibold">
            <DecryptedText
              text="Bonjour je suis Thomas"
              speed={100}
              maxIterations={20}
              animateOn="view"
              sequential={true}
              repeat={true}
              repeatInterval={8000}
            />
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl md:text-xl font-light lg:text-2xl">
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
