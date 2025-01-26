import Typewriter from "typewriter-effect";
import owl from "../assets/owl.jpg";
import plumehero from "../images/plume-hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative text-white h-screen flex items-center"
    >
      <div className="absolute inset-0 z-0 hue-rotate">
        <img
          src={plumehero}
          alt="Plume Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative w-full h-[40%] bg-black opacity-80 z-10 flex flex-col md:flex-row items-center">
        <div className="w-2/3 pl-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6 md:mb-8 font-semibold">
            Bonjour, je suis{" "}
            <Typewriter
              options={{
                strings: ["Thomas"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl">
            Développeur Web Front-End Junior
          </p>
        </div>
      </div>

      <div className="absolute md:right-24 bottom-26 z-20">
        <img
          src={owl}
          alt="Profile"
          className="rounded-full w-40 h-64 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-90 xl:h-90 object-cover border"
        />
      </div>
    </section>
  );
};

export default Hero;
