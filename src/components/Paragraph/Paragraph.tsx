import { ReactNode } from 'react';
import { cx } from '../../utils/classname.utils';
import * as styles from './paragraph.css';

type ParagraphProps = {
  children: ReactNode | string;
  className?: string;
};
export function Paragraph({ children, className }: ParagraphProps) {
  const stylesArr =
    typeof className === 'undefined' ? [styles.root] : [styles.root, className];
  return <p className={cx(stylesArr)}>{children}</p>;
}
