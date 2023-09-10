import React from 'react'
import SectionHeading from "@/components/SectionHeading"
import { projectsData } from '@/lib/const/skillsData'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

// interface ProjectProps {
//     readonly title : string,
//     readonly description : string,
//     readonly tags : readonly string[],
//     readonly imageUrl : StaticImageData,
// }

type ProjectProps = (typeof projectsData)[number]


export const Project = ({title, description, tags, imageUrl}: ProjectProps) => {
    return (
        <section>
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>

          <Image 
            src={imageUrl}
            alt={description}
            quality={95}
          />
        </section>
    )
}




const Projects = () => {

  const mapProjectsNodes = () => {
    return projectsData.map((project, index) => (
        <React.Fragment key={index}>
            <Project {...project}/>
        </React.Fragment>
    ))
  }


  return (
    <section>
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {mapProjectsNodes()}
        </div>
    </section>
  )
}

export default Projects


