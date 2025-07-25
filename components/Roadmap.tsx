import React, { useState } from "react";
import { HiAcademicCap } from "react-icons/hi2";
import { SiSupabase, SiTypescript } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

const ROADMAP = [
  {
    icon: <HiAcademicCap className="w-5 h-5 text-blue-400" />,
    title: "Royal Melbourne Institute of Technology (RMIT)",
    location: "Melbourne, VIC",
    date: "Graduation: June 2026",
    subtitle:
      "Bachelor of Computer Science, Minor in AI/ML & Enterprise Systems",
    description: "Relevant coursework in AI, ML, Cloud, Full Stack, iOS Dev.",
  },
  {
    icon: <SiSupabase className="w-5 h-5 text-emerald-400" />,
    title: "LENSELL",
    location: "Melbourne, VIC",
    date: "June 2025 – Ongoing",
    subtitle: "Software Engineer Intern",
    description:
      "Vue.js components, RESTful APIs, code reviews, UI consistency.",
  },
  {
    icon: <SiTypescript className="w-5 h-5 text-blue-500" />,
    title: "ProceedIt",
    location: "Barcelona, Spain (Remote)",
    date: "Jan 2025 – Mar 2025",
    subtitle: "Software Engineer Intern",
    description:
      "Full-stack features (Flask, GraphQL), FlutterFlow, Docker, Agile docs.",
  },
  {
    icon: <BsApple className="w-5 h-5 text-sky-400" />,
    title: "Apple Foundation Program",
    location: "Melbourne, VIC",
    date: "Feb 2025 – Mar 2025",
    subtitle: "App Developer",
    description:
      "Built and published Fruitful (iOS), Agile teamwork, bootcamp.",
  },
  {
    icon: <FaTrophy className="w-5 h-5 text-green-400" />,
    title: "HackMelbourne 2025 - Most Innovative Award",
    location: "Melbourne, VIC",
    date: "March 2025",
    subtitle: "Team Lead, PosturePaws",
    description:
      "Led team to build ML-powered posture widget with gamified feedback.",
  },
  {
    icon: <FaMedal className="w-5 h-5 text-blue-400" />,
    title: "UNIHACKS 2025 Team Lead",
    location: "Melbourne, VIC",
    date: "March 2025",
    subtitle: "StudySync",
    description:
      "Led team to build AI-powered collaborative learning platform.",
  },
  {
    icon: <FaStar className="w-5 h-5 text-yellow-400" />,
    title: "Published iOS App (Fruitful)",
    location: "Apple Foundation Program",
    date: "March 2025",
    subtitle: "App Developer",
    description:
      "Built and published Fruitful, a productivity app for students.",
  },
  {
    icon: <FaTrophy className="w-5 h-5 text-purple-400" />,
    title: "Multiple Hackathon Wins",
    location: "Various",
    date: "2024–2025",
    subtitle: "Team Lead / Developer",
    description:
      "Recognized for innovation and leadership in several hackathons.",
  },
];

const MAX_VISIBLE = 5;

const Roadmap: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleRoadmap = showAll ? ROADMAP : ROADMAP.slice(0, MAX_VISIBLE);

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-4">My Journey & Roadmap</h2>
      <div className="max-w-2xl mx-auto">
        <h3 className="text-white font-semibold flex items-center gap-2 text-base mb-6">
          <HiAcademicCap className="text-blue-400 w-5 h-5" />
          Roadmap: Education, Experience & Achievements
        </h3>
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/60 via-neutral-700/60 to-green-400/60 rounded-full" />
          <ul className="space-y-8">
            {visibleRoadmap.map((item, idx) => (
              <li key={idx} className="relative flex gap-4 items-start">
                {/* Node icon */}
                <div className="absolute left-[-2.5rem] top-0 flex flex-col items-center">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 border-2 border-blue-500/60 shadow-lg">
                    {item.icon}
                  </span>
                  {idx !== visibleRoadmap.length - 1 && (
                    <span className="w-1 h-8 bg-blue-500/30 block mt-1 rounded-full" />
                  )}
                </div>
                <div className="ml-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                    <span className="font-semibold text-white text-base">
                      {item.title}
                    </span>
                    <span className="text-neutral-400 text-sm">
                      {item.location}
                    </span>
                    <span className="text-neutral-500 text-xs">
                      {item.date}
                    </span>
                  </div>
                  <div className="text-blue-400 font-medium mb-1">
                    {item.subtitle}
                  </div>
                  <div className="text-neutral-400 text-xs mb-1 line-clamp-2">
                    {item.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {ROADMAP.length > MAX_VISIBLE && (
            <button
              className="mt-6 ml-4 px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => setShowAll((v) => !v)}
            >
              {showAll ? "Show Less" : "Show All"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
