import { render, screen } from '@testing-library/react';
import Card from '.';

it('renders the provided children', () => {
  render(<Card>some children</Card>);

  expect(screen.getByText('some children')).toBeInTheDocument();
});

it('forwards provided className', () => {
  render(<Card className="some-class-name">some children</Card>);

  expect(screen.getByText('some children')).toHaveClass('some-class-name');
});
