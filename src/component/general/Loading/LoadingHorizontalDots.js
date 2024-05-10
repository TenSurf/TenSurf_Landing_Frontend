// Reactive:
import React from 'react';

// css:
import styles from './LoadingHorizontalDots.module.css';

const LoadingHorizontalDots = ({ IsDark = true }) => {
  return (
    <div className={`${styles?.typing} ${IsDark ? ' bg-neutral-800' : 'bg-neutral-50'}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default LoadingHorizontalDots;
