import React from "react";
import { SKILLS } from "../constants";

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="my-12 scroll-mt-16 md:my-16"
      aria-label="Skills"
    >
      <div className="inline-block bg-neutral-800/90 text-sm text-neutral-300 rounded-full px-3 py-1 mb-6">
        Skills
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {SKILLS.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center p-3 border border-neutral-800 bg-neutral-900/50 rounded-lg transition-colors hover:bg-neutral-800"
          >
            <skill.icon className="h-6 w-6 text-neutral-400" />
            <span className="mt-2 text-xs font-medium text-neutral-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
