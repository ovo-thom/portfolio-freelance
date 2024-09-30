import Typewriter from 'typewriter-effect';
import profileImage from '../assets/futurprofil.jpg';
import Navbar from './Navbar'; 

const Hero = () => {
    return (
     <section id="home" className="img-section text-white h-screen flex items-center hue-rotate">
        <Navbar />
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left p-4 mx-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 md:mb-8 font-semibold">
              Bonjour, je suis{' '}
              <Typewriter
                options={{
                  strings: ['Thomas'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-lg sm:text-xl md:text-3xl">Développeur Web Front-End Junior</p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end p-4">
            <img
              src={profileImage}
              alt="Profile"
              className="rounded-full w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover mx-10"
            />
          </div>
        </div>
      </section>
    );
};

export default Hero;