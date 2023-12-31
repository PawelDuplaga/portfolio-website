'use client'

import React ,{ useState, useContext} from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { links } from '@/lib/const/skillsData'
import clsx from "clsx"
import useActiveSectionContext from '@/hooks/useActiveSectionContext'

const Navbar = () => {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();
  return (
    <div className="z-[999] relative">
        <motion.div className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border
         border-white border-opacity-30 bg-white bg-opacity-80 shadow-lg 
         shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] 
         sm:rounded-full dark:bg-gray-950 dark:bg-opacity-60 dark:border-gray-950/20"
            initial={{y: -100, x: "-50%", opacity: 0}}
            animate={{y: 0, x: "-50%", opacity: 1}}
            // transition={{ duration: 0.4}}
        >
        </motion.div>
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500
            sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {
              links.map(link => (
                <motion.li className="h-3/4 flex items-center justify-center relative" 
                  key={link.hash}
                  initial={{y: -100, opacity: 0}}
                  animate={{y: 0, opacity: 1}}                  
                >
                  <Link
                   className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                    {
                      "text-gray-950 dark:text-white/80":
                        activeSection === link.name,
                    }
                  )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name)
                      setTimeOfLastClick(Date.now())
                    }}
                    >
                      {link.name}
                      {link.name === activeSection && (
                      <motion.span className="bg-white/60 shadow-[rgba(50,50,93,0.25)_0px_10px_10px_-14px_inset,rgba(0,0,0,0.3)_0px_12px_10px_-18px_inset] 
                      rounded-full absolute inset-0 -z-10 dark:bg-gray-950/10"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      ></motion.span>)}
                  </Link>
                </motion.li>
              ))
            }
          </ul>
        </nav>
    </div>
  )
}

export default Navbar