import { useParams } from "react-router-dom";
import projects from "../data/projectData";

export default function ProjectList() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p>Projet introuvable</p>;

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="container mx-auto px-8 pt-20 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
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

        <div className="mb-8">
          <img
            src={project.image}
            className="w-full max-w-4xl mx-auto rounded-lg"
          />
        </div>

        <div className="prose prose-invert max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed">{project.description}</p>
        </div>

        {/* Liens demo/code */}
        <div className="flex justify-center gap-4 mt-8">
          {/* <a href={project.demoLink} className="btn-primary">Voir la démo</a> */}
          <a href={project.codeLink} className="btn-secondary">
            Code source
          </a>
        </div>
      </div>
    </div>
  );
}
