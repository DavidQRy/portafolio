import React from 'react'
import NavBar from './assets/components/NavBar.jsx'
import { Hero } from './assets/sections/Hero.jsx'
import TechnicalProficiency from './assets/sections/TechnicalPRoficiency.jsx'
import AboutMe from './assets/sections/AboutMe.jsx'
import MyProjects from './assets/sections/MyProjects.jsx'
import ContactMe from './assets/sections/ContactMe.jsx'
import Footer from './assets/sections/Footer.jsx'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe/>
      <MyProjects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App