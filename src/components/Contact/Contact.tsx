'use client'

import React from 'react'
import SectionHeading from '../SectionHeading'
import { FaRegPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'
import { sendEmail } from '@/actions/send-email'

const Contact = () => {

  const { ref } = useSectionInView("Contact", 1)
 
  return (
    <motion.section 
    ref={ref}
    id="contact"
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.2
    }}
    viewport={{
        once: true
    }}
    >
        <SectionHeading>Contact me</SectionHeading>
        <p className="text-gray-700 -mt-6">
            Please contact me directly at{" "}
            <a 
            className="underline" 
            href="mailto:pawelduplagait@gmail.com"
            >pawelduplagait@gmail.com
            </a> 
            {" "}or trough this form.
        </p>
        
        <form className="mt-10 flex flex-col"
        action={async (formData) => {
            console.log("This running on client")
            console.log(formData)
            sendEmail(formData)
        }}>
            <input 
                className="h-14 px-4 rounded-lg borderBL"
                name="senderEmail"
                type="email" 
                placeholder="Your email"
                required
                maxLength={500}         
            />
            <textarea 
                className="h-52 my-3 rounded-lg borderBL p-4"
                name="message" 
                placeholder="Your message"
                required
                maxLength={500}             
            />
            <button className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
            bg-gray-900 text-white rounded-full outline-none transition-all" type="submit">
                Sumbit <FaRegPaperPlane className="text-xs opacity-70 transition-all"/>
            </button>
        </form>
    </motion.section>
  )
}

export default Contact