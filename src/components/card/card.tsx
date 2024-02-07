import clsx from 'clsx';
import { CardProps } from './types';
import styles from './styles.module.css';

const Card = ({ children, className }: CardProps) => (
  <div className={clsx(styles.card, className)}>{children}</div>
);

export default Card;
