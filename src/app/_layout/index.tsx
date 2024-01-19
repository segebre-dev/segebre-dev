import './global.css';
import { Metadata } from 'next';
import Footer from './footer';
import styles from './styles.module.css';
import type { LayoutProps } from './types';

const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'segebre.dev',
  creator: 'Juan Enrique Segebre Zaghmout',
  authors: [
    { name: 'Juan Enrique Segebre Zaghmout', url: 'https://segebre.dev' },
  ],
  publisher: 'Juan Enrique Segebre Zaghmout',
  category: 'technology',
  title: {
    template: '%s | segebre.dev',
    default: 'segebre.dev',
  },
  description:
    'The official site of Juan Enrique Segebre Zaghmout; A Software Engineer & Learning Advocate.',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'Developer',
    'Engineer',
    'Senior',
    'Frontend',
  ],
  metadataBase: new URL('https://segebre.dev'),
  openGraph: {
    title: 'segebre.dev',
    description:
      'The official site of Juan Enrique Segebre Zaghmout; A Software Engineer & Learning Advocate.',
    url: 'https://segebre.dev',
    siteName: 'segebre.dev',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    follow: true,
    index: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const Layout = ({ children }: LayoutProps) => (
  <html lang="en" className={styles.html}>
    <body className={styles.body}>
      <div className={styles.content}>{children}</div>
      <Footer />
    </body>
  </html>
);

export { metadata };
export default Layout;
