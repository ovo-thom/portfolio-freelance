import { Link } from "react-router-dom";

function Training() {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-slate-950 to-black px-10 py-3 md:py-10">
      <h2 className="title-night text-3xl sm:text-3xl lg:text-5xl font-bold text-center py-3 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
        Training & Education
      </h2>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-8 my-8 sm:w-2/3 lg:w-2/3 mx-auto hover:bg-white/10 transition-all duration-300">
        <p className="text-gray-100 font-semibold text-center text-base sm:text-lg lg:text-xl">
          Découvrez les certifications que j&apos;ai obtenus.
        </p>
        <p className="text-gray-300 text-center text-sm sm:text-md 2xl:text-lg mt-4 italic">
          Cliquez sur le lien ci-dessous pour en savoir plus.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          to="/training"
          className="inline-block sm:mt-5 bg-gray-800/20 backdrop-blur-md border border-gray-600/30 hover:bg-gray-700/30 hover:border-gray-500/50 px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 transform shadow-xl shadow-gray-500/20"
        >
          Voir mes certifications
        </Link>
      </div>
    </section>
  );
}
export default Training;
