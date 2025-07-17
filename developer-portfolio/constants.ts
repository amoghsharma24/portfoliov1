import React from 'react';
import { FramerMotionIcon } from './components/icons/FramerMotionIcon';
import { Html5Icon } from './components/icons/Html5Icon';
import { CssIcon } from './components/icons/CssIcon';
import { TypeScriptIcon } from './components/icons/TypeScriptIcon';
import { NextJsIcon } from './components/icons/NextJsIcon';
import { TailwindCssIcon } from './components/icons/TailwindCssIcon';
import { SupabaseIcon } from './components/icons/SupabaseIcon';
import { ReactJsIcon } from './components/icons/ReactJsIcon';


export const GITHUB_URL = "https://github.com/duy-le";

export const SKILLS = [
    { name: "Motion", icon: FramerMotionIcon },
    { name: "HTML 5", icon: Html5Icon },
    { name: "CSS", icon: CssIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Next.js", icon: NextJsIcon },
    { name: "Tailwind CSS", icon: TailwindCssIcon },
    { name: "Supabase", icon: SupabaseIcon },
    { name: "React.js", icon: ReactJsIcon },
];

export const PROJECTS = [
    {
        title: "Portfolio Website",
        description: "This personal portfolio, built with React and Tailwind CSS.",
        repoUrl: "https://github.com/duy-le/portfolio",
    },
    {
        title: "E-commerce UI Kit",
        description: "A component library for building modern e-commerce sites.",
        repoUrl: "https://github.com/duy-le/ecommerce-kit",
    },
    {
        title: "Task Management App",
        description: "A collaborative tool to organize and track team projects.",
        repoUrl: "https://github.com/duy-le/tasks",
    },
    {
        title: "Weather Dashboard",
        description: "A simple and clean interface to check global weather forecasts.",
        repoUrl: "https://github.com/duy-le/weather-app",
    }
];

export const VISITORS = [
  { id: 1, x: '19%', y: '42%' }, // US West
  { id: 2, x: '25%', y: '35%' }, // US East
  { id: 3, x: '48%', y: '34%' }, // Europe
  { id: 4, x: '55%', y: '45%' }, // Africa
  { id: 5, x: '70%', y: '40%' }, // India/Asia
  { id: 6, x: '82%', y: '55%' }, // Australia
  { id: 7, x: '30%', y: '75%' }, // South America
  { id: 8, x: '90%', y: '35%' }, // East Asia
];