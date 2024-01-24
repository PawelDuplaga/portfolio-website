import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hypespaceImg from "public/Screenshot_516.png";
import profileImg from "public/profile.png"
import potfolioImgDark from "public/Screenshot_515.png"
import potfolioImgLight from "public/Screenshot_517.png"
import NetflixImg from "public/Screenshot_536-min.png";
import AnimationImg from "public/Screenshot_537-min.png";
import AgencyImg from "public/Screenshot_603-min.png";
import AnimationImg2 from "public/Screenshot_606-min.png";

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
      "Bachelor of Engineering in Computer Science - throughout my education, I gained proficiency in several programming languages. Additionally, I completed multiple coursework in project management and software engineering.",
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
      "I contributed to a project aimed at creating software for automated energy trading within European markets, maintaining and expanding the system by developing new microservices.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Rigby",
    location: "Wrocław, Poland (remote)",
    position: "FullStack Engineer",
    description:
      "I contributed to the development of e-commerce solutions for clients. My responsibilities included webapp page development and seamless integration of Medusa.js headless CMS with the web applications. In projects I'm focused on providing rapid performance with prioritizing a good customer experience.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "This website",
    githubLink: "https://github.com/PawelDuplaga/portfolio-website",
    domainLink: null,
    description:
      "Simple, minimalistic personal portoflio for current and future projects.",
    tags: ["React", "Next.js","TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: [potfolioImgLight, potfolioImgDark]
  },
  {
    title: "Design Agency",
    githubLink: "https://github.com/PawelDuplaga/creative-agency-html-js",
    domainLink: "https://duplaga-studio.vercel.app/",
    description:
      "Design Agency website",
    tags: ["HTML", "TypeScript", "SCSS", "GSAP"],
    imageUrl: [AgencyImg]
  },
  {
    title: "Netflix clone",
    githubLink: "https://github.com/PawelDuplaga/netflix-clone",
    domainLink: "https://flix-clone-pd.vercel.app/",
    description: "Netflix clone with google and github auth. User can add movies to favourites.",
    tags: ["Next.js", "TypeScript", "NextAuth", "API", "MongoDb Atlas", "Prisma"],
    imageUrl: [NetflixImg]
  },
  {
    title: "Interactive Animation",
    githubLink: "https://github.com/PawelDuplaga/3d-test",
    domainLink: "https://personal-site-pd-test.vercel.app/",
    description:
      "Cooler than a cooler, interactive animation for hero section",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    imageUrl: [AnimationImg2]
  },
  {
    title: "Hypespace",
    githubLink: "https://github.com/PawelDuplaga/hypespace_frontend",
    domainLink: null,
    description:
      "E-commerce web application, using headless cms - Medusa.js ",
    tags: ["Medusa.js", "React", "TypeScript", "Next.js", "Zustand"],
    imageUrl: [hypespaceImg,]
  },
  {
    title: "Interactive Animation 2",
    githubLink: "https://github.com/PawelDuplaga/creative-app",
    domainLink: "https://creative-app-theta.vercel.app/",
    description:
      "Cool interactive animation for hero section",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: [AnimationImg]
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
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "HTML",
    "CSS",
    "SCSS", 
    "Git",
    "Tailwind",
    "Cypress",
    ".NET",
    "MongoDb",
    "PostgreSQL",
    "Python",
    "Framer Motion",
    "Medusa.js"
] as const;