import { useParams } from "react-router-dom";
import projects from "../data/projectData";

export default function ProjectList() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p>Projet introuvable</p>;

  return (
    <div className="h-screen bg-[#080808] text-white">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
}
