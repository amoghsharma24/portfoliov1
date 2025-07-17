import React from 'react';

export const WavingHandIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span role="img" aria-label="waving hand" className={className}>
    👋
  </span>
);