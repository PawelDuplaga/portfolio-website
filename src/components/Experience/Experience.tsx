'use client'

import React from 'react'
import SectionHeading from '../SectionHeading'
import { experiencesData, skillsData } from '@/lib/const/skillsData';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useSectionInView from '@/hooks/useSectionInView';

const Experience = () => {

    const { ref } = useSectionInView("Experience", 1);


  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor=''>
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                padding: "1.3rem 2rem",

                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af"
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                display: "flex",
                                background: "white",
                                transform: "translateY(1px)",
                                paddingTop: "2px"
                            }}
                        >
                            <h3 className="font-semibold capitalize">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}

export default Experience