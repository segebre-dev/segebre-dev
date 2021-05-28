import { render, screen } from '@testing-library/react';
import Home from './home';

it('renders main message', () => {
  render(<Home />);

  expect(screen.getByText(/Hello and welcome to segebre.dev/)).toBeVisible();
  expect(screen.getByText(/things that I learn/)).toBeVisible();
  expect(screen.getByText(/share it with others/)).toBeVisible();
  expect(screen.getByText(/open source/)).toBeVisible();
  expect(
    screen.getByText(/feel free to open a pull request on GitHub/)
  ).toBeVisible();
  expect(screen.getByText(/Thank you in advance!/)).toBeVisible();
});
