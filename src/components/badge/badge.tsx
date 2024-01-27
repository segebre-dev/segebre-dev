import clsx from 'clsx';
import styles from './styles.module.css';
import { BadgeProps } from './types';

const Badge = ({ clickable = false, children, className }: BadgeProps) => {
  return (
    <div
      className={clsx(
        styles.badge,
        {
          [styles.clickable]: clickable,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
