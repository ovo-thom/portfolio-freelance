const projects = [
  {
    id: 1,
    title: "Daily Dashboard",
    description:
      "Daily Dashboard est une interface web conçue pour accompagner les utilisateurs dans leur routine quotidienne et les aider à rester motivés et organisés. L'application centralise plusieurs outils pratiques : une to-do list pour planifier les tâches de la journée, un champ focus du jour pour garder ses objectifs en tête, une citation inspirante renouvelée quotidiennement, ainsi qu’un système d’alarme, chronomètre et minuteur utile pour gérer son temps de travail ou de pause. Elle intègre également une météo locale en temps réel, permettant de consulter rapidement les conditions extérieures grâce à l’API OpenWeather. L'ensemble est présenté dans une interface soignée, responsive, et pensée pour améliorer le bien-être et la productivité au quotidien.",
    image: "/dailydashboard.png",
    technologies: ["Next.js (React)", "Tailwind", "API OpenWeather", "CLSx", "LocalStorage", "Vercel", "Github"],
    // demoLink: "https://monportfolio.com",
    codeLink: "https://github.com/monpseudo/portfolio",
  },
  {
    id: 2,
    title: "Incident-Manager",
    description:
      "Une application de gestion d’incidents permettant de créer, filtrer, modifier et supprimer des signalements. Elle propose une interface claire pour suivre le statut des incidents (ouvert / résolu), avec affichage automatique de la date de résolution. Le tout est construit avec React et Tailwind CSS, en adoptant des composants modulaires et une gestion d’état efficace via useState.",
    image: "/gestion-incidents.png",
    technologies: ["Next.js (React)", "Tailwind", "createPortal"],
    // demoLink: "https://meteoapp.com",
    codeLink: "https://github.com/ovo-thom/incident-manager",
  },
];

export default projects;
