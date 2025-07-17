import React from 'react';

export const CssIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.5 4h-14l.333 4h13.333l-.5 4h-13l.333 4 6.334 2.167 6.333-2.167.5-4h-2.167l-.25 2-3.916 1.333-3.917-1.333-.25-2h8.833l.5-4h-9.833l-.334-4h10.5z"/>
  </svg>
);