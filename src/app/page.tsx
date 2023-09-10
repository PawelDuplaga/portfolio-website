import About from "@/components/About/About";
import Intro from "@/components/Intro/Intro";
import Projects from "@/components/Projects/Projects";
import SectionDivider from "@/components/SectionDivider/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider />
      <About/>
      <Projects/>
    </main>
  )
}
