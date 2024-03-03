import { render, screen } from '@testing-library/react';
import Page from '.';

it('renders name as heading', () => {
  render(<Page />);

  expect(
    screen.getByRole('heading', {
      name: 'Juan Enrique Segebre Zaghmout',
      level: 1,
    })
  ).toBeInTheDocument();
});

it('renders the navigation', () => {
  render(<Page />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

it('renders text content', () => {
  render(<Page />);

  expect(screen.getByText('welcome', { exact: false })).toBeInTheDocument();
  expect(screen.getByText('share', { exact: false })).toBeInTheDocument();
  expect(screen.getByText('open source', { exact: false })).toBeInTheDocument();
});
