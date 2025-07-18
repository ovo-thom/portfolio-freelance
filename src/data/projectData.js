import homepageImg from "../assets/popcornmovie/homepage_popcornmovie.png";
import advancedSearchImg from "../assets/popcornmovie/advancedsearch.png";
import movieDetailsImg from "../assets/popcornmovie/movie_details.png";
import favoritesImg from "../assets/popcornmovie/favorites.png";
import inputSearchImg from "../assets/popcornmovie/inputsearch.png";
import advancedInputImg from "../assets/popcornmovie/advancedsearch_inputselect.png";
import dailyDashboard from "../assets/daily_dashboard/dailydashboard.png";
import alarme from "../assets/daily_dashboard/alarme.png";
import chrono from "../assets/daily_dashboard/chrono.png";
import timer from "../assets/daily_dashboard/timer.png";
import filterIncident from "../assets/incident_manager/filter-incident.png";
import formIncident from "../assets/incident_manager/form-incident.png";
import gestionIncident from "../assets/incident_manager/gestion-incidents.png";
import artvibeDarkMode from "../assets/artvibe/artvibe_darkmode_homepage.png"
import artvibeLightMode from "../assets/artvibe/artvibe_lightmode-homepage.png"

const projects = [
  {
    id: 1,
    title: "Daily Dashboard",
    description:
      "Daily Dashboard : est une application web qui aide les utilisateurs à structurer leur journée et rester motivés. Elle regroupe plusieurs outils pratiques : une to-do list pour les tâches quotidiennes, un champ 'focus du jour', une citation inspirante renouvelée chaque jour, ainsi qu’un système complet d’alarme, chronomètre et minuteur.L’application affiche aussi la météo locale en temps réel grâce à l’API OpenWeather.L’interface est claire, responsive, et pensée pour favoriser l’organisation, la concentration et le bien-être au quotidien.",
    image: dailyDashboard,
    imageList: [dailyDashboard, chrono, alarme, timer],
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
    image: gestionIncident,
    imageList: [filterIncident, formIncident, gestionIncident],
    technologies: ["Next.js (React)", "Tailwind", "createPortal"],
    // demoLink: "https://meteoapp.com",
    codeLink: "https://github.com/ovo-thom/incident-manager",
  },
  {
    id: 3,
    title: "Popcorn Movie",
    description:
      "PopCorn Movie : est une application web moderne de découverte de films, développée avec Next.js et stylisée via Tailwind CSS. Elle s'appuie sur l'API de TMDb (The Movie Database) pour récupérer en temps réel les derniers films à l'affiche, les tendances du moment, et les résultats de recherche personnalisés. L'utilisateur peut rechercher des films grâce à une barre de recherche interactive, parcourir les films 'Now Playing' dans un slider responsive utilisant Swiper avec des animations fluides, et ajouter des films en favoris en un clic via une icône cœur avec persistance des données grâce au LocalStorage. L'application offre une expérience responsive optimisée sur tous les appareils. Le projet met en avant une architecture modulaire et propre, avec des composants réutilisables comme MovieCard, une gestion asynchrone des données à travers des fonctions dédiées (fetchNowPlayingMovie, fetchSearchMovies), et une intégration soignée du design UI pour une expérience utilisateur moderne et intuitive.",
    image: homepageImg,
    imageList: [
      advancedSearchImg,
      advancedInputImg,
      movieDetailsImg,
      favoritesImg,
      inputSearchImg,
      homepageImg,
    ],
    technologies: [
      "Next.js (React)",
      "Tailwind",
      "TMDB(API)",
      "Swiper.js",
      "LocalStorage",
    ],
    demoLink: "https://popcorn-movie-two.vercel.app/",
    codeLink: "https://github.com/ovo-thom/popcorn_movie",
  },
  {
    id: 4,
    title: "ArtVibe",
    description:
      "ArtVibe : est une application web moderne permettant d’explorer et de découvrir des œuvres visuelles inspirantes issues d’Unsplash. Grâce à une interface élégante et responsive, l’utilisateur peut filtrer les images par thème, effectuer des recherches dynamiques et naviguer facilement dans une galerie en grille masonry. Le projet intègre un mode clair/sombre, un scroll fluide, ainsi qu’un footer avec liens sociaux pour une expérience complète. Ce projet met en avant la maîtrise de Next.js, React et Tailwind CSS, l’intégration d’une API externe, la gestion de l’état et du filtrage côté client, ainsi que le souci du design et de l’accessibilité. ArtVibe est idéal pour illustrer des compétences en développement front-end moderne et en création d’interfaces utilisateur attractives.",
    image: artvibeLightMode,
    imageList: [
      artvibeDarkMode,
      artvibeLightMode
    ],
    technologies: [
      "Next.js (React)",
      "Unsplash API",
      "TypeScript",
      "Tailwind",
      "Responsive design",
      "Masonry (react-masonry-css)",
      "Dark/Light mode"
      
    ],
    demoLink: "https://popcorn-movie-two.vercel.app/",
    codeLink: "https://github.com/ovo-thom/artvibe",
  },
];

export default projects;
