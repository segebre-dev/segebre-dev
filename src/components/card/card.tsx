import clsx from 'clsx';
import { CardProps } from './types';
import styles from './styles.module.css';

const Card = ({ children, clickable, className }: CardProps) => (
  <div
    className={clsx(styles.card, className, {
      [styles.clickable]: clickable,
    })}
  >
    {children}
  </div>
);

export default Card;
