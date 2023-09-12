'use client'

import React, { createContext, useState } from 'react'
import { 
    ActiveSectionContextType, 
    ActiveSectionNameType,
} from '@/lib/types/activeSectionTypes'

type ActiveSectionProviderProps = {
    children : React.ReactNode
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({children} : ActiveSectionProviderProps) => {
    const [activeSection, setActiveSection] = useState<ActiveSectionNameType>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(Date.now() - 500);
            
  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider