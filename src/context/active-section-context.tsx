'use client'

import React, { createContext, useState } from 'react'
import { links } from '@/lib/const/skillsData'

type ActiveSectionNameType = typeof links[number]["name"]
type ActiveSectionProviderProps = {
    children : React.ReactNode
}
type ActiveSectionContextType = {
    activeSection : ActiveSectionNameType,
    setActiveSection : React.Dispatch<React.SetStateAction<ActiveSectionNameType>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({children} : ActiveSectionProviderProps) => {
    const [activeSection, setActiveSection] = useState<ActiveSectionNameType>("Home");
            
  return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection
    }}>
        {children}
    </ActiveSectionContext.Provider>
  )
}

export default ActiveSectionContextProvider