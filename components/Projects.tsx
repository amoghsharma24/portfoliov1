import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constants";
import { GitHubIcon } from "./icons/GitHubIcon";
import { ArrowUpRightIcon } from "./icons/ArrowUpRightIcon";

interface ProjectItemProps {
  title: string;
  description: string;
  overview: string;
  techStack: string[];
  demoUrl: string;
  repoUrl: string;
  image: string;
  caseStudy: {
    problem: string;
    solution: string;
    challenges: string[];
    learnings: string[];
  };
  index: number;
}

const TechStack: React.FC<{ techStack: string[] }> = ({ techStack }) => (
  <div className="flex flex-wrap gap-2 mt-3">
    {techStack.map((tech, index) => (
      <motion.span
        key={tech}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        className="px-2 py-1 bg-neutral-800/50 text-neutral-300 text-xs rounded-md border border-neutral-700/50"
      >
        {tech}
      </motion.span>
    ))}
  </div>
);

const CaseStudy: React.FC<{
  caseStudy: ProjectItemProps["caseStudy"];
  isOpen: boolean;
}> = ({ caseStudy, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="mt-4 p-4 bg-neutral-800/30 rounded-lg border border-neutral-700/50"
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Problem</h4>
            <p className="text-neutral-300 text-sm">{caseStudy.problem}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-2">Solution</h4>
            <p className="text-neutral-300 text-sm">{caseStudy.solution}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">
                Challenges
              </h4>
              <ul className="space-y-1">
                {caseStudy.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-neutral-300 text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 flex-shrink-0"></span>
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-2">
                Learnings
              </h4>
              <ul className="space-y-1">
                {caseStudy.learnings.map((learning, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-neutral-300 text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                    {learning}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  overview,
  techStack,
  demoUrl,
  repoUrl,
  image,
  caseStudy,
  index,
}) => {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800/30">
        {/* Project Preview Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-5"></div>
          <div className="h-full w-full bg-neutral-800 flex items-center justify-center">
            <span className="text-neutral-500 text-sm">Project Preview</span>
          </div>

          {/* Hover overlay with links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm z-20 flex items-center justify-center gap-6"
          >
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600/80 border border-blue-400 rounded-xl text-base font-medium hover:bg-blue-700/90 hover:border-blue-500 transition-colors"
            >
              Live Demo
            </motion.a>
            <motion.a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-neutral-800/80 border border-neutral-500 rounded-xl text-base font-medium hover:bg-neutral-700/90 hover:border-neutral-400 transition-colors"
            >
              View Code
            </motion.a>
            <motion.button
              onClick={() => setIsCaseStudyOpen(!isCaseStudyOpen)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-900/80 border border-blue-400 rounded-xl text-base font-medium hover:bg-blue-800/90 hover:border-blue-500 transition-colors"
            >
              View Case Study
            </motion.button>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <div className="flex gap-2">
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
                title="Live Demo"
              >
                <ArrowUpRightIcon className="w-4 h-4 text-neutral-400" />
              </motion.a>
              <motion.a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors"
                title="View Code"
              >
                <GitHubIcon className="w-4 h-4 text-neutral-400" />
              </motion.a>
            </div>
          </div>

          <p className="text-neutral-300 text-sm mb-3">{description}</p>
          <p className="text-neutral-400 text-sm mb-4">{overview}</p>

          <TechStack techStack={techStack} />

          <CaseStudy caseStudy={caseStudy} isOpen={isCaseStudyOpen} />
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="my-12 scroll-mt-16 md:my-16"
      aria-label="Selected projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-block bg-neutral-800/90 text-sm text-neutral-300 rounded-full px-3 py-1 mb-6"
      >
        Projects
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-white mb-4"
      >
        Featured Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-neutral-400 text-lg mb-8 max-w-2xl"
      >
        A collection of projects showcasing my skills in full-stack development,
        UI/UX design, and problem-solving. Each project includes live demos,
        detailed case studies, and insights into the development process.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectItem key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
