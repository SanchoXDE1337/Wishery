import React from 'react';
import styles from './styles.module.scss';

const Button: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({children, ...props}) => <button className={styles.root} {...props}>{children}</button>;
export default Button
