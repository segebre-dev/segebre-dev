import ExternalLink from '../../components/external-link';
import { GitHubIcon, LinkedInIcon } from './assets';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.socialsContainer}>
        <ExternalLink
          href="https://github.com/segebre-dev/segebre-dev"
          noA11yIcon
        >
          <GitHubIcon alt="Juan's GitHub page" />
        </ExternalLink>
        <ExternalLink href="https://de.linkedin.com/in/segebre" noA11yIcon>
          <LinkedInIcon alt="Juan's LinkedIn page" />
        </ExternalLink>
      </div>
      <div className={styles.authorMessageContainer}>
        <p>Developed by</p>
        <p>Juan Enrique Segebre Zaghmout</p>
      </div>
    </footer>
  );
};

export default Footer;