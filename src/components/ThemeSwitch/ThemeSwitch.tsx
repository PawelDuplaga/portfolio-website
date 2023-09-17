'use client'

import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useThemeStoreHook } from '@/zustand/useThemeStore';

const ThemeSwitch = () => {
    const {theme, toggleTheme} = useThemeStoreHook();
    console.log("Theme switch rerender")
    console.log(theme)
  return (
    <button 
        className='fixed bottom-5 right-5 bg-white 
        w-[3rem] h-[3rem] bg-opacity-0 backdrop-blur-[0.5rem] border 
        border-none shadow-2xl rounded-full flex items-center justify-center 
        hover:scale-[1.15] active:scale-105 dark:bg-gray-950/40 transition-all'
        name="theme switch button"
        onClick={() => toggleTheme()}

    >
        {theme === "light" ? <BsSun /> : <BsMoon/>}
    </button>
  )
}

export default ThemeSwitch