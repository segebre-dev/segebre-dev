import { AProps } from 'react-html-props';

type ExternalLinkProps = AProps &
  Required<Pick<AProps, 'href' | 'children'>> & {
    noA11yIcon?: boolean;
  };

export type { ExternalLinkProps };
