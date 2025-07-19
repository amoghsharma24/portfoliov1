import React from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiSupabase,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  // Add other icons you want in the top row
} from "react-icons/si";

// Define your skills in lists for each row
const SKILLS_ROW_1 = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  // Duplicate for a seamless loop
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
];

const SKILLS_ROW_2 = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  // Duplicate for a seamless loop
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
];

// A reusable component for a single scrolling row
const SkillRow = ({
  icons,
  direction = "left",
  duration = 40,
}: {
  icons: typeof SKILLS_ROW_1;
  direction?: "left" | "right";
  duration?: number;
}) => {
  // Each item is 80px wide (w-20) + 16px gap (gap-4) = 96px
  const itemWidth = 96;
  const numIcons = icons.length / 2; // Use original length for calculation
  const animationDistance = itemWidth * numIcons;

  return (
    <motion.div
      className="flex items-center gap-4"
      style={{ width: "max-content" }}
      animate={{
        x:
          direction === "left"
            ? [0, -animationDistance]
            : [-animationDistance, 0],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: duration,
        ease: "linear",
      }}
    >
      {icons.map(({ icon: Icon, name, color }, idx) => (
        <div
          key={`${name}-${idx}`}
          className="flex h-20 w-20 flex-col items-center justify-center rounded-xl border border-neutral-700/50 bg-neutral-800/60 shadow-md"
        >
          <Icon className="mb-1 h-7 w-7" style={{ color: color }} />
          <span
            className="w-full truncate px-1 text-center text-xs font-medium text-neutral-300"
            title={name}
          >
            {name}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section
      id="skills-placeholder" // Renamed to avoid duplicate ID if 'skills' is elsewhere
      className="my-12 scroll-mt-16 md:my-16"
      aria-label="Skills"
    >
      <div className="flex items-center justify-center">
        <div className="inline-block rounded-full bg-neutral-800/90 px-3 py-1 text-sm text-neutral-300 mb-8">
          Projects
        </div>
      </div>

      <div
        className="relative w-full overflow-x-hidden"
        style={{ height: "140px" }}
      >
        {/* Fading Edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black via-black/80 to-transparent" />

        {/* Top Row (Background, scrolls left) */}
        <div className="absolute top-0 opacity-70">
          <SkillRow icons={SKILLS_ROW_1} direction="left" duration={30} />
        </div>

        {/* Bottom Row (Foreground, scrolls right) */}
        <div className="absolute top-16">
          <SkillRow icons={SKILLS_ROW_2} direction="right" duration={35} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
