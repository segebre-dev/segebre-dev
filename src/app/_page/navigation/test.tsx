import { render, screen } from '@testing-library/react';
import Navigation from './navigation';

it('renders the navigation landmark', () => {
  render(<Navigation />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

it('renders a link to the blog page', () => {
  render(<Navigation />);

  const link = screen.getByRole('link', { name: 'Blog' });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/blog');
});
