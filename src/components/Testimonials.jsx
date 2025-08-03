import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Julie M.",
    company: "Entrepreneure, secteur bien-être",
    text: "Thomas a su donner vie à ma maquette Figma avec un rendu fidèle, moderne et rapide. Très à l’écoute, il a su me conseiller sur l’ergonomie et la performance. Je recommande !",
    color: "from-[#9e6cd1] via-[#0088cc] to-[#ff68b0]",
  },
  {
    name: "Alexandre D.",
    company: "Consultant digital",
    text: "Livraison rapide, code propre, communication fluide. Mon site est parfaitement responsive et correspond à mes attentes. Merci !",
    color: "from-green-400 via-blue-400 to-purple-400",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="w-full py-12 bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
        Témoignages clients
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`relative bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg flex flex-col h-full`}
          >
            <FaQuoteLeft className={`absolute -top-3 -left-2 md:-top-4 text-3xl text-indigo-300 md:-left-4 md:text-4xl bg-gradient-to-r ${t.color} bg-clip-text text-transparent opacity-70`} />
            <p className="text-lg text-gray-200 mb-6 italic">{t.text}</p>
            <div className="mt-auto">
              <span className="font-bold text-white">{t.name}</span>
              <span className="block text-sm text-gray-400">{t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
