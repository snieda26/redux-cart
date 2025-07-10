import React from 'react';
import styles from '@/styles/components/Card.module.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`${styles.card} ${className}`}>{children}</div>
);

export default Card;
