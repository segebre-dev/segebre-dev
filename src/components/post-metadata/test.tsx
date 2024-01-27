import { render, screen } from '@testing-library/react';
import PostMetadata from '.';

it('renders the formatted date passed', () => {
  const date = new Date('2000-12-01');
  render(<PostMetadata date={date} lengthInMinutes={0} />);

  expect(screen.getByText('01 Dec 2000')).toBeInTheDocument();
});

it('renders the length in minutes passed', () => {
  const date = new Date('2000-01-01');
  render(<PostMetadata date={date} lengthInMinutes={15} />);

  expect(screen.getByText('15 min')).toBeInTheDocument();
});
