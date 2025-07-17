import React from 'react';
import { PROJECTS } from '../constants';
import { GitHubIcon } from './icons/GitHubIcon';

interface ProjectItemProps {
  title: string;
  description: string;
  repoUrl?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, repoUrl }) => (
    <a href={repoUrl} target="_blank" rel="noreferrer noopener" className="block p-4 border border-neutral-800 bg-neutral-900/50 rounded-lg transition-colors hover:bg-neutral-800/80">
      <div className="flex items-center gap-4">
          <GitHubIcon className="w-6 h-6 text-neutral-400"/>
          <div>
            <h3 className="text-base font-bold text-white">{title}</h3>
            <p className="text-neutral-400 text-sm mt-1">{description}</p>
          </div>
      </div>
    </a>
);


const Projects: React.FC = () => {
  return (
    <section id="projects" className="my-12 scroll-mt-16 md:my-16" aria-label="Selected projects">
      <div className="inline-block bg-neutral-800/90 text-sm text-neutral-300 rounded-full px-3 py-1 mb-6">
        Projects
      </div>
      <div className="grid grid-cols-1 gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;