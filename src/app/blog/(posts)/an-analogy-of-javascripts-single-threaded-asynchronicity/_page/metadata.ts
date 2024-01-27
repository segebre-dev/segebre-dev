import { Metadata } from 'next';

const metadata: Metadata = {
  title: "An analogy on JavaScript's single-threaded asynchronicity.",
  description:
    "Uncover the secrets of JavaScript's asynchronicity in this blog post, where we use a playful analogy featuring a waitperson, kitchen, and counter. Learn how parallel steps keep your requests smooth and why avoiding long tasks is crucial. Find out why some websites freeze! 🤓 #JavaScript #AsynchronousProgramming",
  keywords: [
    'JavaScript',
    'Engineer',
    'Frontend',
    'Asynchronous',
    'event loop',
  ],
  openGraph: {
    title: "An analogy on JavaScript's single-threaded asynchronicity.",
    description:
      "Uncover the secrets of JavaScript's asynchronicity in this blog post, where we use a playful analogy featuring a waitperson, kitchen, and counter. Learn how parallel steps keep your requests smooth and why avoiding long tasks is crucial. Find out why some websites freeze! 🤓 #JavaScript #AsynchronousProgramming",
    url: 'https://segebre.dev/blog/an-analogy-of-javascripts-single-threaded-asynchronicity',
    siteName: 'segebre.dev',
    locale: 'en_US',
    type: 'article',
    publishedTime: '2023-03-03',
    authors: ['Juan Enrique Segebre Zaghmout'],
    section: 'JavaScript',
    tags: [
      'JavaScript',
      'Engineer',
      'Frontend',
      'Asynchronous',
      'event',
      'loop',
    ],
  },
};

export { metadata };
