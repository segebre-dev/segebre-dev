import { usePathname } from 'next/navigation';
import { NavigationLink, UseNavigationLinks } from './types';

const homeNavigationLink = {
  name: 'home',
  path: '/',
};

const useNavigationLinks: UseNavigationLinks = () => {
  const pathname = usePathname().substring(1); // remove the initial '/' to avoid edge-cases when splitting by '/'.

  if (pathname === '') {
    // We are in the home page
    return [homeNavigationLink];
  }

  const pathNodes = pathname.split('/');
  let pathAccumulator = '';

  const subNavigationLinks: NavigationLink[] = pathNodes.map(
    (pathIterator) => ({
      name: pathIterator,
      path: (pathAccumulator += `/${pathIterator}`), // we need the previous paths to build the current one.
    })
  );

  return [homeNavigationLink, ...subNavigationLinks];
};

export default useNavigationLinks;
