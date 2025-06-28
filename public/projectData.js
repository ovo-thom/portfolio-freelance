const projects = [
  {
    id: 1,
    title: "Daily Dashboard",
    description:
      "Daily Dashboard est une application web qui aide les utilisateurs à structurer leur journée et rester motivés. Elle regroupe plusieurs outils pratiques : une to-do list pour les tâches quotidiennes, un champ 'focus du jour', une citation inspirante renouvelée chaque jour, ainsi qu’un système complet d’alarme, chronomètre et minuteur.L’application affiche aussi la météo locale en temps réel grâce à l’API OpenWeather.L’interface est claire, responsive, et pensée pour favoriser l’organisation, la concentration et le bien-être au quotidien.",
    image: "/dailydashboard.png",
    imageList: ["/alarme.png", "/chrono.png", "/timer.png"],
    technologies: [
      "Next.js (React)",
      "Tailwind",
      "API OpenWeather",
      "CLSx",
      "LocalStorage",
      "Vercel",
      "Github",
    ],
    // demoLink: "https://monportfolio.com",
    codeLink: "https://github.com/ovo-thom/daily-dashboard",
  },
  {
    id: 2,
    title: "Incident-Manager",
    description:
      "Une application de gestion d’incidents permettant de créer, filtrer, modifier et supprimer des signalements. Elle propose une interface claire pour suivre le statut des incidents (ouvert / résolu), avec affichage automatique de la date de résolution. Le tout est construit avec React et Tailwind CSS, en adoptant des composants modulaires et une gestion d’état efficace via useState.",
    image: "/gestion-incidents.png",
    imageList: ["/form-incident.png"],
    technologies: ["Next.js (React)", "Tailwind", "createPortal"],
    // demoLink: "https://meteoapp.com",
    codeLink: "https://github.com/ovo-thom/incident-manager",
  },
];

export default projects;
