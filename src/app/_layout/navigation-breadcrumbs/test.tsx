import { render, screen } from '@testing-library/react';
import * as useNavigationLinksFile from './use-navigation-links';
import NavigationBreadcrumbs from '.';

jest.mock('./use-navigation-links');

it('renders the navigation breadcrumbs when NOT in the root page', () => {
  jest.spyOn(useNavigationLinksFile, 'default').mockReturnValueOnce([
    { name: 'home', path: '/' },
    { name: 'blog', path: '/blog' },
  ]);

  render(<NavigationBreadcrumbs />);

  expect(
    screen.getByRole('navigation', { name: 'breadcrumbs' })
  ).toBeInTheDocument();
});

it('does NOT renders the navigation breadcrumbs when in the root page', () => {
  jest
    .spyOn(useNavigationLinksFile, 'default')
    .mockReturnValueOnce([{ name: 'home', path: '/' }]);

  render(<NavigationBreadcrumbs />);

  expect(
    screen.queryByRole('navigation', { name: 'breadcrumbs' })
  ).not.toBeInTheDocument();
});

it('renders a link to each of the parent pages', () => {
  jest.spyOn(useNavigationLinksFile, 'default').mockReturnValueOnce([
    { name: 'home', path: '/' },
    { name: 'blog', path: '/blog' },
    { name: 'first-post', path: '/blog/first-post' },
  ]);

  render(<NavigationBreadcrumbs />);

  const homeLink = screen.getByRole('link', { name: 'home' });
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute('href', '/');

  const blogLink = screen.getByRole('link', { name: 'blog' });
  expect(blogLink).toBeInTheDocument();
  expect(blogLink).toHaveAttribute('href', '/blog');
});

it('renders the current page but not as a link', () => {
  jest.spyOn(useNavigationLinksFile, 'default').mockReturnValueOnce([
    { name: 'home', path: '/' },
    { name: 'blog', path: '/blog' },
    { name: 'first-post', path: '/blog/first-post' },
  ]);

  render(<NavigationBreadcrumbs />);

  expect(
    screen.queryByRole('link', { name: 'first-post' })
  ).not.toBeInTheDocument();

  const post = screen.getByText('first-post');
  expect(post).toBeInTheDocument();
  expect(post).toHaveAttribute('aria-current', 'page');
});
