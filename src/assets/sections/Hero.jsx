import React from 'react'
import PROFILE_PIC from '../images/profile-removebg-preview.png'
import ICON_1 from "../images/icon-1.png";
import ICON_2 from "../images/icon-2.png";
import ICON_3 from "../images/icon-3.png";
import ICON_4 from "../images/icon-4.png";
import ICON_5 from "../images/icon-5.png";
import ICON_6 from "../images/icon-6.png";
import {STATS} from "../utils/data.js"
import StatInfoCard from '../components/StatInfoCard.jsx';

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

        <div className="w-[300px] md:w-[370px] h-[350px] md:h-[420px] bg-green-100/50 rounded-3xl relative order-1 lg:order-2">
            <div className='profile-pic'>
              <img src={PROFILE_PIC} alt="Profile pic" className=''/>
            </div>

            <img 
              src={ICON_1}
              alt="icon 1"
              className='icon-img left-[-40px] bottom-20 rotate-[1.75deg]'
            />
            <img 
              src={ICON_2}
              alt="icon 2"
              className='icon-img left-5 bottom-[-18px] rotate-[2.75deg]'
            />
            <img 
              src={ICON_3}
              alt="icon 3"
              className='icon-img left-[200px] bottom-[-28px] rotate-[3.75deg]'
            />
            <img 
              src={ICON_4}
              alt="icon 4"
              className='icon-img icon-img left-[268px] lg:left-[326px] md:left-[326px] bottom-[38px] rotate-[4.75deg]'
            />
            <img 
              src={ICON_5}
              alt="icon 1"
              className='icon-img icon-img left-[268px] lg:left-[347px] md:left-[348px] bottom-[184px] rotate-[4.75deg]'
            />
            <img 
              src={ICON_6}
              alt="icon 1"
              className='icon-img icon-img left-[-30px] bottom-[238px] rotate-[3.75deg]'
            />
        </div>
      </div>
      <div className='flex gap-12 mt-16 md:mt-24 flex-wrap'>
        {STATS.map((item) => {
          return (<StatInfoCard key={item.id} value={item.value} label={item.label} />)
        })}
      </div>
    </section>
  );
};
