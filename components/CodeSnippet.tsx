import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { SKILLS } from "../constants";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Prompt: React.FC = () => (
  <>
    <span className="text-green-400">amogh@portfolio</span>
    <span className="text-neutral-500">:</span>
    <span className="text-blue-400">~</span>
    <span className="text-neutral-500">$ </span>
  </>
);

const BlinkingCursor: React.FC = () => (
  <motion.span
    className="inline-block w-2 h-3.5 bg-white -mb-0.5"
    animate={{ opacity: [0.2, 1, 0.2] }}
    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
  />
);

const CodeSnippet: React.FC = () => {
  const [lines, setLines] = useState<React.ReactNode[]>([]);
  const controls = useAnimation();
  const skillsText =
    "TypeScript  React  Next.js  Tailwind  Framer Motion  UI/UX";

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      const whoamiCmd = "whoami";
      let typed = "";

      for (const char of whoamiCmd) {
        if (!isMounted) return;
        typed += char;
        setLines([
          <div key="typing-whoami">
            <Prompt />
            <span className="text-white">{typed}</span>
            <BlinkingCursor />
          </div>,
        ]);
        await sleep(120); // smoother, slower typing
      }

      await sleep(600);
      const line1 = [
        <div key="whoami-done">
          <Prompt />
          <span className="text-white">{whoamiCmd}</span>
        </div>,
        <motion.div
          key="whoami-output"
          className="text-neutral-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          amoghsharma
        </motion.div>,
        <motion.div
          key="desc-output"
          className="text-neutral-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          Full-stack developer, UI enthusiast, and lifelong learner.
        </motion.div>,
      ];
      setLines(line1);

      await sleep(1200);

      const lsCmd = "ls skills";
      let typedLs = "";
      for (const char of lsCmd) {
        if (!isMounted) return;
        typedLs += char;
        setLines([
          ...line1,
          <div key="typing-ls">
            <Prompt />
            <span className="text-white">{typedLs}</span>
            <BlinkingCursor />
          </div>,
        ]);
        await sleep(90); // smoother typing
      }

      await sleep(600);
      const line2 = [
        ...line1,
        <div key="ls-done">
          <Prompt />
          <span className="text-white">{lsCmd}</span>
        </div>,
        <motion.div
          key="skills-output"
          className="text-neutral-300 whitespace-pre-wrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {skillsText}
        </motion.div>,
      ];
      setLines(line2);

      await sleep(1200);
      setLines([
        ...line2,
        <div key="idle">
          <Prompt />
          <BlinkingCursor />
        </div>,
      ]);
    };

    runAnimation();
    return () => {
      isMounted = false;
    };
  }, [skillsText]);

  return (
    <div className="bg-neutral-900/70 rounded-t-2xl px-4 pt-3 pb-4 font-mono text-xs sm:text-sm text-neutral-400">
      <div className="flex items-center mb-3">
        <div className="w-1.75 h-1.75 sm:w-3 sm:h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-1.75 h-1.75 sm:w-3 sm:h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-1.75 h-1.75 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="h-[140px] overflow-hidden select-none">
        <motion.div animate={controls}>
          {lines.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CodeSnippet;
