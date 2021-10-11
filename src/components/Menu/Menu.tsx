import { motion, Variants } from 'framer-motion';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { makeBreakpoint } from '../../utils/breakpoints.utils';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
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
];

export function Menu({ handleMenu }: { handleMenu: (v: boolean) => void }) {
  const isDesktop = useMatchMedia(makeBreakpoint('md'));

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
        <Button onClick={() => handleMenu(false)}>
          <Icon name="Cross2Icon" variant={{ size: 'small' }} />
        </Button>

        <nav className={styles.nav}>
          {LINKS.map((element) => (
            <Anchor
              navLink
              key={element.href}
              to={element.href}
              variant={{
                size: '2xl',
                color: 'primary',
                weight: 'bold',
                transform: 'uppercase',
              }}
              onClick={() => handleMenu(false)}
            >
              {element.name}
            </Anchor>
          ))}
        </nav>
      </aside>
    </motion.div>
  );
}
