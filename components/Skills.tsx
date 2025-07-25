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
} from "react-icons/si";

const SKILL_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "programming", label: "Programming" },
  { key: "db", label: "DBs" },
];

const SKILLS: {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  category: string[];
}[] = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: ["frontend", "programming"],
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E",
    category: ["backend", "db"],
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: ["frontend"],
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
    category: ["programming", "backend"],
  },
  {
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C",
    category: ["programming"],
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    category: ["frontend", "programming"],
  },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", category: ["frontend"] },
];

const getSkillRow = (skills: typeof SKILLS) => [...skills, ...skills];

// A reusable component for a single scrolling row
const SkillRow = ({
  icons,
  direction = "left",
  duration = 40,
}: {
  icons: typeof SKILLS;
  direction?: "left" | "right";
  duration?: number;
}) => {
  const itemWidth = 96;
  const numIcons = icons.length / 2;
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
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  // Filter skills by selected category
  const filteredSkills =
    selectedCategory === "all"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category.includes(selectedCategory));

  const rowIcons = getSkillRow(filteredSkills);

  return (
    <section
      id="skills-placeholder"
      className="my-12 scroll-mt-16 md:my-16"
      aria-label="Skills"
    >
      <div className="flex items-center">
        <div className="inline-block rounded-full bg-neutral-800/90 px-3 py-1 text-sm text-neutral-300 mb-8">
          Skills
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6 flex gap-2">
        {SKILL_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors border border-neutral-700/60 focus:outline-none focus:ring-2 focus:ring-neutral-500/60 ${
              selectedCategory === cat.key
                ? "bg-neutral-700 text-white"
                : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
            }`}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div
        className="relative w-full overflow-x-hidden overflow-y-hidden"
        style={{ minHeight: "192px" }}
      >
        {selectedCategory === "all" ? (
          <>
            {/* Fading Edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black via-black/80 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black via-black/80 to-transparent" />
            <div className="flex flex-col gap-4 w-full">
              {/* Top Row (Background, scrolls left) */}
              <div className="opacity-70">
                <SkillRow icons={rowIcons} direction="left" duration={30} />
              </div>
              {/* Bottom Row (Foreground, scrolls right) */}
              <div>
                <SkillRow icons={rowIcons} direction="right" duration={35} />
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(90px,1fr))] gap-2 w-full">
            {filteredSkills.map(({ icon: Icon, name, color }, idx) => (
              <div
                key={`${name}-${idx}`}
                className="flex h-20 flex-col items-center justify-center rounded-xl border border-neutral-700/50 bg-neutral-800/60 shadow-md"
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
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
