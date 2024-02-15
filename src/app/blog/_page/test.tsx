import { render, screen } from '@testing-library/react';
import posts from './posts';
import BlogPage from './index';

it('renders the heading', () => {
  render(<BlogPage />);

  expect(
    screen.getByRole('heading', { level: 1, name: 'Blog' })
  ).toBeInTheDocument();
});

it('renders the list of posts', () => {
  render(<BlogPage />);

  expect(screen.getByRole('list', { name: 'posts' })).toBeInTheDocument();
  posts.forEach(({ title }) => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
