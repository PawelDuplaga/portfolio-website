'use client'

import React, { useRef } from 'react'
import { projectsData } from '@/lib/const/skillsData'
import Image from 'next/image'
import { useScroll, motion, useTransform } from 'framer-motion'

// interface ProjectProps {
//     readonly title : string,
//     readonly description : string,
//     readonly tags : readonly string[],
//     readonly imageUrl : StaticImageData,
// }

type ProjectProps = (typeof projectsData)[number]


export const Project = ({title, description, tags, imageUrl}: ProjectProps) => {
  const projectRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset:["0 1","1.33 1"]
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div 
        ref={projectRef}
        style={{
            scale : scaleProgress,
            opacity : opacityProgress
        }}
        className="group mb-3 sm:mb-10 last:mb-0"
        >
            <section
                className="bg-gradient-to-bl from-transparent to-slate-200 hover:to-slate-300 max-w-[42rem] 
                border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] transition">
              <div className="py-4 px-5 pb-8 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[50%]">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
                <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
                  {tags.map((tag, index) => (
                        <li className="bg-gray-100 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black/70 rounded-full
                        shadow-[-6px_-6px_12px_rgba(255,255,255,0.3),6px_6px_12px_rgba(70,70,70,0.12)] hover:scale-[1.1] transition"
                        key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            
              <Image 
                src={imageUrl}
                alt={description}
                quality={95}
                className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2   
                
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
            
                group-hover:scale-[1.1] 
                group-even:-right-[initial] 
                group-even:-left-40
                transition
                "
              />
            </section>
        </motion.div>
    )
}