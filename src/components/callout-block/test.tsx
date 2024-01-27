import { render, screen } from '@testing-library/react';
import CalloutBlock from './callout-block';

it('renders "figure" landmark', () => {
  render(<CalloutBlock>some children</CalloutBlock>);

  expect(screen.getByRole('figure')).toBeInTheDocument();
});

it('renders children', () => {
  render(
    <CalloutBlock>
      <p>children 1</p>
      <div>children 2</div>
    </CalloutBlock>
  );

  expect(screen.getByText('children 1')).toBeInTheDocument();
  expect(screen.getByText('children 2')).toBeInTheDocument();
});
