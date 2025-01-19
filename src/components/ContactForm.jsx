import { FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
  return (
    <form
              action="https://formspree.io/f/xnnnkvwa"
              method="POST"
              className="mx-auto py-4 px-8 border border-slate-500 sm:max-w-[70%] lg:w-3/4 rounded-xl"
            >
              <FaEnvelope size={40} className="text-blue-900 block mx-auto"/>
              <div className="mb-4">
                <label htmlFor="nom" className="block text-lg">
                  Votre nom
                </label>
                <input type="text" name="name" className="w-full p-1 rounded-lg text-black" placeholder="John" required/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg">
                  Votre email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-1 rounded-lg text-black"
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
                  className="w-full h-28 resize-none p-1 rounded-lg text-black"
                  required
                ></textarea>
                <button type="submit" className="block mx-auto border border-blue-900 px-6 py-1 rounded-md mt-3">Send</button>
              </div>
            </form>
  )
}