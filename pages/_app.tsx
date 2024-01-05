import '../static/styles.css';
import PageWrapper from '../src/pages/page-wrapper';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
};

export default App;
