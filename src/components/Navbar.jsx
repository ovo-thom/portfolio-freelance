import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar fixed top-0 left-0 w-full text-white py-4 px-6 lg:px-12 z-50 bg-gray-900'>
      <div className='container mx-auto flex justify-between items-center'>
        <a href="#home" className='headtitle text-3xl font-bold text-white'>Mon Portfolio</a>

        {/* Menu pour les grands écrans */}
        <div className="hidden md:flex text-xl">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className='ml-4 hover:underline'>Skills</a>
          <a href="#projects" className='ml-4 hover:underline'>Projects</a>
          <a href="#contact" className='ml-4 hover:underline'>Contact</a>
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
        <div className="md:hidden bg-gray-800 absolute top-full left-0 w-full flex flex-col items-center text-lg py-4">
          <a href="#about" onClick={toggleMenu} className="hover:underline py-2">About</a>
          <a href="#skills" onClick={toggleMenu} className='hover:underline py-2'>Skills</a>
          <a href="#projects" onClick={toggleMenu} className='hover:underline py-2'>Projects</a>
          <a href="#contact" onClick={toggleMenu} className='hover:underline py-2'>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;