import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formspree.io/f/xnnnkvwa", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setShowModal(true);
        e.target.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <>
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
        <div className="text-center mb-6">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-fit mx-auto mb-4">
            <FaEnvelope size={32} className="text-pink-400" />
          </div>
          <h3 className="text-white text-xl font-semibold">Contactez-moi</h3>
          <p className="text-gray-400 text-sm mt-2">
            Envoyez-moi un message et je vous répondrai rapidement
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-white text-sm font-medium mb-2"
            >
              Votre nom
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 outline-none focus:border-blue-400/50 focus:bg-white/15 transition-all duration-300"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Votre email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 outline-none focus:border-blue-400/50 focus:bg-white/15 transition-all duration-300"
              placeholder="johndoe@gmail.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-white text-sm font-medium mb-2"
            >
              Votre message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Écrivez votre message ici..."
              className="w-full p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 outline-none focus:border-blue-400/50 focus:bg-white/15 transition-all duration-300 resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-white/10 backdrop-blur-md border border-blue-400/30 hover:bg-blue-400/20 hover:border-blue-300/50 px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 transform shadow-xl shadow-blue-500/20"
          >
            Envoyer le message
          </button>
        </form>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={error ? "Erreur d'envoi" : "Message envoyé avec succès !"}
        message={
          error
            ? "Une erreur est survenue. Veuillez réessayer."
            : "Merci de m'avoir contacté, je vous répondrai bientôt."
        }
      />
    </>
  );
}
