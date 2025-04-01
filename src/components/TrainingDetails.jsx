import becode from "../assets/becode.png";
import sql from "../assets/sql.png";

function TrainingDetails() {
  const trainings = [
    {
      title: "Becode",
      date: "20 février 2024 - 09 septembre 2024",
      description:
        "Formation de 7 mois, axée sur la pédagogie active et le travail en équipe plus 3 mois de stage en entreprise.",
      image: becode,
    },
    {
      title: "Technofutur",
      date: "10 février 2025 - 07 mars 2025",
      description:
        "Formation à distance de 4 semaines sur la manipulation des bases de données.",
      image: sql,
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] flex justify-center items-center text-white pt-16 sm:py-20">
      <div className="w-full flex flex-col sm:flex-row justify-center items-center">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 sm:h-54 justify-center items-center flex flex-col mb-12"
          >
            <h3 className="text-gray-50 text-lg sm:text-xl md:text-2xl font-semibold">{training.title}</h3>
            <div className="w-1/2 rounded-lg py-4">
              <img
                src={training.image}
                alt={`diplôme ${training.title}`}
                className="w-full max-w-[300px] sm:h-[240px] md:h-[350px] mx-auto object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="w-2/3 sm:h-48 lg:h-44 shadow-lg shadow-[#235060] p-3 sm:p-5 rounded-lg">
              <p className="text-[#235060] text-sm text-center">
                {training.date}
              </p>
              <p className="my-5 w-full text-gray-100 text-center text-[13px] sm:text-sm lg:text-lg">
                {training.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TrainingDetails;
