import React from 'react'
import NavBar from './assets/components/NavBar.jsx'
import { Hero } from './assets/sections/Hero.jsx'
import TechnicalProficiency from './assets/sections/TechnicalPRoficiency.jsx'

const App = () => {
  return (
    <div className='mb-80'>
      <NavBar />
      <Hero />
      <TechnicalProficiency />
    </div>
  )
}

export default App