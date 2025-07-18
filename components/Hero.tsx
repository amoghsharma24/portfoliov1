import React from "react";
import CodeSnippet from "./CodeSnippet";

const Hero: React.FC = () => {
  return (
    <div className="border border-neutral-800 bg-neutral-950/20 rounded-2xl overflow-hidden backdrop-blur-sm">
      <div className="relative">
        <CodeSnippet />
      </div>
    </div>
  );
};

export default Hero;
