type NavigationLink = {
  name: string;
  path: string;
};

type UseNavigationLinks = () => [NavigationLink, ...NavigationLink[]];

export type { UseNavigationLinks, NavigationLink };
