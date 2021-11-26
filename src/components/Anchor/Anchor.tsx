import { Link, LinkProps, NavLink, NavLinkProps } from 'react-router-dom';
import { activeClassName } from '../../styles/helpers.css';
import { cx } from '../../utils/classname.utils';
import * as styles from './anchor.css';
import type { AnchorVariants } from './anchor.css';

// TODO
// add constraints to links via ts

type ExternalAnchorProps = {
  variant?: AnchorVariants;
} & JSX.IntrinsicElements['a'];

export function ExternalAnchor({
  children,
  className,
  variant,
  ...anchorProps
}: ExternalAnchorProps) {
  const cls = className
    ? cx([className, styles.anchor(variant)])
    : styles.anchor(variant);

  return (
    <a className={cls} {...anchorProps}>
      {children}
    </a>
  );
}

type AnchorProps = {
  navLink?: boolean;
  variant?: AnchorVariants;
} & LinkProps &
  NavLinkProps;

export function Anchor({
  children,
  navLink,
  variant,
  className,
  ...props
}: AnchorProps) {
  const cls = className
    ? cx([className, styles.anchor(variant)])
    : styles.anchor(variant);

  if (navLink) {
    return (
      <NavLink {...props} className={cls} end>
        {children}
      </NavLink>
    );
  }

  return (
    <Link className={cls} {...props}>
      {children}
    </Link>
  );
}
