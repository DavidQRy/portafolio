import React from 'react'
import { useState } from 'react'

import Tabs from '../components/Tabs'
import { SKILL_TABS, SKILLS } from '../utils/data'

const TechnicalPRoficiency = () => {
  const [tabData, setData] = useState(SKILLS)
  const [activeTab, setActiveTab] = useState("all")

  const hadleTabValueChange = (value) => {

  }
  return (
    <section id='skills' className='bg-background mt-20'>
      <div className=''>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>
            Destrezas Técnicas
          </h4>
          <p className="text-sm text-center mt-4 leanding-6">
            Desarrollador Full Stack con experiencia en tecnologías modernas para crear soluciones escalables, eficientes y centradas en el usuario.
          </p>
        </div>

        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={hadleTabValueChange}
        />
      </div>
    </section>
  )
}

export default TechnicalPRoficiency