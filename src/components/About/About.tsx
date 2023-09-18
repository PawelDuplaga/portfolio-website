"use client";

import React from "react";
import { Variants, motion } from "framer-motion";
import SectionHeading from "../SectionHeading/SectionHeading";
import useSectionInView from "@/hooks/useSectionInView";
import useScreenWidth from "@/hooks/useScreenWidth";
import AboutWrapper from "../AboutWrapper/AboutWrapper";

export default function About() {

  return (
      <AboutWrapper>
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          After graduating with a degree in{" "}
          <span className="font-medium">Computer Science</span>, I decided to pursue my
          passion for programming with{" "} 
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with TypeScript and Prisma. I am always looking to
          learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </p>
        
        <p>
          <span className="italic">When I&apos;m not coding</span>, I enjoy playing
          basketball and cooking. For some time I&apos;m also interested in cinematography and{" "}
          <span className="font-medium">different types of design</span>.
        </p>
      </AboutWrapper> 
  );
}