import clsx from 'clsx';
import styles from './styles.module.css';
import type { CalloutBlockProps } from './types';

const CalloutBlock = ({
  icon,
  children,
  className,
  ...otherProps
}: CalloutBlockProps) => (
  <figure {...otherProps} className={clsx(className, styles.calloutBlock)}>
    {icon && <p aria-hidden>{icon}</p>}
    {children}
  </figure>
);

export default CalloutBlock;
