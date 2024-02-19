import { render, screen } from '@testing-library/react';
import BlogPostCard from '.';

it('renders the title provided', () => {
  render(
    <BlogPostCard
      title="some very shinny title"
      date={new Date()}
      lengthInMinutes={0}
    />
  );

  expect(screen.getByText('some very shinny title')).toBeInTheDocument();
});

it('renders a formatted date based on the date provided', () => {
  render(
    <BlogPostCard
      title="some very shinny title"
      date={new Date('2024-02-05')}
      lengthInMinutes={0}
    />
  );

  expect(screen.getByText('05 Feb 2024')).toBeInTheDocument();
});

it('renders the reading length in minutes', () => {
  render(
    <BlogPostCard
      title="some very shinny title"
      date={new Date()}
      lengthInMinutes={12345}
    />
  );

  expect(screen.getByText('12345 min')).toBeInTheDocument();
});
