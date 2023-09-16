'use client'

import React from 'react'
import SectionHeading from '../SectionHeading'
import { experiencesData} from '@/lib/const/skillsData';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useSectionInView from '@/hooks/useSectionInView';
import useTheme from '@/hooks/useTheme';

const Experience = () => {

    const { ref } = useSectionInView("Experience", 1);
    const { theme } = useTheme()

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor=''>
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background:
                                    theme === "light" 
                                    ? "#f3f4f6" 
                                    : "rgb(156 163 175 / 0.1)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                padding: "1.3rem 2rem",

                            }}
                            contentArrowStyle={{
                                borderRight: 
                                    theme === "light" 
                                    ? "0.4rem solid #9ca3af" 
                                    : "0.4rem solid rgba(255, 255, 255, 0.5)"
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                display: "flex",
                                background: 
                                    theme === "light" 
                                    ? "white" 
                                    : "rgba(55, 65, 81, 1)" ,
                                transform: "translateY(1px)",
                                boxShadow: 
                                    theme === "light" 
                                    ? "0 0 0 2px white, inset 0 4px 10px rgba(0, 0, 0, 0.12), 0 2px 0 4px rgba(0, 0, 0, 0.05)" 
                                    : "none",
                                paddingTop: "2px"
                            }}
                        >
                            <h3 className="font-semibold capitalize dark:text-white">{item.title}</h3>
                            <div className="flex gap-2">
                                {item?.position && <h4 className="dark:text-white/40">{item.position} |</h4>}
                                <p className="font-normal !mt-0 dark:text-white/40">{item.location}</p>
                            </div>
                            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}

export default Experience