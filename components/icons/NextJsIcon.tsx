import React from 'react';

export const NextJsIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M9.13,3.32,18.42,18H5.82A2.43,2.43,0,0,1,3.4,15.55V3.32H9.13m2.28,0h6.8V18h-2.7V8.47Z" />
  </svg>
);