'use client'

import React, { useEffect } from 'react'
import SectionHeading from "@/components/SectionHeading"
import { projectsData } from '@/lib/const/skillsData'
import { Project } from '../Project/Project'
import { useInView } from 'react-intersection-observer'
import useActiveSectionContext from '@/hooks/useActiveSectionContext'

// interface ProjectProps {
//     readonly title : string,
//     readonly description : string,
//     readonly tags : readonly string[],
//     readonly imageUrl : StaticImageData,
// }

const Projects = () => {
  const {ref, inView} = useInView({
    threshold: 0.5
  });
  const {setActiveSection} = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects")
    }
  },[inView, setActiveSection])
  
  const mapProjectsNodes = () => {
    return projectsData.map((project, index) => (
        <React.Fragment key={index}>
            <Project {...project}/>
        </React.Fragment>
    ))
  }

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {mapProjectsNodes()}
        </div>
    </section>
  )
}

export default Projects


