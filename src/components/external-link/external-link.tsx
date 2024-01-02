import ExternalLinkIcon from './icon.svg';
import styles from './styles.module.css';
import type { ExternalLinkProps } from './types';

const ExternalLink = ({
  children,
  noA11yIcon = false,
  ...props
}: ExternalLinkProps): React.ReactElement => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
    {!noA11yIcon && (
      <ExternalLinkIcon
        aria-label="opens in new tab"
        className={styles.inlineIcon}
      />
    )}
  </a>
);

export default ExternalLink;
