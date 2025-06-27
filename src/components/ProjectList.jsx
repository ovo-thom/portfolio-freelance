import { useParams } from "react-router-dom";
import projects from "../data/projectData";
import { FaGithub } from "react-icons/fa";

export default function ProjectList() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p>Projet introuvable</p>;

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

        <div className="prose prose-invert max-w-4xl mx-auto px-4">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Liens demo/code */}
        <div className="flex justify-center space-x-2 mt-8 border border-gray-600 rounded-full w-64 p-2 mx-auto">
          {/* <a href={project.demoLink} className="btn-primary">Voir la démo</a> */}
          <FaGithub className="text-xl" />
          <a
            href={project.codeLink}
            className="btn-secondary hover:text-blue-300 duration-200"
            target="blank"
          >
            Code source
          </a>
        </div>
      </div>
    </div>
  );
}
