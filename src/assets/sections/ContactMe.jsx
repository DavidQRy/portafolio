import React from 'react'
import { IoMdMail } from 'react-icons/io'
import { ABOUT_ME } from '../utils/data'
import ContactInfoCard from '../components/ContactInfoCard'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdOutlineWeb } from 'react-icons/md'
const ContactMe = () => {
  return (
    <section id="contact">
      <div className="container mx-auto p-10">
        <div className="w-full mx-auto lg:w-[60vw]">
          <h4 className="section-title"> Contactamé</h4>
          <p className="text-sm text-center mt-4 leading-6">
            Soy un Desarrollador muy versatil con basta experiencia
            y conocimiento en las tecnologías más modernas, complementado
            con el conocimiento en otras herramientas como git y procimamente docker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.contactInfo.email}/>
            <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.contactInfo.phone}/>
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.contactInfo.website}/>
          </div>
          <div>
            <h5 className="md:hidden text-secondary text-lg font-medium mt-4 pb-5">
              Fomulario  de Contacto
            </h5>
          <form className="flex flex-col">
              <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  id="" className="input-box"
                  autoComplete="off"
              />
              <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="" className="input-box"
                  autoComplete="off"
              />
              <input
                  type="textarea"
                  name="message"
                  placeholder="Message"
                  id=""
                  row={3}
                  className="input-box"
                  autoComplete="off"
              />
              <button className='action-btn btn-scale-anim'>SUBMIT</button>
          </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactMe