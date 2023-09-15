'use client'

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { Theme } from '@/lib/types/themeTypes';
import useTheme from '@/hooks/useTheme';

const ThemeSwitch = () => {
    const {theme, toggleTheme} = useTheme();

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