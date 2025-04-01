import { Link } from "react-router-dom";

function Training() {
  return (
    <section className="bg-[#080808] p-10">
      <h2 className="font-pixelify text-2xl sm:text-3xl lg:text-5xl font-bold text-center py-3 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
        Training & Education
      </h2>
      <div className="border sm:w-2/3 lg:w-2/3 mx-auto rounded-lg border-gray-700 px-6 bg-black shadow-lg shadow-blue-900 py-8 my-8">
        <p className="text-gray-100 font-semibold text-center text-base sm:text-lg lg:text-xl">
          Découvrez les diplômes que j&apos;ai obtenus.
        </p>
        <p className="text-gray-300 text-center text-sm sm:text-md 2xl:text-lg mt-4 italic">
          Cliquez sur le lien ci-dessous pour en savoir plus.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          to="/training"
          className="text-gray-500 text-base sm:text-lg lg:text-xl hover:text-gray-50 duration-300"
        >
          Voir mes diplômes
        </Link>
      </div>
    </section>
  );
}
export default Training;
