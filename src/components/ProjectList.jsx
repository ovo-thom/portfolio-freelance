import { useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projectData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectList() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return <p>Projet introuvable</p>;

  function openModal(img) {
    setSelectedImage(img);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedImage(null);
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="container mx-auto px-8 pt-20 pb-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 py-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs sm:text-sm text-gray-300 bg-gray-800/50 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 sm:mb-8 bg-gray-900/20 rounded-lg p-2 sm:p-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-4xl mx-auto rounded-lg object-contain h-48 sm:h-64 md:h-80 lg:h-96"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center max-w-4xl mx-auto mb-8">
          {project.imageList.map((img, index) => (
            <div key={index} className="flex items-center">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-44 h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 hover:scale-105 transition-transform duration-200"
                onClick={() => openModal(img)}
              />
            </div>
          ))}
        </div>

        <div className="prose prose-invert max-w-4xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex items-baseline justify-center space-x-6">
          <div className="flex justify-center items-center space-x-2 mt-8 border border-gray-600 rounded-full w-64 p-2">
            <FaExternalLinkAlt className="text-lg" />
            <a
              href={project.demoLink}
              className="btn-primary hover:text-blue-300 duration-200"
            >
              Voir la démo
            </a>
          </div>
          <div className="flex justify-center items-center space-x-2 mt-8 border border-gray-600 rounded-full w-64 p-2">
            <FaGithub className="text-xl" />
            <a
              href={project.codeLink}
              className="btn-secondary hover:text-blue-300 duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code source
            </a>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black mx-4 bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={selectedImage}
            alt="Agrandie"
            className="md:max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={closeModal}
            className="absolute top-8 right-8 text-white text-3xl font-bold cursor-pointer"
            aria-label="Fermer la modale"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
