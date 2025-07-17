import React from "react";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Visitors from "./components/Visitors";
import About from "./components/About";
import Skills from "./components/Skills";
import BackgroundEffects from "./components/ui/spotlight-new";

const App: React.FC = () => {
  return (
    <div className="relative mx-auto min-h-screen max-w-2xl px-4 py-6 md:px-6 md:py-10 overflow-x-hidden">
      <BackgroundEffects />
      <TopNav />
      <main className="mt-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Visitors />
      </main>
    </div>
  );
};

export default App;
