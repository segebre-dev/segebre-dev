import { screen, render } from '@testing-library/react';
import NotFoundPage from '.';

it('renders the not found header', () => {
  render(<NotFoundPage />);

  expect(
    screen.getByRole('heading', { level: 1, name: /not found/i })
  ).toBeInTheDocument();
});

it('renders the not found description', () => {
  render(<NotFoundPage />);

  expect(screen.getByText(/Oops!.*hide and seek/)).toBeInTheDocument();
});

it('renders a link to the blog', () => {
  render(<NotFoundPage />);

  const linkToBlog = screen.getByRole('link', { name: 'explore the blog' });
  expect(linkToBlog).toBeInTheDocument();
  expect(linkToBlog).toHaveAttribute('href', '/blog');
});

it('renders a link to go home', () => {
  render(<NotFoundPage />);

  const linkToHomePage = screen.getByRole('link', { name: /go home/i });
  expect(linkToHomePage).toBeInTheDocument();
  expect(linkToHomePage).toHaveAttribute('href', '/');
});
