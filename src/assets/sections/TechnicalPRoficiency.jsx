import React from 'react'
import { useState } from 'react'

import Tabs from '../components/Tabs'
import SkillCard from '../components/SkillCard'
import { SKILL_TABS, SKILLS } from '../utils/data'

import { motion } from 'framer-motion'
const TechnicalProficiency = () => {
  const [tabData, setData] = useState(SKILLS)
  const [activeTab, setActiveTab] = useState("all")

  const handleTabValueChange = (value) => {
    if (value == "all") {
      setData(SKILLS)
      setActiveTab("all")
      return;
    }

    const updateList = SKILLS.filter((skill) => skill.type === value)
    setData(updateList)
    setActiveTab(value)
  }
  return (
    <section id='skills' className='bg-gradient-to-r from-[#D1FAE5] to-[#FFFFFF] mt-20'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='section-title'>
            Destrezas Técnicas
          </h4>
          <p className="text-sm text-center mt-4 landing-6">
            Desarrollador Full Stack con experiencia en tecnologías modernas para crear soluciones escalables, eficientes y centradas en el usuario.
          </p>
        </div>

        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[430px]">
          {tabData.map((skill, index) => (
            <motion.div
            key={skill.id}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4, delay: index * 0.1}}
            >
              <SkillCard
              icon={<skill.icon className='w-6 h-6 text-primary'/>}
              skillName={skill.skill}
              description={skill.description}
              progress={skill.progress}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalProficiency