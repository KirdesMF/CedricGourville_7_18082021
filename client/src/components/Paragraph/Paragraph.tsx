import { cx } from '../../utils/classname.utils';
import * as styles from './paragraph.css';
import type { ParagraphVariants } from './paragraph.css';

type ParagraphProps = {
  variant?: ParagraphVariants;
} & JSX.IntrinsicElements['p'];

export function Paragraph({ children, className, variant }: ParagraphProps) {
  const cls =
    typeof className === 'undefined'
      ? [styles.paragraph(variant)]
      : [styles.paragraph(variant), className];

  return <p className={cx(cls)}>{children}</p>;
}
