'use client'

import React from 'react'
import SectionHeading from "@/components/SectionHeading"
import { projectsData } from '@/lib/const/skillsData'
import { Project } from '../Project/Project'
import { useActiveSection } from '@/zustand/useActiveSection'

const Projects = () => {
  
  const { ref } = useActiveSection("Projects")

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
        <SectionHeading>My Projects</SectionHeading>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
              <Project {...project}/>
          </React.Fragment>
        ))}
    </section>
  )
}

export default Projects


