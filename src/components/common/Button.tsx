import React from 'react';
import styles from '@/styles/components/Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button className={`${styles.btn} ${className}`} {...props}>
    {children}
  </button>
);

export default Button;
