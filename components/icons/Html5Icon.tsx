import React from 'react';

export const Html5Icon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438zM8.5 8.5h7L15 12h-4.5l.25 2.5h4.25l-.5 4-4-1.25v.01l-.01-.01-4-1.25-.25-3h2.25l.125 1.5 2.125.625 2.125-.625.25-2.5h-6.875z" />
  </svg>
);