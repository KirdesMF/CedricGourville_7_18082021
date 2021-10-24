import * as styles from './span.css';
import type { SpanVariants } from './span.css';
import { ReactNode } from 'react';

export function Span({
  variant,
  children,
}: {
  variant?: SpanVariants;
  children: ReactNode;
}) {
  return <span className={styles.span(variant)}>{children}</span>;
}
