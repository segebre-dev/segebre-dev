import { Metadata } from 'next';

const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
    nocache: true,
    noimageindex: true,
    nositelinkssearchbox: true,
    nosnippet: true,
    noarchive: true,
    googleBot: {
      follow: false,
      index: false,
      nocache: true,
      noimageindex: true,
      nositelinkssearchbox: true,
      nosnippet: true,
      noarchive: true,
    },
  },
};

export { metadata };
