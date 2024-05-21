'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import styles from './styles.module.css';
import useNavigationLinks, { NavigationLink } from './use-navigation-links';

const NavigationBreadcrumbs = () => {
  const navigationLinks: NavigationLink[] = useNavigationLinks(); // We remove the last item in the next line, therefore, we adapt the type for it to potentially be an empty array.
  const currentPage = navigationLinks.pop() as NavigationLink; // We cast to override the potential `undefined` value described on the `Array.prototype.pop()` method. We know that in this case it cannot be undefined because the type guarantees at least one item.

  // we do not want to show the navigation breadcrumbs if we are in the home page.
  if (navigationLinks.length === 0) {
    return <></>;
  }

  return (
    <nav aria-label="breadcrumbs" className={styles.container}>
      <ol>
        {navigationLinks.map(({ name, path }) => (
          <Fragment key={path}>
            <li>
              <Link href={path}>{name}</Link>
            </li>
            <span aria-hidden="true"> / </span>
          </Fragment>
        ))}
        <li aria-current="page">{currentPage.name}</li>
      </ol>
    </nav>
  );
};

export default NavigationBreadcrumbs;
