import React from "react";

const TopNav: React.FC = () => {
  // Minimal theme toggle logic
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  // On mount, set theme from localStorage or system preference
  React.useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      root.classList.add("dark");
      setIsDark(true);
    } else if (stored === "light") {
      root.classList.remove("dark");
      setIsDark(false);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      root.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-2   border-neutral-800">
      <span className="font-bold text-lg tracking-wider text-white">AMOGH</span>
      <div className="flex items-center gap-4 text-sm text-neutral-400">
        <a href="#about" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#projects" className="hover:text-white transition-colors">
          Projects
        </a>
        <a href="#skills" className="hover:text-white transition-colors">
          Skills
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default TopNav;
