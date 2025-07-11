const projects = [
  {
    id: 1,
    title: "Daily Dashboard",
    description:
      "Daily Dashboard : est une application web qui aide les utilisateurs à structurer leur journée et rester motivés. Elle regroupe plusieurs outils pratiques : une to-do list pour les tâches quotidiennes, un champ 'focus du jour', une citation inspirante renouvelée chaque jour, ainsi qu’un système complet d’alarme, chronomètre et minuteur.L’application affiche aussi la météo locale en temps réel grâce à l’API OpenWeather.L’interface est claire, responsive, et pensée pour favoriser l’organisation, la concentration et le bien-être au quotidien.",
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
    demoLink: "https://daily-dashboard-xi.vercel.app",
    codeLink: "https://github.com/ovo-thom/daily-dashboard",
  },
  {
    id: 2,
    title: "Incident-Manager",
    description:
      "Incident Manager : est une application de gestion d’incidents permettant de créer, filtrer, modifier et supprimer des signalements. Elle propose une interface claire pour suivre le statut des incidents (ouvert / résolu), avec affichage automatique de la date de résolution. Le tout est construit avec React et Tailwind CSS, en adoptant des composants modulaires et une gestion d’état efficace via useState.",
    image: "/gestion-incidents.png",
    imageList: ["/form-incident.png", "/filter-incident.png"],
    technologies: ["Next.js (React)", "Tailwind", "createPortal"],
    // demoLink: "https://meteoapp.com",
    codeLink: "https://github.com/ovo-thom/incident-manager",
  },
  {
    id: 3,
    title: "Popcorn Movie",
    description:
      "PopCorn Movie : est une application web moderne de découverte de films, développée avec Next.js et stylisée via Tailwind CSS. Elle s'appuie sur l'API de TMDb (The Movie Database) pour récupérer en temps réel les derniers films à l'affiche, les tendances du moment, et les résultats de recherche personnalisés. L'utilisateur peut rechercher des films grâce à une barre de recherche interactive, parcourir les films 'Now Playing' dans un slider responsive utilisant Swiper avec des animations fluides, et ajouter des films en favoris en un clic via une icône cœur avec persistance des données grâce au LocalStorage. L'application offre une expérience responsive optimisée sur tous les appareils. Le projet met en avant une architecture modulaire et propre, avec des composants réutilisables comme MovieCard, une gestion asynchrone des données à travers des fonctions dédiées (fetchNowPlayingMovie, fetchSearchMovies), et une intégration soignée du design UI pour une expérience utilisateur moderne et intuitive.",
    image: "/src/images/homepage_popcornmovie.png",
    imageList: ["/src/images/advancedsearch.png", "/src/images/advancedsearch_inputselect.png", "/src/images/movie_details.png", "/src/images/favorites.png", "/src/images/inputsearch.png", "/src/images/homepage_popcornmovie.png"],
    technologies: ["Next.js (React)", "Tailwind", "TMDB(API)", "Swiper.js", "LocalStorage"],
    demoLink: "https://meteoapp.com",
    codeLink: "https://github.com/ovo-thom/popcorn_movie",
  },
];

export default projects;
