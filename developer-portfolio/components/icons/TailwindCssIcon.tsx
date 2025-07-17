import React from 'react';

export const TailwindCssIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 18.261a2.441 2.441 0 0 1-1.728-.716L4.716 12a2.441 2.441 0 0 1 0-3.456l5.556-5.556a2.441 2.441 0 0 1 3.456 0l5.556 5.556a2.441 2.441 0 0 1 0 3.456l-5.556 5.556A2.441 2.441 0 0 1 12 18.261Zm-3.284-7.47a.916.916 0 0 0 0 1.296l1.832 1.832a.916.916 0 1 0 1.296-1.296l-1.832-1.832a.916.916 0 0 0-1.296 0Zm6.568 0a.916.916 0 0 0 0 1.296l1.832 1.832a.916.916 0 1 0 1.296-1.296l-1.832-1.832a.916.916 0 0 0-1.296 0Z"/>
  </svg>
);