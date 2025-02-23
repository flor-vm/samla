import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, children, variant, className, type = 'button' }) => {
  const variantClass =
    variant === 'primary'
      ? styles.primary
      : variant === 'secondary'
      ? styles.secondary
      : '';

  return (
    <button
      className={`${styles.button} ${variantClass} ${className || ''}`}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
