
const steps = [
  {
    title: "Prise de contact & échange",
    desc: "Nous discutons ensemble de votre projet, de vos objectifs et de vos besoins spécifiques. Je vous conseille sur les meilleures solutions techniques selon votre activité.",
    color: "bg-green-400"
  },
  {
    title: "Analyse & étude de la maquette",
    desc: "Vous fournissez une maquette (Figma, Adobe XD, etc.) ou un cahier des charges détaillé. Je vérifie la faisabilité technique et propose, si besoin, des ajustements pour optimiser l’expérience utilisateur.",
    color: "bg-blue-400"
  },
  {
    title: "Développement du site",
    desc: "Je développe votre site vitrine en respectant la maquette fournie, avec React, Next.js et Tailwind CSS. Le site est responsive, rapide et optimisé pour le référencement.",
    color: "bg-purple-400"
  },
  {
    title: "Recette & ajustements",
    desc: "Nous testons ensemble le site sur différents supports. J’effectue les ajustements nécessaires pour garantir un rendu fidèle à la maquette et une expérience utilisateur optimale.",
    color: "bg-pink-400"
  },
  {
    title: "Mise en ligne & suivi",
    desc: "Je vous accompagne pour la mise en ligne du site et reste disponible pour toute question ou évolution future.",
    color: "bg-yellow-400"
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="w-full py-12 bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">
          Mon processus de travail
          {/* bg-gradient-to-l from-green-400 via-blue-400 to-purple-400 */}
        </h2>
        <ol className="space-y-6">
          {steps.map((step, idx) => (
            <li key={idx} className="flex items-start space-x-4">
              <span className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-black font-bold text-lg shadow-md ${step.color}`}>
                {idx + 1}
              </span>
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full">
                <div className="font-semibold text-white text-lg mb-1">{step.title}</div>
                <div className="text-gray-300 text-base">{step.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
