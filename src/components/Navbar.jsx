import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // État pour la visibilité
  const [lastScrollY, setLastScrollY] = useState(0); // Dernière position de défilement

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Si on défile vers le bas
        setIsVisible(false);
      } else {
        // Si on défile vers le haut
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY); // Mémorise la position actuelle
    };
    window.addEventListener("scroll", handleScroll);

    // Nettoyage de l'événement lors du démontage du composant
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-[2%] left-[25%] w-[50%] border-blue-900 rounded-lg  text-white py-4 px-6 lg:px-12 bg-black bg-opacity-30 z-[999] transition-transform duration-300 ${
        isVisible ? "transform-none" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FaCode size={28} className="text-blue-900"/>
          <a
            href="#home"
            className="headtitle text-base sm:text-xl md:text-2xl font-bold ml-2"
          >
            Mon Portfolio
          </a>
        </div>

        {/* Menu pour les grands écrans */}
        <div className="hidden md:flex text-xl">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#skills" className="ml-4 hover:underline">
            Skills
          </a>
          <a href="#projects" className="ml-4 hover:underline">
            Projects
          </a>
          <a href="#contact" className="ml-4 hover:underline">
            Contact
          </a>
        </div>

        {/* Icône du menu burger pour les petits écrans */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu burger pour les petits écrans */}
      {isOpen && (
        <div className="md:hidden bg-black absolute top-full left-0 w-full flex flex-col items-center text-lg py-4">
          <a
            href="#about"
            onClick={toggleMenu}
            className="hover:underline py-2"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="hover:underline py-2"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="hover:underline py-2"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:underline py-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
