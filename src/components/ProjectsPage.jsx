import { Link } from "react-router-dom";
import projects from "../data/projectData";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white p-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[95%] mx-auto mt-20">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <div className="relative border border-gray-700 rounded-xl p-3 group h-full w-full">
              <h3 className="text-sm sm:text-base md:text-lg xl:text-xl text-center text-gray-50 font-semibold ">
                {project.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-1 mb-4 mt-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm text-gray-300 bg-gray-800/50 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="relative m-4 overflow-hidden rounded h-48 sm:h-56 md:h-64 bg-gray-900/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                />
                <div className="opacity-0 group-hover:opacity-100 flex h-full w-full bg-black/60 absolute top-0 left-0 items-center justify-center text-white text-xl font-semibold backdrop-blur-sm transition-all duration-300 ease-in-out transform group-hover:scale-105">
                  Voir le projet
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center mb-3 line-clamp-1">
                {project.description.substring(0, 60)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
