import { ReactNode } from 'react';
import * as styles from './heading.css';
import type { HeadingVariants } from './heading.css';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: ReactNode | string;
  variant: HeadingVariants;
};

export function Heading({ children, as, variant }: HeadingProps) {
  const Component = as || 'h1';
  return <Component className={styles.heading(variant)}>{children}</Component>;
}
