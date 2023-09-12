
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import useActiveSectionContext from './useActiveSectionContext';
import type { ActiveSectionNameType } from '@/lib/types/activeSectionTypes';

const useSectionInView = (sectionName : ActiveSectionNameType, threshold = 0.75) => {

    const {ref, inView} = useInView({ threshold: threshold });
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
    
    useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName)
    }
    },[inView, setActiveSection, timeOfLastClick, sectionName])
    
    return {
        ref
    }
}

export default useSectionInView