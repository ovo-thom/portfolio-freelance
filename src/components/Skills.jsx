import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';


import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import javascriptLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import tailwindLogo from '../assets/tailwind.png';
import sassLogo from '../assets/sass.png';
import nextjsLogo from '../assets/nextjs.png';
import gitLogo from '../assets/git.png';
import figmaLogo from '../assets/figma.png';


const skills = [
  { name: "HTML", image: htmlLogo },
  { name: "CSS", image: cssLogo },
  { name: "JavaScript", image: javascriptLogo },
  { name: "React", image: reactLogo },
  { name: "Tailwind CSS", image: tailwindLogo },
  { name: "Sass", image: sassLogo },
  { name: "Nextjs", image: nextjsLogo },
  { name: "Git", image: gitLogo },
  { name: "Figma", image: figmaLogo }
];


const Skills = () => {
  return (
    <section id="skills" className="relative py-10 md:py-20">
      <div className="background-filter"></div>
      <div className="sectionskills container mx-auto relative z-10">
        <h2 className="title-night text-2xl sm:text-3xl lg:text-5xl font-bold text-center mb-10 bg-gradient-to-b from-[#9e6cd1] via-[#0088cc] to-[#ff68b0] bg-clip-text text-transparent">Skills</h2>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={0} // Réduit l'espace entre les slides
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0, // Réduit l'espace pour les écrans >= 640px
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 0, 
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0, 
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-32 md:h-48">
                <img src={skill.image} alt={skill.name} className="w-14 h-14 md:w-16 md:h-16 mx-auto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Skills;

