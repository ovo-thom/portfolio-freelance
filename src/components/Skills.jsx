import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Particles from 'react-tsparticles';


import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import javascriptLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import tailwindLogo from '../assets/tailwind.png';
import sassLogo from '../assets/sass.png';
import nodejsLogo from '../assets/nodejs.png';
import gitLogo from '../assets/git.png';
import figmaLogo from '../assets/figma.png';


const skills = [
  { name: "HTML", image: htmlLogo },
  { name: "CSS", image: cssLogo },
  { name: "JavaScript", image: javascriptLogo },
  { name: "React", image: reactLogo },
  { name: "Tailwind CSS", image: tailwindLogo },
  { name: "Sass", image: sassLogo },
  { name: "Nodejs", image: nodejsLogo },
  { name: "Git", image: gitLogo },
  { name: "Figma", image: figmaLogo }
];



const Skills = () => {
  return (
    <section id="skills" className="relative py-20">
      <div className="background-filter"></div>
      <div className="sectionskills container mx-auto relative z-10">
        <h2 className="title text-4xl font-bold text-center mb-10 text-white">Tech Skills</h2>
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
                <img src={skill.image} alt={skill.name} className="w-10 h-10 md:w-14 md:h-14 mx-auto" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Skills;




// import React from 'react';
// import htmlLogo from '../assets/html.png';
// import cssLogo from '../assets/css.png';
// import javascriptLogo from '../assets/javascript.png';
// import reactLogo from '../assets/react.png';
// import tailwindLogo from '../assets/tailwind.png';

// const skills = [
//   { name: "HTML", image: htmlLogo },
//   { name: "CSS", image: cssLogo },
//   { name: "JavaScript", image: javascriptLogo },
//   { name: "React", image: reactLogo },
//   { name: "Tailwind CSS", image: tailwindLogo }
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 bg-gray-100">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
//         <div className="flex flex-wrap justify-center">
//           {skills.map((skill, index) => (
//             <div key={index} className="m-4 p-4 bg-white rounded shadow-md w-30 text-center flex items-center justify-center">
//               <img src={skill.image} alt={skill.name} className="w-14 h-14" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;