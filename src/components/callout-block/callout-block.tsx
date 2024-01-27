import clsx from 'clsx';
import styles from './styles.module.css';
import type { CalloutBlockProps } from './types';

const CalloutBlock = ({ className, ...otherProps }: CalloutBlockProps) => (
  <figure {...otherProps} className={clsx(className, styles.calloutBlock)} />
);

export default CalloutBlock;
