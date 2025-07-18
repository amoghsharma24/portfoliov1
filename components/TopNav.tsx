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
    <nav className="flex items-center justify-between">
      <div className="font-bold text-lg tracking-wider text-white">AMOGH</div>
      <div className="flex items-center gap-4 text-sm text-neutral-400">
        <a href="#" className="hover:text-white transition-colors">
          blog
        </a>
        <a href="#projects" className="hover:text-white transition-colors">
          projects
        </a>
        <a href="#visitors" className="hover:text-white transition-colors">
          visitors
        </a>
      </div>
    </nav>
  );
};

export default TopNav;
