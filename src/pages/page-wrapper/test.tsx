import { render, screen } from '@testing-library/react';
import PageWrapper from '.';

describe('Content checks', () => {
  it('renders the author section', () => {
    render(<PageWrapper>some-content</PageWrapper>);

    expect(screen.getByText(/Developed by/)).toBeInTheDocument();
    expect(
      screen.getByText(/Juan Enrique Segebre Zaghmout/)
    ).toBeInTheDocument();
  });

  it('renders the link to GitHub', () => {
    render(<PageWrapper>some-content</PageWrapper>);

    const githubLink = screen.getByRole('link', { name: /Juan's GitHub page/ });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/segebre-dev/segebre-dev'
    );
  });

  it('renders the link to the home page', () => {
    render(<PageWrapper>some-content</PageWrapper>);

    const githubLink = screen.getByRole('link', { name: /Juan's web page/ });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', '/');
  });

  it('renders the link to the LinkedIn page', () => {
    render(<PageWrapper>some-content</PageWrapper>);

    const githubLink = screen.getByRole('link', {
      name: /Juan's LinkedIn page/,
    });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      'href',
      'https://de.linkedin.com/in/segebre'
    );
  });

  it('renders the children passed', () => {
    render(<PageWrapper>Children passed</PageWrapper>);

    expect(screen.getByText('Children passed')).toBeInTheDocument();
  });
});

describe('A11y checks', () => {
  it('has a main landmark', () => {
    render(<PageWrapper>some-content</PageWrapper>);

    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has a footer', () => {
    render(<PageWrapper>some-content</PageWrapper>);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
