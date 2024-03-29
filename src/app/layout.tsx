
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'
import ThemeContextProvider from '@/context/theme-context'
import ScreenWidthProvider from '@/context/screen-width-context'
import { MotionConfig } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paweł Duplaga | Portfolio',
  description: 'Paweł is full-stack developer with 2 years of commercial experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}
       bg-gray-50 text-gray-950 relative pt-28 sm:pt-48 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-80 transition-all`}>
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] lg:right-[24rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] transition-all"></div> */}
        <div className="bg-[#dbd7fb] absolute top-[1rem] -z-10 left-[-35rem]
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-20rem] xl:left-[-15rem] 2xl:left-[22rem] dark:bg-[#676394] transition-all"></div>
        <div className="bg-[#fbe2e3] absolute top-[120rem] -z-10 right-[11rem] lg:right-[24rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-[68.75rem] dark:bg-[#182C61] opacity-40
         transition-all"></div>
         {/* <div className="bg-gray-50  absolute top-[150rem] -z-10 left-[-35rem]
        h-[31.25rem] w-[50rem] rounded-full blur-[30rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-20rem] xl:left-[-15rem] 2xl:left-[22rem] dark:bg-[#211F38] transition-all"></div>
        <div className="bg-gray-50  absolute top-[90rem] -z-10 right-[11rem] lg:right-[20rem] xl:right-[48%] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[14rem] sm:w-[44rem] dark:bg-[#182C61] opacity-70
         transition-all"></div>
        <div className="bg-gray-50  absolute top-[170rem] -z-10 right-[11rem] lg:right-[20rem] xl:right-[36%] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[40rem] dark:bg-[#182C61] opacity-50
         transition-all"></div>
        <div className="bg-gray-50 absolute top-[235rem] -z-10 left-[-25rem]
        h-[40.25rem] w-[50rem] rounded-full blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-20rem] xl:left-[-15rem] 2xl:left-[50rem] dark:bg-[#011F38] transition-all"></div> */}

       <ScreenWidthProvider>
        <ThemeContextProvider>
         <ActiveSectionContextProvider>
              <ThemeSwitch />
              <Navbar />
              {children}
              <Toaster position="top-right"/>
              {/* <Footer /> */}
         </ActiveSectionContextProvider>
        </ThemeContextProvider>
       </ScreenWidthProvider>

      </body>
    </html>
  )
}
