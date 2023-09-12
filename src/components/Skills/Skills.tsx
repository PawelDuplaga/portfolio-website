'use client'

import React from 'react'
import SectionHeading from '../SectionHeading'
import { skillsData } from '@/lib/const/skillsData'
import useSectionInView from '@/hooks/useSectionInView'
import {motion} from 'framer-motion'
import { fadeInAnimationVariants } from './funcSkills'

const Skills = () => {

  const { ref } = useSectionInView("Skills", 1)

  return (
    <section id="skills" ref={ref} className="mb-28 scroll-mt-28 max-w-[53rem] text-center sm:mb-40">
        <SectionHeading>
            My Skills
        </SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) =>(
                <motion.li 
                    key={index} 
                    className="bg-white borderBL rounded-xl px-5 py-3"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                    custom={index}
                >
                    {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Skills