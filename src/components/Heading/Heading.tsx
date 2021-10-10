import { ReactNode } from 'react';
import * as styles from './heading.css';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode | string;
};

export function Heading({ children, as }: HeadingProps) {
  const Component = as || 'h1';
  return <Component className={styles.heading()}>{children}</Component>;
}
