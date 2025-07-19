import React, { useState, useEffect, useRef } from "react";
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

const easterEggs: Record<string, string | React.ReactNode> = {
  "sudo hireme": (
    <span className="text-green-400">
      Permission granted! 🚀
      <br />
      Email sent to amoghsharma!
    </span>
  ),
  "cat motivation.txt": (
    <span>"Keep pushing forward, even when no one is watching." 💡</span>
  ),
};

const CodeSnippet: React.FC = () => {
  const [lines, setLines] = useState<React.ReactNode[]>([]);
  const [history, setHistory] = useState<
    { cmd: string; output: React.ReactNode }[]
  >([]);
  const [input, setInput] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const controls = useAnimation();
  const inputRef = useRef<HTMLInputElement>(null);
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
        await sleep(120);
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
        await sleep(90);
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
      setLines([]);
      setShowPrompt(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    };

    runAnimation();
    return () => {
      isMounted = false;
    };
  }, [skillsText]);

  // Command handler
  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;
    // Easter eggs
    if (easterEggs[trimmed]) {
      setHistory((h) => [...h, { cmd: trimmed, output: easterEggs[trimmed] }]);
      return;
    }
    // Basic terminal commands
    if (trimmed === "clear") {
      setHistory([]);
      return;
    }
    if (trimmed === "help") {
      setHistory((h) => [
        ...h,
        {
          cmd: trimmed,
          output: (
            <span>
              Available commands: <br />
              <span className="text-neutral-300">
                projects, contact, blog, sudo hireme, cat motivation.txt, clear,
                help, ls, whoami, pwd
              </span>
            </span>
          ),
        },
      ]);
      return;
    }
    if (trimmed === "ls") {
      setHistory((h) => [
        ...h,
        {
          cmd: trimmed,
          output: <span>about.txt projects blog contact skills</span>,
        },
      ]);
      return;
    }
    if (trimmed === "whoami") {
      setHistory((h) => [
        ...h,
        { cmd: trimmed, output: <span>amoghsharma</span> },
      ]);
      return;
    }
    if (trimmed === "pwd") {
      setHistory((h) => [
        ...h,
        { cmd: trimmed, output: <span>/home/amogh/portfolio</span> },
      ]);
      return;
    }
    // Navigation commands
    if (["projects", "project"].includes(trimmed)) {
      setHistory((h) => [
        ...h,
        { cmd: trimmed, output: <span>Opening projects section...</span> },
      ]);
      setTimeout(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
      return;
    }
    if (["contact", "email"].includes(trimmed)) {
      setHistory((h) => [
        ...h,
        {
          cmd: trimmed,
          output: (
            <span>
              Email:{" "}
              <a href="mailto:amoghsharma@gmail.com" className="underline">
                amoghsharma@gmail.com
              </a>
            </span>
          ),
        },
      ]);
      return;
    }
    if (["blog"].includes(trimmed)) {
      setHistory((h) => [
        ...h,
        {
          cmd: trimmed,
          output: <span>Coming soon! Stay tuned for blog posts.</span>,
        },
      ]);
      return;
    }
    setHistory((h) => [
      ...h,
      {
        cmd: trimmed,
        output: (
          <span className="text-red-400">Command not found: {trimmed}</span>
        ),
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <div className="bg-neutral-900/70 rounded-t-2xl px-4 pt-3 pb-4 font-mono text-xs sm:text-sm text-neutral-400">
      <div className="flex items-center mb-3">
        <div className="w-1.75 h-1.75 sm:w-3 sm:h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-1.75 h-1.75 sm:w-3 sm:h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-1.75 h-1.75 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="h-[140px] overflow-y-auto select-text no-scrollbar">
        {showPrompt ? (
          <>
            {/* Always show welcome and recommendations */}
            <div className="mb-2 text-neutral-400/70">
              Welcome to <span className="text-green-300">amogh@portfolio</span>
              !<br />
              Try commands like:{" "}
              <span className="text-neutral-300">projects</span>,{" "}
              <span className="text-neutral-300">contact</span>,{" "}
              <span className="text-neutral-300">blog</span>,{" "}
              <span className="text-neutral-300">sudo hireme</span>,{" "}
              <span className="text-neutral-300">cat motivation.txt</span>
            </div>
            {/* Only clear this part with 'clear' */}
            {history.map((item, idx) => (
              <div key={idx}>
                <div>
                  <Prompt />
                  {item.cmd}
                </div>
                <div className="ml-6">{item.output}</div>
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex items-center">
              <Prompt />
              <input
                ref={inputRef}
                className="bg-transparent outline-none text-white flex-1"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal command input"
              />
              {/* <BlinkingCursor /> */}
            </form>
          </>
        ) : (
          <motion.div animate={controls}>
            {lines.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CodeSnippet;
