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
    <>
      {/* Navbar visible sur grands écrans */}
      <nav
        className={`hidden md:block md:w-2/3 md:left-1/2 md:transform md:-translate-x-1/2 fixed top-[2%] rounded-lg text-white py-4 lg:px-12 bg-black bg-opacity-30 z-[999] duration-300 ${
          isVisible ? "transform-none" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <FaCode size={28} className="text-blue-500"/>
            <a
              href="#home"
              className="headtitle text-base sm:text-xl md:text-2xl font-bold ml-2 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent"
            >
              Portfolio
            </a>
          </div>

          {/* Menu pour les grands écrans */}
          <div className="text-xl">
            <a href="#about" className="hover:underline ml-4">About</a>
            <a href="#skills" className="ml-4 hover:underline">Skills</a>
            <a href="#projects" className="ml-4 hover:underline">Projects</a>
            <a href="#contact" className="ml-4 hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Menu burger visible sur petits écrans */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black opacity-95 z-50">
        <div className="flex justify-between items-center py-4 px-6">
          <FaCode size={28} className="text-blue-500"/>
          <button onClick={toggleMenu} className="text-2xl text-white focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu burger pour les petits écrans */}
        {isOpen && (
          <div className="bg-black text-white flex flex-col items-center text-lg py-4">
            <a href="#about" onClick={toggleMenu} className="hover:underline py-2 border-b border-b-blue-500 w-full text-center">About</a>
            <a href="#skills" onClick={toggleMenu} className="hover:underline py-2 w-full border-b border-b-purple-500 text-center">Skills</a>
            <a href="#projects" onClick={toggleMenu} className="hover:underline py-2 w-full border-b border-b-pink-500 text-center">Projects</a>
            <a href="#contact" onClick={toggleMenu} className="hover:underline py-2 w-full text-center">Contact</a>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
