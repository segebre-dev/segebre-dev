import { render, screen } from '@testing-library/react';
import Page from '.';

test('renders name as heading', () => {
  render(<Page />);

  expect(
    screen.getByRole('heading', {
      name: 'Juan Enrique Segebre Zaghmout',
      level: 1,
    })
  ).toBeInTheDocument();
});

test('renders text content', () => {
  render(<Page />);

  expect(screen.getByText('welcome', { exact: false })).toBeInTheDocument();
  expect(screen.getByText('share', { exact: false })).toBeInTheDocument();
  expect(screen.getByText('open source', { exact: false })).toBeInTheDocument();
});
