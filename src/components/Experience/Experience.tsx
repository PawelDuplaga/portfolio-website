'use client'

import React from 'react'
import SectionHeading from '../SectionHeading'
import { experiencesData} from '@/lib/const/skillsData';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useSectionInView from '@/hooks/useSectionInView';
import useTheme from '@/hooks/useTheme';
import useScreenWidth from '@/hooks/useScreenWidth';
import {style} from '@/components/Experience/_Experience'

const Experience = () => {

    const { ref } = useSectionInView("Experience", 1);
    const { theme } = useTheme()
    const { isMobile } = useScreenWidth();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28">
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor='' animate={!isMobile}>
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            {...style(theme,item)}
                        >
                            <h3 className="font-semibold capitalize dark:text-white">{item.title}</h3>
                            <div className="flex gap-2 align items-center">
                                {item?.position && <h4 className="dark:text-white/40 border-r-2 pr-2 border-r-gray-500">{item.position}</h4>}
                                <p className="flex items-center font-normal !mt-0 dark:text-white/40">{item.location}</p>
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