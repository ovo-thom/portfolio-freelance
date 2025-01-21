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
      <form
        onSubmit={handleSubmit}
        className="mx-auto py-4 px-8 border border-slate-800 sm:max-w-[70%] lg:w-3/4 rounded-xl"
      >
        <FaEnvelope size={40} className="text-blue-900 block mx-auto" />
        <div className="mb-4">
          <label htmlFor="nom" className="block text-lg">
            Votre nom
          </label>
          <input
            type="text"
            name="name"
            className="w-full p-1 rounded-lg text-black outline-none border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg">
            Votre email
          </label>
          <input
            type="email"
            name="email"
            className="w-full p-1 rounded-lg text-black border-gray-300 outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nom" className="block text-lg">
            Votre message
          </label>
          <textarea
            name="message"
            placeholder="Ecrivez votre message"
            className="w-full h-28 resize-none p-1 rounded-lg text-black outline-none focus:border-blue-900 focus:ring-2 focus:ring-blue-900"
            required
          ></textarea>
          <button
            type="submit"
            className="block mx-auto border border-blue-900 px-6 py-1 rounded-md mt-3"
          >
            Send
          </button>
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
      </form>
    </>
  );
}
