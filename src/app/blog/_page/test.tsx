import { render, screen } from '@testing-library/react';
import posts from './posts';
import BlogPage from './index';

it('renders the heading', () => {
  render(<BlogPage />);

  expect(
    screen.getByRole('heading', { level: 1, name: 'Blog' })
  ).toBeInTheDocument();
});

it('renders a link to each posts', () => {
  render(<BlogPage />);

  expect(screen.getByRole('list', { name: 'posts' })).toBeInTheDocument();

  posts.forEach(({ title, path }) => {
    const linkToBlogPost = screen.getByRole('link', {
      name: new RegExp(title),
    });

    expect(linkToBlogPost).toBeInTheDocument();
    expect(linkToBlogPost).toHaveAttribute('href', `/blog/${path}`);
  });
});
