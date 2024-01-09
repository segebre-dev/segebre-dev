import clsx from 'clsx';
import styles from './styles.module.css';
import { BadgeProps } from './types';

const Badge = ({ clickable = false, children }: BadgeProps) => {
  return (
    <span
      className={clsx(styles.badge, {
        [styles.clickable]: clickable,
      })}
    >
      {children}
    </span>
  );
};

export default Badge;
