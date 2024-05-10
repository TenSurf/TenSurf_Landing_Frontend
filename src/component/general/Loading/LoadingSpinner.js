// Reactive:
import React from 'react';

// css:
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = props => {
  return <div dir='ltr' className={styles.spinner + ' ' + props.className}></div>;
};

export default LoadingSpinner;
