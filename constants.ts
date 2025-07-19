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
    title: "StudySync",
    description: "AI-powered learning platform for collaborative study sessions and smart flashcards.",
    overview: "Developed an AI-powered learning platform with study groups, goal-driven sessions, and smart flashcards using NLP for content generation, enabling structured, goal-oriented learning with real-time analytics.",
    techStack: ["Next.js", "React", "Supabase", "WebSockets", "Recharts", "NLP"],
    demoUrl: "",
    repoUrl: "",
    image: "/studysync-preview.jpg",
    caseStudy: {
      problem: "Students need a platform to enhance collaborative study sessions and personalize learning experiences.",
      solution: "Built StudySync with AI-driven content generation, real-time collaboration, and intelligent study planning using Next.js and Supabase.",
      challenges: [
        "Real-time WebSocket integration",
        "AI content generation",
        "Complex state management",
        "Performance optimization"
      ],
      learnings: [
        "WebSocket architecture",
        "AI/ML integration",
        "Real-time collaboration",
        "Full-stack development"
      ]
    }
  },
  {
    title: "PosturePaws",
    description: "ML-powered posture tracker with gamified feedback using computer vision.",
    overview: "Built an ML-powered posture tracker that alerts users when slouching by integrating a MoveNet model to detect body keypoints for real-time posture detection. Developed a React UI with an animated pet widget using p5.js to provide fun, engaging feedback.",
    techStack: ["MoveNet", "ml5.js", "React.js", "p5.js", "Computer Vision"],
    demoUrl: "",
    repoUrl: "",
    image: "/posturepaws-preview.jpg",
    caseStudy: {
      problem: "Remote workers and students need a way to maintain good posture while working long hours at screens.",
      solution: "Developed PosturePaws using MoveNet ML model for real-time posture detection with gamified feedback through an animated pet widget.",
      challenges: [
        "ML model integration",
        "Real-time performance",
        "Cross-browser compatibility",
        "User engagement"
      ],
      learnings: [
        "Computer vision",
        "ML model deployment",
        "Real-time processing",
        "Gamification design"
      ]
    }
  },
  {
    title: "Minecraft Maze Solver",
    description: "Procedural maze generation and solving algorithm integrated with Minecraft API.",
    overview: "Developed a maze generation algorithm using depth-first search (DFS) to create procedurally generated mazes in Minecraft, leveraging pointer-based memory management for efficiency. Integrated Minecraft’s height map API to adjust maze complexity based on terrain and validated solutions.",
    techStack: ["C++", "Git", "Minecraft API", "DFS Algorithm"],
    demoUrl: "",
    repoUrl: "",
    image: "/minecraft-maze-preview.jpg",
    caseStudy: {
      problem: "Create an engaging way to demonstrate algorithmic concepts through interactive gameplay in Minecraft.",
      solution: "Developed a maze generation algorithm using DFS and integrated it with Minecraft's API for procedural maze creation.",
      challenges: [
        "Memory management",
        "API integration",
        "Algorithm optimization",
        "Game mechanics"
      ],
      learnings: [
        "C++ programming",
        "Algorithm design",
        "API development",
        "Game integration"
      ]
    }
  },
  {
    title: "WildWatch",
    description: "Wildlife tracking and analytics platform with interactive data visualization.",
    overview: "Designed and implemented a normalised SQL schema to manage wildlife data, improving database performance by 30%. Built interactive Google Charts to visualise data and provide real-time analytics, aiding wildlife tracking and detecting risk areas 50% faster.",
    techStack: ["HTML", "CSS", "SQL", "Google Charts", "Java", "JavaScript"],
    demoUrl: "",
    repoUrl: "",
    image: "/wildwatch-preview.jpg",
    caseStudy: {
      problem: "Wildlife conservationists need an efficient system to track wildlife data and identify risk areas quickly.",
      solution: "Built WildWatch with normalized SQL schema and interactive Google Charts for real-time wildlife analytics and risk detection.",
      challenges: [
        "Database optimization",
        "Data visualization",
        "Performance improvement",
        "User interface design"
      ],
      learnings: [
        "Database design",
        "Data visualization",
        "Performance optimization",
        "Full-stack development"
      ]
    }
  },
  {
    title: "Fruitful",
    description: "Productivity app for students with data-driven dashboards and goal tracking.",
    overview: "Built data-driven dashboards to help students manage schedules, track goals, and improve academic routines using SwiftUI’s data flow properties (ObservableObject, @State, @Binding).",
    techStack: ["SwiftUI", "Swift", "Xcode"],
    demoUrl: "",
    repoUrl: "",
    image: "/fruitful-preview.jpg",
    caseStudy: {
      problem: "Students struggle to maintain productivity and balance academic goals effectively.",
      solution: "Created Fruitful, a SwiftUI app with data-driven dashboards and gamification to help students track and balance academic goals.",
      challenges: [
        "iOS development",
        "Data flow management",
        "User experience design",
        "App Store deployment"
      ],
      learnings: [
        "SwiftUI development",
        "iOS app lifecycle",
        "Data binding",
        "App Store publishing"
      ]
    }
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