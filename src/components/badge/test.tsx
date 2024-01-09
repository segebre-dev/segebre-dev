import { render, screen } from '@testing-library/react';
import Badge from '.';

it('renders children', () => {
  render(<Badge>children</Badge>);

  expect(screen.getByText('children')).toBeInTheDocument();
});
