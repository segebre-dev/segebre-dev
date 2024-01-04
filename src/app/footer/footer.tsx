import { GitHubIcon, LinkedInIcon } from './assets';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.socialsContainer}>
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      <p>Developed by Juan Enrique Segebre Zaghmout</p>
    </footer>
  );
};

export default Footer;
