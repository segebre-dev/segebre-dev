import { render, screen } from '@testing-library/react';
import Footer from '.';

it('renders the footer element', () => {
  render(<Footer />);

  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});

it('renders the author message', () => {
  render(<Footer />);

  expect(screen.getByText('Developed by Juan Enrique Segebre Zaghmout'));
});
