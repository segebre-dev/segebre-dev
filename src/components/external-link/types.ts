type AProps = React.ComponentPropsWithoutRef<'a'>;
type ExternalLinkProps = AProps &
  Required<Pick<AProps, 'href' | 'children'>> & {
    noA11yIcon?: boolean;
  };

export type { ExternalLinkProps };
