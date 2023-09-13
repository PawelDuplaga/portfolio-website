import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "public/corpcomment.png";
import rmtdevImg from "public/rmtdev.png";
import hypespaceImg from "public/Screenshot_516.png";
import profileImg from "public/PROF.png"
import potfolioImgDark from "public/Screenshot_515.png"
import potfolioImgLight from "public/Screenshot_517.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const IntroData = {
  profileImg : profileImg,
  description : "Im developer"
} as const


export const experiencesData = [
  {
    title: "Wrocław University of Science and Technology",
    location: "Wrocław, Poland",
    position: null,
    description:
      "Bachelor of Engineering in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2022",
  },
  {
    title: "Sellintegro",
    position: "Junior C# Developer",
    location: "Wrocław, Poland",
    description:
      "Accomplished software developer with a track record of enhancing system performance through bug resolution and successful implementation of new functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "DevNet",
    location: "Wrocław, Poland (remote)",
    position: "Software Engineer",
    description:
      "Contributed significantly to a high-impact project focused on developing automatic algorithmic energy trading software for European markets. Collaborated within a specialized team responsible for the non-algorithmic backend components of the project.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Rigby",
    location: "Wrocław, Poland (remote)",
    position: "FullStack Engineer",
    description:
      "Helping building fast e-commerce apps for individual clients.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "This website",
    githubLink: "https://github.com/PawelDuplaga/portfolio-website",
    description:
      "Simple, minimalistic personal portoflio for current and future projects.",
    tags: ["React", "Next.js","TypeScript", "Tailwind", "Framer motion"],
    imageUrl: [potfolioImgLight, potfolioImgDark]
  },
  {
    title: "Hypespace",
    githubLink: "https://github.com/PawelDuplaga/hypespace_frontend",
    description:
      "E-commerce web application, using headless cms - Medusa.js ",
    tags: ["Medusa.js", "React", "TypeScript", "Next.js", "Zustand"],
    imageUrl: [hypespaceImg,]
  },
  // {
  //   title: "Word Analytics",
  //   githubLink: "https://github.com/PawelDuplaga/hypespace_frontend",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;


export const skillsData = [
    ".NET",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML",
    "CSS", 
    "Git",
    "Tailwind",
    "MongoDb",
    "PostgreSQL",
    "Python",
    "Framer Motion",
    "Medusa.js"
] as const;