'use client'

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro/Intro";
import Projects from "@/components/Projects/Projects";
import SectionDivider from "@/components/SectionDivider/SectionDivider";
import Skills from "@/components/Skills";
import useScreenWidth from "@/hooks/useScreenWidth";
import { MotionConfig } from "framer-motion";

export default function Home() {

  const { isMobile } = useScreenWidth();

  return (
    <main className="flex flex-col items-center px-4">
      {isMobile !== undefined && <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
        <Intro/>
        <SectionDivider />
        <About/>
        <Projects/>
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </MotionConfig>}
    </main>
  )
}
