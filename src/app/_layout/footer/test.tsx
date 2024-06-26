import { render, screen } from '@testing-library/react';
import Footer from '.';

it('renders the footer landmark', () => {
  render(<Footer />);

  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

it('renders the link to GitHub', () => {
  render(<Footer />);

  const githubLink = screen.getByRole('link', { name: /Juan's GitHub page/ });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute(
    'href',
    'https://github.com/segebre-dev/segebre-dev'
  );
});

it('renders the link to the LinkedIn page', () => {
  render(<Footer />);

  const githubLink = screen.getByRole('link', {
    name: /Juan's LinkedIn page/,
  });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute(
    'href',
    'https://de.linkedin.com/in/segebre'
  );
});

it('renders the author message', () => {
  render(<Footer />);

  expect(screen.getByText(/Developed by/)).toBeInTheDocument();
});

it('renders the copyright', () => {
  render(<Footer />);

  expect(
    screen.getByText(
      /© 2021 Juan Enrique Segebre Zaghmout. All rights reserved./
    )
  ).toBeInTheDocument();
});

it('renders the link to the imprint page', () => {
  render(<Footer />);

  const githubLink = screen.getByRole('link', { name: /Imprint/ });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', '/imprint');
});

it('renders the link to the privacy policy page', () => {
  render(<Footer />);

  const githubLink = screen.getByRole('link', { name: /Privacy policy/ });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', '/privacy');
});

it('renders the link to the terms of use page', () => {
  render(<Footer />);

  const githubLink = screen.getByRole('link', { name: /Terms of use/ });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', '/terms');
});
