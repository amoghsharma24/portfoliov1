import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="my-12 scroll-mt-16 md:my-16"
      aria-label="About me"
    >
      <h1 className="text-xl font-bold text-white flex items-center">
        Hey, I'm AMOGH
      </h1>
      <div className="flex items-center mt-2">
        <span className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
        <span className="text-neutral-400">Available for work</span>
      </div>
      <p className="mt-4 text-neutral-300">
        I'm a creative software developer with five years of experience. I
        specialize in UI design and crafting engaging user experiences with
        great attention to detail.
      </p>
    </section>
  );
};

export default About;
