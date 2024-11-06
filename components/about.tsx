"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-2 m-8">
        I am a passionate{" "}
        <span className="font-medium">Full Stack Developer</span> with a passion for building efficient and scalable
        web applications.{" "}
        <span className="font-medium">I have strong skills in technologies like React, Node.js,
        and database management with MongoDB and Firebase</span>.{" "}
        <span className="font-medium">I <span className="underline">enjoy</span> solving complex problems,
        whether it is optimizing performance or integrating APIs for seamless user experiences.</span> 
        is the problem-solving aspect. I {" "}
        <span className="font-medium">I have extensive experience developing a variety of projects,
        including e-commerce platforms, admin dashboards, and custom web solutions,
        all focused on user-friendly interfaces and seamless performance.</span> {" "}
        <span className="font-medium">
        My skills include React, Node.js, MongoDB, and Firebase, and Iam comfortable integrating APIs
        and optimizing systems for top performance. With a Bachelor's degree in Communications and Computer Engineering,
        I blend technical expertise with innovative problem-solving. I love learning new technologies
        and thrive on tackling challenges that push me to grow as a developer.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to .
      </p>
    </motion.section>
  );
}
