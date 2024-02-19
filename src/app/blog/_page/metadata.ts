import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'Blog',
  description:
    'Friendly blog posts sharing insights from my journey as a front-end software engineer.',
  openGraph: {
    title: 'Blog | segebre.dev',
    description:
      'Friendly blog posts sharing insights from my journey as a front-end software engineer.',
    url: '/blog',
    siteName: 'segebre.dev',
    locale: 'en_US',
    type: 'website',
  },
};

export { metadata };
