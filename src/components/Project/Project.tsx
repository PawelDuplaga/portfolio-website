'use client'

import React from 'react'
import { projectsData } from '@/lib/const/skillsData'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import useTheme from '@/hooks/useTheme'
import ProjectWrapper from '../ProjectWrapper/ProjectWrapper'

type ProjectProps = (typeof projectsData)[number]

export const Project = ({title, description, tags, imageUrl, githubLink}: ProjectProps) => {

  const { theme } = useTheme()

  const getImage = () => {
    if (theme === "dark" && imageUrl[1]){
      return imageUrl[1]
    }
    return imageUrl[0]
  }

    return (
      <ProjectWrapper>
        <section
            className="bg-gradient-to-bl from-transparent to-slate-200 dark:to-slate-300/10 hover:to-slate-300 dark:hover:to-slate-300/20 max-w-[42rem] md:w-[42rem]
            border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] transition-all ">
          <div className="py-4 px-5 pb-8 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[50%]">
            <h3 className="flex justify-between items-center text-2xl font-semibold">{title}
              <a href={githubLink} target="_"><BsGithub className="scale-[0.8] hover:scale-[1] dark:hover:text-white transition-all"/></a>
            </h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">{description}</p>
            <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
              {tags.map((tag, index) => (
                    <li className="bg-gray-50 dark:bg-gray-950/40 font-medium dark:backdrop-blur-md px-3 py-1 text-[0.7rem] 
                    uppercase tracking-wider text-black/70 hover:text-gray-950 dark:text-white/80 dark:hover:text-white rounded-full
                    shadow-[-6px_-6px_12px_rgba(255,255,255,0.3),6px_6px_12px_rgba(70,70,70,0.12)] hover:scale-[1.1] 
                    dark:shadow-none transition-all"
                    key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        
          <Image 
            src={getImage()}
            alt={description}
            loading="eager"
            quality={50}
            className="absolute hidden sm:block top-8 -right-40 sm:-right-44 md:-right-40 w-[28rem] h-[25rem] object-cover rounded-t-lg shadow-2xl
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2   
            
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
        
            group-hover:scale-[1.1] 
            group-even:-right-[initial] 
            group-even:-left-40
            group-even:sm:-left-44
            group-even:md:-left-40
            transition
            "
          />
        </section>
      </ProjectWrapper>
    )
}