import { ReactNode } from 'react';
import { LayoutVariants } from './layout.css';
import * as styles from './layout.css';
import { cx } from '../../utils/classname.utils';

type LayoutProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  variant: LayoutVariants;
  className?: string;
};

export function Layout({ children, as, variant, className }: LayoutProps) {
  const Component = as || 'div';
  const stylesArr =
    typeof className === 'undefined'
      ? [styles.layout(variant)]
      : [styles.layout(variant), className];

  return <Component className={cx(stylesArr)}>{children}</Component>;
}
