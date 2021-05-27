import { render, screen } from '@testing-library/react';
import ExternalLink from '.';

it('renders a secure anchor tag', () => {
  render(<ExternalLink href="https://some.url">Some text</ExternalLink>);

  const anchor = screen.getByRole('link');
  expect(anchor).toBeInTheDocument();
  expect(anchor).toHaveProperty('target', '_blank');
  expect(anchor).toHaveProperty('rel', 'noopener noreferrer');
});

it('renders the children', () => {
  render(<ExternalLink href="https://some.url">Some text</ExternalLink>);

  expect(screen.getByRole('link', { name: /Some text/ }));
});

it('allows link target override', () => {
  render(
    <ExternalLink href="https://some.url" target="_self">
      Some text
    </ExternalLink>
  );

  expect(screen.getByRole('link')).toHaveProperty('target', '_self');
});

it('allows link relationship override', () => {
  render(
    <ExternalLink href="https://some.url" rel="next">
      Some text
    </ExternalLink>
  );

  expect(screen.getByRole('link')).toHaveProperty('rel', 'next');
});
