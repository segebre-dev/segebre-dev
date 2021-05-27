import type { AppProps } from 'next/app';
import Head from 'next/head';
import ExternalLink from '../../components/external-link';
import styles from './styles.module.css';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Head>
        <title>segebre.dev</title>
        <link
          rel="icon"
          href={`${process.env.__NEXT_ROUTER_BASEPATH}/favicon.png`}
        />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>

        <footer className={styles.footer}>
          <span>Developed by</span>
          <span>Juan Enrique Segebre Zaghmout</span>
          <div className={styles.groupOfLinks}>
            <ExternalLink
              href="https://github.com/segebre-dev/segebre-dev"
              noA11yIcon
            >
              <img
                src={`${process.env.__NEXT_ROUTER_BASEPATH}/github.png`}
                alt="Juan's GitHub page"
              />
            </ExternalLink>
            <a href={process.env.__NEXT_ROUTER_BASEPATH}>
              <img
                src={`${process.env.__NEXT_ROUTER_BASEPATH}/favicon.png`}
                alt="Juan's web page"
              />
            </a>
            <ExternalLink href="https://de.linkedin.com/in/segebre" noA11yIcon>
              <img
                src={`${process.env.__NEXT_ROUTER_BASEPATH}/linkedin.png`}
                alt="Juan's LinkedIn page"
              />
            </ExternalLink>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
