import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'




function Skills({ skills }: any) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1.2, }}
      whileInView={{ x: 0, opacity: 1 }}

      className="flex flex-col relative h-screen text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for current proficiency </h3>
      <div className='grid grid-cols-4 gap-5'>
        {skills?.slice(0, skills.length / 2).map((skill: any) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2).map((skill: any) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills