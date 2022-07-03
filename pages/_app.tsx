import '../static/styles.css';
import type { AppProps } from 'next/app';
import PageWrapper from '../src/pages/page-wrapper';
import 'prismjs';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
};

export default App;
