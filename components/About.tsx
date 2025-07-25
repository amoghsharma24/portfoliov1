import React, { useState } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { PiLightningFill } from "react-icons/pi";
import { BsApple } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi2";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="my-12 scroll-mt-16 md:my-16"
      aria-label="About me"
    >
      {/* About Me Intro */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Hey, I'm <span className="text-blue-400">Amogh Sharma</span>
        </h1>
        <p className="text-neutral-300 text-lg max-w-2xl">
          I'm a Computer Science student at RMIT Melbourne (graduating June
          2026), passionate about AI/ML, full-stack development, and building
          products that solve real-world problems. I love working at the
          intersection of technology, design, and human-centered innovation.
        </p>
      </div>
    </section>
  );
};

export default About;
