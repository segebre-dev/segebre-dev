import { Metadata } from 'next';

const metainformation = {
  title: "An analogy on JavaScript's single-threaded asynchronicity.",
  description:
    "Uncover the secrets of JavaScript's asynchronicity and the event loop in this blog post, where we use a playful analogy featuring a waitperson, kitchen, and counter. Learn how parallel steps keep your requests smooth and why avoiding long tasks is crucial. Find out why some websites freeze! 🤓 #JavaScript #AsynchronousProgramming #EventLoop",
  date: '2023-03-03',
  lengthInMinutes: 3,
};

const metadata: Metadata = {
  title: metainformation.title,
  description: metainformation.description,
  keywords: [
    'JavaScript',
    'Engineer',
    'Frontend',
    'Asynchronous',
    'event loop',
  ],
  openGraph: {
    title: metainformation.title,
    description: metainformation.description,
    url: 'https://segebre.dev/blog/js-event-loop',
    siteName: 'segebre.dev',
    locale: 'en_US',
    type: 'article',
    publishedTime: metainformation.date,
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

export { metadata, metainformation };
