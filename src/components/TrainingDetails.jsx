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
    <div className="min-h-screen bg-[#080808] flex justify-center items-center text-white py-20">
      <div className="w-full flex flex-col sm:flex-row justify-center items-center">
        {trainings.map((training, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 justify-center items-center flex flex-col"
          >
            <h3 className="text-gray-50 md:text-2xl">{training.title}</h3>
            <div className="w-1/2 rounded-lg py-4">
              <img
                src={training.image}
                alt="diplôme becode"
                className="w-full max-w-[300px] h-[350px] mx-auto object-contain rounded-lg"
              />
            </div>
            <div className="w-2/3 h-40 shadow-lg shadow-[#235060] p-5 rounded-lg mt-5">
              <p className="text-[#235060] text-center">{training.date}</p>
              <p className="my-5 w-full text-center">{training.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TrainingDetails;
