import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar visible sur grands écrans */}
      <nav
        className={`hidden border border-white/10 md:block md:w-2/3 md:left-1/2 md:transform md:-translate-x-1/2 fixed top-[2%] rounded-lg text-white py-4 lg:px-12 bg-black/30 backdrop-blur-md z-[999] transition-all duration-300 ease-in-out cursor-pointer ${
          isVisible ? "transform-none" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            {/* <FaCode size={28} className="text-blue-500" /> */}
            <Link
              to="/"
              className="title-night text-base sm:text-xl md:text-3xl font-bold ml-2 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent"
            >
              Thomas | Portfolio
            </Link>
          </div>

          {/* Menu pour les grands écrans */}
          <div className="text-xl">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="ml-6 hover:border-b-2 hover:border-blue-400 duration-200 hover:text-blue-300"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="ml-6 hover:border-b-2 hover:border-blue-400 duration-200 hover:text-blue-300"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="ml-6 hover:border-b-2 hover:border-blue-400 duration-200 hover:text-blue-300"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="ml-6 hover:border-b-2 hover:border-blue-400 duration-200 hover:text-blue-300"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </nav>

      {/* Menu burger visible sur petits écrans */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 shadow-lg">
        <div className="flex justify-between items-center py-4 px-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 focus:outline-none"
            aria-label="Retour à l'accueil"
          >
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-widest drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
              TT
            </span>
            <FaCode
              size={24}
              className="text-blue-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]"
            />
          </button>
          <button
            onClick={toggleMenu}
            className="text-2xl text-white focus:outline-none"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen ? "true" : "false"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu burger pour les petits écrans */}
        {isOpen && (
          <div className="bg-black/20 text-white flex flex-col items-center text-lg py-4">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:underline py-2 border-b border-b-blue-500 w-full text-center"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:underline py-2 w-full border-b border-b-purple-500 text-center"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="hover:underline py-2 w-full border-b border-b-pink-500 text-center"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="py-2 w-full text-center"
            >
              Contact
            </ScrollLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
