'use client'

import React from 'react'
import SectionHeading from '../SectionHeading'
import { FaRegPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'
import { sendEmail } from '@/actions/send-email'
import ButtonSumbit from '../ButtonSumbit'
import toast from "react-hot-toast"
import { error } from 'console'

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
        <p className="text-gray-700 -mt-6 dark:text-white/50">
            Please contact me directly at{" "}
            <a 
            className="underline" 
            href="mailto:pawelduplagait@gmail.com"
            >pawelduplagait@gmail.com
            </a> 
            {" "}or trough this form.
        </p>
        
        <form className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
            const { data, error } = await sendEmail(formData)

            if (error) {
                toast.error(error)
                return;
            }

            toast.success("Email sent successfully.")

        }}>
            <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            />
            <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
            />
            <ButtonSumbit />
        </form>
    </motion.section>
  )
}

export default Contact