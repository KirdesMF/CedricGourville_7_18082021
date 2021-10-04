import { MouseEventHandler, ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as styles from './anchor.css';

type AnchorProps = {
  children: ReactNode;
  extern?: boolean;
  href: string;
  variant?: styles.AnchorVariants;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  navLink?: boolean;
};

export function Anchor({
  children,
  extern,
  href,
  variant,
  onClick,
  navLink,
}: AnchorProps) {
  if (extern) {
    return (
      <a className={styles.anchor(variant)} href={href}>
        {children}
      </a>
    );
  }

  if (navLink) {
    return (
      <NavLink
        exact
        activeClassName={styles.activeClassName}
        onClick={onClick}
        className={styles.anchor(variant)}
        to={href}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <Link onClick={onClick} className={styles.anchor(variant)} to={href}>
      {children}
    </Link>
  );
}
