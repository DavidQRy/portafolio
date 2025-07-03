import React from 'react'
import PROFILE_PIC from '../images/profile.png'
// import ICON_1 from "./assets/images/icon-1.png";
// import ICON_2 from "./assets/images/icon-2.png";
// import ICON_3 from "./assets/images/icon-3.png";
// import ICON_4 from "./assets/images/icon-4.png";

export const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8 py-5">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">Hola, soy David</h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Desarrollador Full Stack
          </h1>
          
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            Apasionado por transformar ideas en experiencias digitales 
            impactantes. Con cada línea de código, busco ese
            punto perfecto donde el diseño elegante se encuentra con 
            la lógica impecable. Domino desde los fundamentos
            (HTML5, CSS3, JavaScript) hasta frameworks modernos como React y 
            Tailwind, pasando por la potencia del backend con 
            Node.js y PHP.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
              Ver Proyectos
            </button>
            <button className="flex-1 md:flex-none action-btn btn-scale-anim">
              Descargar CV
            </button>
          </div>

          {/* <div className="d-flex gap-4">
            <img src={ICON_1} alt="HTML5" className="tech-icon" />
            <img src={ICON_2} alt="CSS3" className="tech-icon" />
            <img src={ICON_3} alt="JavaScript" className="tech-icon" />
            <img src={ICON_4} alt="React" className="tech-icon" />
          </div> */}
        </div>

        <div className="">
            <img src={PROFILE_PIC} alt="Profile pic" />
        </div>
      </div>
    </section>
  );
};
