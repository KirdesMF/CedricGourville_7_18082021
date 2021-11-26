import * as styles from './span.css';
import type { SpanVariants } from './span.css';
import { ReactNode } from 'react';
import { cx } from '../../utils/classname.utils';

export function Span({
  variant,
  children,
  className,
}: {
  variant?: SpanVariants;
  children: ReactNode;
  className?: string;
}) {
  const cls = className
    ? cx([className, styles.span(variant)])
    : styles.span(variant);

  return <span className={cls}>{children}</span>;
}
