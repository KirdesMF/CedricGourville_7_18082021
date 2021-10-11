import { MouseEventHandler, ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { activeClassName } from '../../styles/helpers.css';
import { cx } from '../../utils/classname.utils';
import * as styles from './anchor.css';
import type { AnchorVariants } from './anchor.css';

type AnchorProps = {
  children: ReactNode;
  href: string;
  extern?: boolean;
  navLink?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  variant?: AnchorVariants;
};

export function Anchor({
  children,
  href,
  extern,
  navLink,
  onClick,
  variant,
  className,
}: AnchorProps) {
  const cls = className
    ? cx([className, styles.anchor(variant)])
    : styles.anchor(variant);

  if (extern) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }

  if (navLink) {
    return (
      <NavLink
        exact
        activeClassName={activeClassName}
        onClick={onClick}
        className={cls}
        to={href}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <Link onClick={onClick} className={cls} to={href}>
      {children}
    </Link>
  );
}
