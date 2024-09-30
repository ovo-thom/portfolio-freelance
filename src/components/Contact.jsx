
const Contact = () => {
  return (
    <div>
      <section className="contact-section bg-black text-white">
        <div className="container flex flex-col md:flex-row p-12 space-y-6">
          <div className="contact-left lg:w-1/2 lg:border-r border-b">
          <div className="lets-connect w-full p-4">
            <h2 className="title text-center text-white text-4xl mb-10 font-semibold">Let&apos;s Connect</h2>
            <p className="text-gray-300 text-xl">
            Je suis enthousiaste à l&apos;idée de mettre en pratique mes compétences et de les perfectionner au sein d&apos;une équipe dynamique. Si vous recherchez un stagiaire motivé, prêt à s&apos;investir pleinement et à apprendre, je serais ravi de discuter avec vous. N&apos;hésitez pas à me contacter via le formulaire ou à l&apos;adresse thonnard.thomas@gmail.com. J&apos;ai hâte de contribuer à vos projets tout en développant mes compétences.
            </p>
            </div>
          </div>
          <div className="contact-right md:w-1/2">
            <form action="" className=" mx-auto p-8 border border-slate-500 w-3/4 rounded-lg">
              <div className="mb-4">
                <label htmlFor="nom" className="block text-lg">Votre nom</label>
                <input type="text" className="w-full p-1" placeholder="John"/>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg">Votre email</label>
                <input type="text" className="w-full p-1" placeholder="johndoe@gmail.com"/>
              </div>
              <div className="mb-4">
                <label htmlFor="nom" className="block text-lg">Votre message</label>
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

