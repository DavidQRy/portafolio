import React from 'react'
import PROFILE_PIC from '../images/profile-removebg-preview.png'
import { ABOUT_ME } from '../utils/data'

const AboutMe = () => {
  return (
    <section className='container mx-auto px-8 py-16'>
      <div className="flex flex-col lg:flex-row gap-16 items-start justify-between">
        <h4 className="block lg:hidden w-[200px] section-title text-left mb-16">
          Sobre Mí
        </h4>
        <div className='w-[300px] md:w-[370px] h-[350px] md:h-[428px] bg-green-100/50 rounded-3xl mx-auto my-auto'>
          <div className='profile-pic'>
            <img src={PROFILE_PIC} alt=" Profile Pic"/>
          </div>
        </div>

        <div className="flex-1">
          <h4 className='hidden lg:block w-[200px] section-title text-left'>
            Sobre Mí
          </h4>

          <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
            {ABOUT_ME.content}
          </p>
          <div className="flex gap-4 mt-6">
            {ABOUT_ME.socialLinks.map((item) => (
              <a key={item.label} className='cursor-pointer group' href="">
                <item.icon className='text-2xl text-secondary tansition-transform duration-300 group-hover:rotate-12 group-hover:scale-100 group-hover:translate-y-[-2px] group-hover:text-primary'/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe