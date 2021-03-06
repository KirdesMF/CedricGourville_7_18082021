import { motion, Variants } from 'framer-motion';
import { useCurrentUser } from '../../api/user.api';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { makeBreakpoint } from '../../utils/breakpoints.utils';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Span } from '../Span/Span';
import * as styles from './menu.css';

const variants: Variants = {
  open: {
    x: 0,
    y: 0,
  },
  close: (isDesktop: boolean) => ({
    x: isDesktop ? '-100%' : 0,
    y: isDesktop ? 0 : '-100%',
  }),
};

const LINKS = [
  { name: 'home', href: '/' },
  { name: 'login', href: '/login' },
  { name: 'register', href: '/register' },
] as const;

const LOG_LINKS = [
  { name: 'home', href: '/' },
  { name: 'profile', href: '/users' },
  { name: 'posts', href: '/posts' },
] as const;

export function Menu({ handleMenu }: { handleMenu: (v: boolean) => void }) {
  const isDesktop = useMatchMedia(makeBreakpoint('md'));
  const { data: user } = useCurrentUser();
  const mapLinks = user ? LOG_LINKS : LINKS;

  const isAdmin = user?.role === 'ADMIN';

  return (
    <motion.div
      variants={variants}
      animate="open"
      exit="close"
      initial="close"
      custom={isDesktop}
      className={styles.menu}
    >
      <aside className={styles.aside}>
        <Button
          className={styles.button}
          variant={{ discret: true }}
          onClick={() => handleMenu(false)}
        >
          <Icon name="Cross2Icon" variant={{ size: 'small' }} />
        </Button>

        <nav className={styles.nav}>
          {mapLinks.map((element) => {
            const href =
              element.href === '/users' ? `/users/${user?.id}` : element.href;
            return (
              <Anchor
                navLink
                key={element.href}
                to={href}
                variant={{ color: 'primary' }}
                onClick={() => handleMenu(false)}
              >
                <Span variant={{ size: 'xl', weight: 'bold', uppercase: true }}>
                  {element.name}
                </Span>
              </Anchor>
            );
          })}

          {isAdmin && (
            <Anchor
              navLink
              to={'/admin'}
              variant={{ color: 'primary' }}
              onClick={() => handleMenu(false)}
            >
              <Span variant={{ size: 'xl', weight: 'bold', uppercase: true }}>
                {'Admin'}
              </Span>
            </Anchor>
          )}
        </nav>
      </aside>
    </motion.div>
  );
}
