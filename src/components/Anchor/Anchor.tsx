import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import * as styles from './anchor.css';

type AnchorProps = {
  children: ReactNode;
  blank?: boolean;
  href: string;
  variant?: styles.AnchorVariants;
};

export function Anchor({ children, blank, href, variant }: AnchorProps) {
  if (blank) {
    return (
      <a className={styles.anchor(variant)} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={styles.anchor(variant)} to={href}>
      {children}
    </Link>
  );
}
