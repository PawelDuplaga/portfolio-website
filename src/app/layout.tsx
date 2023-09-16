import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'


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
       bg-gray-50 text-gray-950 relativept-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-80 transition-all`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] lg:right-[24rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] transition-all"></div>
        <div className="bg-[#dbd7fb] absolute top-[1rem] -z-10 left-[-35rem]
        h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] 
        lg:left-[-20rem] xl:left-[-15rem] 2xl:left-[22rem] dark:bg-[#676394] transition-all"></div>

        <ActiveSectionContextProvider>
          <ThemeSwitch />
          <Navbar />
          {children}
          <Toaster position="top-right"/>
          <Footer />
        </ActiveSectionContextProvider>

      </body>
    </html>
  )
}
