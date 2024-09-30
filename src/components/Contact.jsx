import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact-section bg-black text-white">
        <div className="main container flex p-12">
          <div className="contact-left w-1/2 border-r">
          <div className="lets-connect w-full p-4">
            <h2 className="title text-center text-white text-3xl mb-5 font-semibold">Let's Connect</h2>
            <p className="text-gray-300">
            Je suis enthousiaste à l'idée de mettre en pratique mes compétences et de les perfectionner au sein d'une équipe dynamique. Si vous recherchez un stagiaire motivé, prêt à s'investir pleinement et à apprendre, je serais ravi de discuter avec vous. N'hésitez pas à me contacter via le formulaire ou à l'adresse thonnard.thomas@gmail.com. J'ai hâte de contribuer à vos projets tout en développant mes compétences.
            </p>
            </div>
          </div>
          <div className="contact-right w-1/2">
            <form action="" className=" mx-auto p-8 border border-slate-500 w-3/4 rounded-lg">
              <div className="mb-4">
                <label htmlFor="nom" className="block">Votre nom</label>
                <input type="text" className="w-full p-1" placeholder="John"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block">Votre email</label>
                <input type="text" className="w-full p-1" placeholder="johndoe@gmail.com"/>
              </div>
              <div className="mb-4">
                <label htmlFor="nom" className="block">Votre message</label>
                <textarea
                  name=""
                  id=""
                  placeholder="Ecrivez votre message"
                  className="w-full h-28 resize-none p-1"
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

