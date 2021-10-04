import * as styles from './header.css';
import { panel, wrapper } from '../../styles/utilities.css';
import { Anchor } from '../Anchor/Anchor';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { makeBreakpoint } from '../../utils/breakpoints.utils';
import { cx } from '../../utils/classname.utils';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { useTheme } from '../../hooks/useTheme';

const links = [
  { name: 'home', href: '/' },
  { name: 'login', href: '/login' },
  { name: 'register', href: '/register' },
];

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

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMatchMedia(makeBreakpoint('md'));
  const [mode, setMode] = useTheme();

  const handleTheme = () => {
    mode === 'dark' ? setMode('light') : setMode('dark');
  };

  const handleMenu = (state: boolean) => setIsOpen(state);

  return (
    <>
      <header className={cx([styles.header, panel])}>
        <div className={cx([styles.inner, wrapper])}>
          <Anchor href="/" variant={{ text: true, gap: true }}>
            <Icon name="Groupomania" variant={{ size: 'medium' }} />
            <span>Groupomania</span>
          </Anchor>

          <div className={styles.buttons}>
            <Button onClick={() => handleMenu(true)}>
              <Icon name="HamburgerMenuIcon" variant={{ size: 'small' }} />
            </Button>

            <Button onClick={handleTheme}>
              <Icon name="SunIcon" variant={{ size: 'small' }} />
            </Button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            animate="open"
            exit="close"
            initial="close"
            className={styles.menu}
            custom={isDesktop}
          >
            <aside className={styles.aside}>
              <Button onClick={() => handleMenu(false)}>
                <Icon name="Cross2Icon" variant={{ size: 'small' }} />
              </Button>

              <nav className={styles.nav}>
                {links.map((element) => (
                  <Anchor
                    key={element.href}
                    href={element.href}
                    variant={{ text: 'menu' }}
                  >
                    {element.name}
                  </Anchor>
                ))}
              </nav>
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
