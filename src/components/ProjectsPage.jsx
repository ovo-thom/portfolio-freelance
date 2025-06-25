import { Link } from "react-router-dom";
import projects from "../data/projectData";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white p-8 w-full">
      <div className="flex justify-around space-x-5 w-[95%] mx-auto mt-20">
        {projects.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`}>
            <div className="relative border border-gray-700 rounded-xl p-3 group h-full w-full">
              <h3 className="text-sm sm:text-base md:text-lg xl:text-xl text-center text-gray-50 font-semibold ">
                {project.title}
              </h3>
              <div className="relative m-4 overflow-hidden rounded">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                />
                <div className="opacity-0 group-hover:opacity-100 flex h-full w-full bg-black/60 absolute top-0 left-0 items-center justify-center text-white text-xl font-semibold backdrop-blur-sm transition-all duration-300 ease-in-out transform group-hover:scale-105">
                  Voir le projet
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
