import Head from 'next/head';
import ExternalLink from '../../components/external-link';
import { basePath } from '../../utils/constants';
import styles from './styles';
import type { PageWrapperProps } from './types';

const PageWrapper = ({ children }: PageWrapperProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>segebre.dev</title>
        <link rel="icon" href={`${basePath}/favicon.png`} />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
          <span>Developed by</span>
          <span>Juan Enrique Segebre Zaghmout</span>
          <div className={styles.groupOfLinks}>
            <ExternalLink
              href="https://github.com/segebre-dev/segebre-dev"
              noA11yIcon
            >
              <img src={`${basePath}/github.png`} alt="Juan's GitHub page" />
            </ExternalLink>
            <a href={`${basePath}/`}>
              <img src={`${basePath}/favicon.png`} alt="Juan's web page" />
            </a>
            <ExternalLink href="https://de.linkedin.com/in/segebre" noA11yIcon>
              <img
                src={`${basePath}/linkedin.png`}
                alt="Juan's LinkedIn page"
              />
            </ExternalLink>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PageWrapper;
