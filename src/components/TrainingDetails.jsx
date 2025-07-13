import becode from "../assets/becode.png";
import sql from "../assets/sql.png";
import react from "../assets/Certificate_React_Udemy.jpg";

function TrainingDetails() {
  const trainings = [
    {
      title: "Becode",
      date: "20 février 2024 - 09 septembre 2024",
      description:
        "Formation de 7 mois, axée sur la pédagogie active et le travail en équipe plus 3 mois de stage en entreprise.",
      image: becode,
      color: "blue-400",
    },
    {
      title: "Technofutur",
      date: "10 février 2025 - 07 mars 2025",
      description:
        "Formation à distance de 4 semaines sur la manipulation des bases de données.",
      image: sql,
      color: "purple-400",
    },
    {
      title: "Udemy",
      date: "23 avril 2025",
      description:
        "React de A à Z ainsi que Redux avec un projet à la fin, un générateur d'ombres interactif.",
      image: react,
      color: "pink-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br py-5 from-gray-950 via-slate-950 to-black flex justify-center items-center text-white pt-16 sm:py-20">
      <div className="w-full max-w-7xl px-4">
        <h2 className="title-night text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
          Mes Formations & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {trainings.map((training, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center mb-6">
                <span
                  className={`w-3 h-3 bg-${training.color} rounded-full mr-3`}
                ></span>
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
                  {training.title}
                </h3>
              </div>

              <div className="relative mb-6 group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all duration-500">
                  <img
                    src={training.image}
                    alt={`diplôme ${training.title}`}
                    className="w-[280px] h-[200px] sm:w-[300px] sm:h-[220px] md:w-[320px] md:h-[240px] object-contain rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${training.color}/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                ></div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full max-w-sm hover:bg-white/10 transition-all duration-300">
                <p
                  className={`text-${training.color} text-sm font-medium text-center mb-4 bg-${training.color}/10 px-3 py-1 rounded-full`}
                >
                  {training.date}
                </p>
                <p className="text-gray-300 text-center text-sm sm:text-base leading-relaxed">
                  {training.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TrainingDetails;
