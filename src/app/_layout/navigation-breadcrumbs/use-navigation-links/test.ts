import { renderHook } from '@testing-library/react';
import * as NextNavigation from 'next/navigation';
import useNavigationLinks from './use-navigation-links';

jest.mock('next/navigation');

it("returns 'home' as the name for the root node", () => {
  jest.spyOn(NextNavigation, 'usePathname').mockReturnValueOnce('/');

  const { result } = renderHook(useNavigationLinks);

  expect(result.current[0].name).toBe('home');
});

it("returns '/' as the path for the root node", () => {
  jest.spyOn(NextNavigation, 'usePathname').mockReturnValueOnce('/');

  const { result } = renderHook(useNavigationLinks);

  expect(result.current[0].path).toBe('/');
});

it('returns a node for each path segments (including the root node)', () => {
  jest
    .spyOn(NextNavigation, 'usePathname')
    .mockReturnValueOnce('/some/path/that/was/visited');

  const { result } = renderHook(useNavigationLinks);

  expect(result.current).toHaveLength(6);
});

describe('for each node in the array returned', () => {
  it('sets the name to the path segment', () => {
    jest
      .spyOn(NextNavigation, 'usePathname')
      .mockReturnValueOnce('/some/path/that/was/visited');

    const { result } = renderHook(useNavigationLinks);

    expect(result.current[1].name).toBe('some');
    expect(result.current[2].name).toBe('path');
    expect(result.current[3].name).toBe('that');
    expect(result.current[4].name).toBe('was');
    expect(result.current[5].name).toBe('visited');
  });

  it('sets the path to the href to that page', () => {
    jest
      .spyOn(NextNavigation, 'usePathname')
      .mockReturnValueOnce('/some/path/that/was/visited');

    const { result } = renderHook(useNavigationLinks);

    expect(result.current[1].path).toBe('/some');
    expect(result.current[2].path).toBe('/some/path');
    expect(result.current[3].path).toBe('/some/path/that');
    expect(result.current[4].path).toBe('/some/path/that/was');
    expect(result.current[5].path).toBe('/some/path/that/was/visited');
  });
});
