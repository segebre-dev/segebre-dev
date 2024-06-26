import clsx from 'clsx';
import ExternalLink from '@/components/external-link';
import styles from './styles.module.css';
import type { MDXComponents } from 'mdx/types';

// Define default values to adapt to expected types from useMDXComponents
const styledA = ({
  href = '#',
  children = '',
  className,
  ...otherProps
}: React.ComponentPropsWithoutRef<'a'>) => (
  <ExternalLink href={href} className={className} {...otherProps}>
    {children}
  </ExternalLink>
);

const generateStyledHeading = (Heading: 'h2' | 'h3') => {
  const generatedComponent = ({
    children,
    ...otherProps
  }: React.ComponentPropsWithoutRef<typeof Heading>) => (
    <Heading className={styles.heading} {...otherProps}>
      {children}
    </Heading>
  );
  generatedComponent.displayName = Heading;

  return generatedComponent;
};

const styledParagraph = ({
  className,
  ...otherProps
}: React.ComponentPropsWithoutRef<'p'>) => (
  <p className={clsx(className, styles.paragraph)} {...otherProps} />
);

const styledBlockquote = ({
  className,
  ...otherProps
}: React.ComponentPropsWithoutRef<'blockquote'>) => (
  <blockquote className={clsx(className, styles.blockquote)} {...otherProps} />
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: styledA,
    h2: generateStyledHeading('h2'),
    h3: generateStyledHeading('h3'),
    p: styledParagraph,
    blockquote: styledBlockquote,
    ...components,
  };
}
