import React from 'react';

export const SupabaseIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M2.433 13.98l7.261 4.22c1.19.7 2.783.7 3.972 0l7.262-4.22c1.19-.7 1.946-1.99 1.946-3.37V8.39c0-1.38-.756-2.67-1.946-3.37L13.666.8a2.3 2.3 0 00-3.972 0L2.433 5.02c-1.19.7-1.946 1.99-1.946 3.37v2.22c0 1.38.756 2.67 1.946 3.37zM12 12.23L4.93 7.82l7.07-4.11 7.07 4.11L12 12.23z"/>
  </svg>
);