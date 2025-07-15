import React from 'react';
import styles from '@/styles/components/common/LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'medium', color = '#4fc3f7' }) => {
  return (
    <div className={`${styles.spinner} ${styles[size]}`} style={{ borderTopColor: color }}>
      <div className={styles.inner}></div>
    </div>
  );
};

export default LoadingSpinner;
