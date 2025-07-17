
import React from 'react';
import { MoonIcon } from './icons/MoonIcon';

const TopNav: React.FC = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="font-bold text-lg tracking-wider text-white">
        AMOGH
      </div>
      <div className="flex items-center gap-4 text-sm text-neutral-400">
        <a href="#" className="hover:text-white transition-colors">blog</a>
        <a href="#projects" className="hover:text-white transition-colors">projects</a>
        <a href="#visitors" className="hover:text-white transition-colors">visitors</a>
        <button aria-label="Toggle theme">
          <MoonIcon className="w-5 h-5 hover:text-white transition-colors" />
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
