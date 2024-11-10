import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import taskmang from "@/public/taskmang.png";
import Ecommercei from "@/public/Ecommercei.png";
import EcommerceAdmin from "@/public/EcommerceAdmin.png";

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

export const experiencesData = [
  // {
  //   title: "Graduated High School",
  //   location: "Egypt, GH",
  //   description:
  //     "I graduated after 3 years of studying.",
  //   icon: React.createElement(LuGraduationCap),
  //   date: "2018 - 2020",
  // },
  {
    title: "Front-End Developer",
    location: "Egypt, Tanta",
    description:
      "Currently studying Computer Engineering, developing skills in software development, databases, algorithms, and system design for future growth.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Freelance",
    description:
      "Freelance web developer specializing in full-stack development, building responsive websites, e-Commerce solutions, and custom web applications.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: taskmang,
  },
  {
    title: "Ecommerce",
    description:
      "Online store offering a wide range of products with secure payment, fast shipping, user-friendly design, and seamless checkout.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: Ecommercei,
  },
  {
    title: "Admin panel",
    description:
      "Admin panel for managing ecommerce store with inventory tracking, order management, user roles, analytics, and real-time updates.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "TypeScript"],
    imageUrl: EcommerceAdmin,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;
