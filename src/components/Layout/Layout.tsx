import { ReactNode } from 'react';
import { LayoutVariants } from './layout.css';
import * as styles from './layout.css';

type LayoutProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  variant: LayoutVariants;
};

export function Layout({ children, as, variant }: LayoutProps) {
  const Component = as || 'div';
  return <Component className={styles.layout(variant)}>{children}</Component>;
}
